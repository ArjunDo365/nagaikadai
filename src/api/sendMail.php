<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

// -------------------------
// Read React JSON input
// -------------------------
$data = json_decode(file_get_contents("php://input"), true);

if (!$data) {
    echo json_encode(["status" => "error", "message" => "Invalid JSON"]);
    exit;
}

$company_name = trim($data['company_name'] ?? '');
$mobile_no = trim($data['mobile_no'] ?? '');
$work_email = trim($data['work_email'] ?? '');
$monthly_volume = trim($data['monthly_volume'] ?? '');
$primary_use = trim($data['primary_use'] ?? '');

// -------------------------
// VALIDATION
// -------------------------
if (empty($company_name) || empty($mobile_no) || empty($work_email) || empty($monthly_volume) || empty($primary_use)) {
    echo json_encode(["status" => "error", "message" => "All fields are required"]);
    exit;
}

if (!filter_var($work_email, FILTER_VALIDATE_EMAIL)) {
    echo json_encode(["status" => "error", "message" => "Invalid email"]);
    exit;
}


// -------------------------
// 1️⃣ SAVE TO MYSQL
// -------------------------
$host = "localhost";
$user = "u260965545_olivox";
$pass = "Ex10sion$.";
$db   = "u260965545_olivox";

$conn = new mysqli($host, $user, $pass, $db);

if ($conn->connect_error) {
    echo json_encode(["status" => "error", "message" => "DB connection failed"]);
    exit;
}

// Insert into database
$stmt = $conn->prepare("INSERT INTO contacts (company_name, mobile_no, work_email, monthly_volume, primary_use) VALUES (?, ?, ?, ?, ?)");
$stmt->bind_param("sssss", $company_name, $mobile_no, $work_email, $monthly_volume, $primary_use);

if (!$stmt->execute()) {
    echo json_encode(["status" => "error", "message" => "Failed to save data"]);echo json_encode(["status" => "error", "message" => "DB insert failed"]);
    exit;
}

$contact_id = $conn->insert_id; // new record id

// ------------------------------------------------------------------
// 🔹 Create Outbound Task using HoomanLabs API
// ------------------------------------------------------------------
$apiData = [
    "from" => "+918031274959",
    "company" => "r9tGAcsvuqfUAs0ZcDRI",
    "agent" => "r9tgacsvuqfuas0zcdri_product_features_explanation_and_demo_booking__ta-IN_v1",
    "start" => 500,
    "end" => 2359,
    "startAfter" => time() * 1000,
    "endAfter" => (time() + (30 * 24 * 60 * 60)) * 1000,
    "priorities" => [1024,1024,1024],
    "retries" => 3,
    "intervals" => [1800000, 3600000,7200000],
    "retryOutcomes" => [],
    "campaign" => "51bgoGhM2h4CfDX4XKp2",
    "phone" =>  $mobile_no,
    "context" => new stdClass() // ← FIXED HERE
];


$ch = curl_init("https://core.hoomanlabs.com/routes/external/outbound/task/create/");
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    "Content-Type: application/json",
    "Authorization: Bearer 4a089412-b980-4033-97df-9bfe56f539a7"
]);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($apiData));
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

$response = curl_exec($ch);
file_put_contents("hooman_api_log.txt", $response . PHP_EOL, FILE_APPEND);

curl_close($ch);

$responseData = json_decode($response, true);
$taskId = $responseData['taskId'] ?? null;

// Store taskId in DB
if ($taskId) {
    $update = $conn->prepare("UPDATE contacts SET hooman_task_id = ?, call_status = 'PENDING' WHERE id = ?");
    $update->bind_param("si", $taskId, $contact_id);
    $update->execute();
}


/// -------------------------
// 2️⃣ SEND EMAIL USING PHPMailer (SMTP)
// -------------------------
$mail = new PHPMailer(true);

