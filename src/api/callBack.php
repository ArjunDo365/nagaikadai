<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

// Read JSON Data
$data = json_decode(file_get_contents("php://input"), true);

if (!$data) {
    echo json_encode(["status" => "error", "message" => "Invalid JSON"]);
    exit;
}

// Collect Input
$company_name = trim($data['company_name'] ?? '');
$mobile_no = trim($data['mobile_no'] ?? '');
$work_email = trim($data['work_email'] ?? '');
$monthly_volume = trim($data['monthly_volume'] ?? '');
$primary_use = trim($data['primary_use'] ?? '');

// Basic Validation -> Only mobile number is required
if (!$mobile_no) {
    echo json_encode(["status" => "error", "message" => "Mobile number is required"]);
    exit;
}

// Validate email only if provided
if ($work_email && !filter_var($work_email, FILTER_VALIDATE_EMAIL)) {
    echo json_encode(["status" => "error", "message" => "Invalid email"]);
    exit;
}


// Convert empty fields to NULL for DB
$company_name = $company_name ?: null;
$work_email = $work_email ?: null;
$monthly_volume = $monthly_volume ?: null;
$primary_use = $primary_use ?: null;

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

// Save Contact Data
$stmt = $conn->prepare("
    INSERT INTO contacts (company_name, mobile_no, work_email, monthly_volume, primary_use)
    VALUES (?, ?, ?, ?, ?)
");
$stmt->bind_param("sssss", $company_name, $mobile_no, $work_email, $monthly_volume, $primary_use);

if (!$stmt->execute()) {
    echo json_encode(["status" => "error", "message" => "Failed to save data"]);
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
    "phone" => "+91" . $mobile_no,
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

$conn->close();

// Final Response
echo json_encode([
    "status" => "success",
    "message" => "Data saved & call task created",
    "taskId" => $taskId
]);

?>
