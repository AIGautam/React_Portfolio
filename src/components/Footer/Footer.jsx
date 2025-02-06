import React from "react";
import { FaLinkedin, FaXTwitter, FaInstagram } from "react-icons/fa6";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-icons">
        <a href="https://www.linkedin.com/in/gautam-kumar-50773b264/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://x.com/Gautam017050" target="_blank" rel="noopener noreferrer">
          <FaXTwitter />
        </a>
        <a href="https://www.instagram.com/gautam_vishwa_08/" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
      </div>
      <p className="copyright">© 2025 Gautam Portfolio. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