try {
    // SMTP Settings
    $mail->isSMTP();
    $mail->Host       = "smtp.hostinger.com";
    $mail->SMTPAuth   = true;
    $mail->Username   = "noreply@olivox.ai";
    $mail->Password   = "Ex10sion$.";
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    $mail->Port       = 465;

    // -------------------------
    // Email To Admin
    // -------------------------
    $mail->setFrom("noreply@olivox.ai", "Olivox AI Enquiry");
    $mail->addAddress("joie.m@do365tech.com", 'Joie M'); 
    $mail->addCC('support@do365tech.com');
    $mail->addReplyTo($work_email, $company_name);
    $mail->isHTML(true);
    $mail->Subject = "New Enquiry from Olivox AI";
    $mail->Body = "
        <h3>New Enquiry from Olivox AI</h3>
        <p><strong>Company Name:</strong> $company_name</p>
        <p><strong>Mobile No:</strong> $mobile_no</p>
        <p><strong>Work Email:</strong> $work_email</p>
        <p><strong>Monthly Voice minutes:</strong> $monthly_volume</p>
        <p><strong>Primary use case:</strong><br>$primary_use</p>
    ";
    $mail->send();


// -------------------------
// Auto Reply To Client
// -------------------------
    $mail->clearAddresses();
    $mail->addAddress($work_email);

    $mail->isHTML(true);
    $mail->CharSet = 'UTF-8';

    $mail->addEmbeddedImage(__DIR__ . '/../oli.png', 'logo_cid');

    $mail->Subject = "We've Received Your Enquiry";

    $mail->Body = '
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>Thanks for your enquiry</title>
</head>
<body style="margin:0;padding:0;background-color:#f4f6f8;font-family:Segoe UI,Roboto,Helvetica,Arial,sans-serif;">

  <!-- Preheader (hidden) -->
  <div style="display:none;font-size:1px;color:#f4f6f8;line-height:1px;max-height:0px;max-width:0px;opacity:0;overflow:hidden;">
    Thanks for contacting ' . htmlspecialchars($company_name) . ' — we received your enquiry and will respond soon.
  </div>

  <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
    <tr>
      <td align="center" style="padding:28px 12px;">
        <table width="600" cellpadding="0" cellspacing="0" role="presentation" style="width:600px;background:#ffffff;border-radius:8px;overflow:hidden;box-shadow:0 6px 18px rgba(0,0,0,0.06);">

          <!-- Header -->
          <tr>
            <td style="padding:20px 28px;background:linear-gradient(90deg,#F1F3F4,#7c4dff);color:#ffffff;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td align="left" style="vertical-align:middle;">
                    <img src="cid:logo_cid" alt="Olivox AI Logo"
                         style="display:block;max-width:160px;width:160px;height:auto;" />
                  </td>
                  <td align="right" style="vertical-align:middle;color:#ffffff;font-weight:600;font-size:14px;">
                    Enquiry Received
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Intro -->
          <tr>
            <td style="padding:28px 28px 8px;">
              <h1 style="margin:0 0 8px;font-size:24px;line-height:28px;color:#0f1724;font-weight:700;">
                Thanks, ' . $company_name   . '!
              </h1>
              <p style="margin:0 0 18px;color:#475569;font-size:15px;line-height:22px;">
                We’ve received your enquiry. We’ll get back to you shortly with a call from our Olivox AI Voice Agent
                <strong>+91 80312 74959</strong>.
              </p>
              <p style="margin:0 0 18px;color:#475569;font-size:15px;line-height:22px;">
                Meanwhile, feel free to check our website:
              </p>

              <!-- CTA button -->
              <a href="https://olivox.ai"
                 style="background:#7c4dff;padding:12px 24px;text-decoration:none;
                 color:#ffffff;border-radius:6px;font-weight:600;display:inline-block;">
                Visit Website
              </a>

              <p style="margin-top:22px;color:#475569;font-size:15px;">
                Warm regards,<br><strong>Olivox AI Team</strong>
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>

</body>
</html>';
    $mail->send();



    // Final Response
    echo json_encode([
        "status" => "success",
        "message" => "Data saved & both emails sent successfully"
    ]);

} catch (Exception $e) {

    echo json_encode([
        "status" => "warning",
        "message" => "Saved to DB but emails failed",
        "error" => $mail->ErrorInfo
    ]);
}

$conn->close();
?>
