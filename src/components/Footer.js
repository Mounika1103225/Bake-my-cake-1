import React from "react";
import './Footer.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-left">
        {/* Social Media Icons Section */}
        <div className="footer-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="footer-icon" aria-label="Facebook">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="footer-icon" aria-label="Instagram">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="footer-icon" aria-label="LinkedIn">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>

        {/* Copyright Section */}
        <div className="footer-copyright">
          <p className="footer-copyright-text">
            &copy; <span className="brand-name">BakeMyCake</span>
          </p>
          <p className="footer-rights">All Rights Reserved</p>
        </div>
      </div>

      <div className="footer-center">
        <p>Know Us</p>
        <p>Contact Us</p>
        <p>About Us</p>
      </div>
      <div className="footer-right">
        <p>Need Help</p>
        <p>FAQ</p>
        <p>Terms and Conditions</p>
      </div>
    </footer>
  );
}
