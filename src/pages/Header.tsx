import React, { useEffect, useState } from "react";
import "../assets/css/styles.css";
import brandlogo from "../assets/images/jLogo.png";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    document.addEventListener("click", (e) => {
      // close mobile nav when clicking outside could be added here
    });
  }, []);

  return (
    <header className="site-header">
      <div className="site-header-inner container">
        <div
          style={{ cursor: "pointer" }}
          className="brand"
          onClick={() =>
            document
              .getElementById("hero")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          <img className="brandLogo" src={brandlogo} alt="logo of olivox" />
          {/* <div className="brand-mark">
            <div className="brand-mark-inner">
              <div className="brand-mark-wave" />
            </div>
          </div> */}
          <div className="brand-text">
            <div className="brand-title">Nagaikadai Jewellers</div>
            {/* <div className="brand-subtitle">AI Voice Agent</div> */}
          </div>
          {/* <div className="brand-subtitle">AI Voice Agent</div> */}
        </div>

        <nav className="nav-links" aria-label="Primary navigation">
          <a href="#features">About</a>
          <a href="#voice-demo">Services</a>
          <a href="#voice-demo">Today's Rate</a>
          <a href="#pricing">Gallery</a>
          <a href="#faq">Contact</a>
        </nav>

        {/* <div className="header-cta">
          <div className="badge-pill">
            <span className="badge-dot" /> AI Voice Agents Live
          </div>
          <button
            className="btn btn-primary"
            onClick={() =>
              document
                .getElementById("cta")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Book a demo
          </button>
          <button
            className="nav-toggle"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((s) => !s)}
          >
            <span className="nav-toggle-icon">
              <span />
              <span />
              <span />
            </span>
          </button>
        </div> */}
      </div>

      <div
        id="mobile-nav"
        className="mobile-nav"
        style={{ display: mobileOpen ? "block" : "none" }}
      >
        <div className="mobile-nav-inner container">
          <div className="mobile-nav-links">
            <a href="#features">Features</a>
            <a href="#voice-demo">Live demo</a>
            <a href="#pricing">Pricing</a>
            <a href="#faq">FAQ</a>
          </div>
          <div className="mobile-nav-cta">
            <button className="btn btn-primary">Book a demo</button>
            <button className="btn btn-outline">Contact sales</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
