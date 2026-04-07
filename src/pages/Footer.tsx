import "../assets/css/styles.css";
import brandlogo from "../assets/images/jLogo.png";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-inner">
          <div className="footer-brand">
            {/* <div className="brand">
              <img
                className="brandLogo"
                src={brandlogo}
                alt="logo of olivox"
                style={{ cursor: "pointer" }}
                onClick={() =>
                  document
                    .getElementById("hero")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              />
              
            </div> */}
            {/* <p>
              Olivox is an AI-powered voice assistant that streamlines your
              tasks and helps you communicate effortlessly with smart, natural
              conversations.
            </p> */}
          </div>
          {/* <div className="footer-links">
            <div className="footer-links-col">
              <span>Platform</span>
              <a href="#features">Capabilities</a>
              <a href="#voice-demo">Live demo</a>
              <a href="#pricing">Pricing</a>
            </div>
            <div className="footer-links-col">
              <span>Solutions</span>
              <a href="#industries">Contact centers</a>
              <a href="#industries">Sales &amp; outbound</a>
            </div>
            <div className="footer-links-col">
              <span>Company</span>
              <a href="#cta">Talk to us</a>
              <a href="#faq">Security &amp; FAQ</a>
            </div>
          </div> */}
        </div>
        <div className="footer-bottom !flex !items-center !justify-center">
          {/* <span>
            &copy; <span id="year"></span> Olivox, Inc. All rights reserved.
          </span> */}
          <p
            onClick={() => window.open("https://do365tech.com", "_blank")}
            className="cursor-pointer ml-1 company-name"
          >
            ⚡ Powered by DO365 Technologies
          </p>
          {/* <span>
            <a href="#">Privacy</a> · <a href="#">Terms</a>
          </span> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
