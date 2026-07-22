import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        {/* BRAND */}
        <div className="footer-box">
          <h3>Jamal Jouhari</h3>
          <p>
            Full Stack Developer passionate about building modern, scalable web
            applications.
          </p>
        </div>

        {/* LINKS */}
        <div className="footer-box">
          <h4>Quick Links</h4>

          <ul>
            {["Home", "About", "Projects", "Skills", "Contact"].map((item) => (
              <li key={item}>
                <a href={`#${item.toLowerCase()}`}>{item}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* SOCIAL */}
        <div className="footer-box">
          <h4>Follow Me</h4>

          <div className="social ">
            <a href="#">
              <FaFacebookF />
            </a>
            <a href="#">
              <FaTwitter />
            </a>
            <a href="#">
              <FaLinkedinIn />
            </a>
            <a href="#">
              <FaGithub />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Jamal Jouhari — All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
