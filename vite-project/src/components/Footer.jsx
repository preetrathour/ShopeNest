// src/components/Footer.jsx
import React from "react";
import "./Footer.css";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer-container">
      {/* Back to top button */}
      <div className="back-to-top" onClick={scrollToTop}>
        Back to top
      </div>

      {/* Main Footer Links */}
      <div className="footer-links-container">
        <div className="footer-links-grid">
          <div className="footer-column">
            <h3>Get to Know Us</h3>
            <ul>
              <li>
                <a href="#about">About Us</a>
              </li>
              <li>
                <a href="#careers">Careers</a>
              </li>
              <li>
                <a href="#press">Press Releases</a>
              </li>
              <li>
                <a href="#amazon-science">Amazon Science</a>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Connect with Us</h3>
            <ul>
              <li>
                <a href="#facebook">Facebook</a>
              </li>
              <li>
                <a href="#twitter">Twitter</a>
              </li>
              <li>
                <a href="#instagram">Instagram</a>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Make Money with Us</h3>
            <ul>
              <li>
                <a href="#sell">Sell on Amazon</a>
              </li>
              <li>
                <a href="#accelerator">Protect & Build Your Brand</a>
              </li>
              <li>
                <a href="#affiliate">Become an Affiliate</a>
              </li>
              <li>
                <a href="#fulfillment">Fulfillment by Amazon</a>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Let Us Help You</h3>
            <ul>
              <li>
                <a href="#account">Your Account</a>
              </li>
              <li>
                <a href="#returns">Returns Centre</a>
              </li>
              <li>
                <a href="#recall">Recalls and Product Safety Alerts</a>
              </li>
              <li>
                <a href="#help">Help</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Section */}
      <div className="footer-bottom">
        <div className="footer-logo">shopNest.in</div>
        <div className="footer-legal-links">
          <a href="#conditions">Conditions of Use & Sale</a>
          <a href="#privacy">Privacy Notice</a>
          <a href="#interest-ads">Interest-Based Ads</a>
        </div>
        <p>© 1996-2026, shoNest.com, Inc. or its affiliates</p>
      </div>
    </footer>
  );
}

export default Footer;
