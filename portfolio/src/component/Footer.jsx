import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <footer
      className="bg-dark text-white pt-5 pb-3"
      style={{ borderTop: "3px solid #0dcaf0" }}
    >
      <div className="container">
        <div className="row text-center text-md-start g-4">
          {/* About / Brand */}
          <div className="col-md-4">
            <h5 className="text-info fw-bold">Jamal Jouhari</h5>
            <p className="text-secondary">
              Passionate Web Developer building beautiful <br /> and responsive
              web applications.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4">
            <h5 className="text-info fw-bold mb-3">Quick Links</h5>
            <ul className="list-unstyled d-flex flex-wrap gap-3 mb-0 text-center">
              {["Home", "About", "Projects", "Skills", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="nav-link text-white text-center fw-bold text-decoration-none px-2 py-1 transition-link"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Social Media */}
          <div className="col-md-4">
            <h5 className="text-info fw-bold mb-3">Follow Me</h5>
            <div className="d-flex gap-5 justify-content-center justify-content-md-start">
              <a href="#" className="text-white fs-5 hover-icon">
                <FaFacebookF size={30} color="#2981b9" />
              </a>
              <a href="#" className="text-white fs-5 hover-icon">
                <FaTwitter size={30} color="#E34F26" />
              </a>
              <a href="#" className="text-white fs-5 hover-icon">
                <FaLinkedinIn size={30} color="#339933" />
              </a>
              <a href="#" className="text-white fs-5 hover-icon">
                <FaGithub size={30} color="#555555" />
              </a>
            </div>
          </div>
        </div>

        <hr className="bg-secondary my-4" />

        {/* Copyright */}
        <div className="text-center text-secondary">
          &copy; {new Date().getFullYear()} Jamal Jouhari. All rights reserved.
        </div>
      </div>

      {/* Inline hover effect */}
      <style jsx>{`
        .hover-icon:hover {
          color: #0dcaf0;
          transform: translateY(-3px);
          transition: 0.3s;
        }
      `}</style>
    </footer>
  );
}

export default Footer;
