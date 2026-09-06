import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { List } from "react-bootstrap-icons";

function Header() {
  const [darkMode, setDarkMode] = useState(true); // true = dark

  useEffect(() => {
    document.body.classList.remove("dark-mode", "light-mode");
    document.body.classList.add(darkMode ? "dark-mode" : "light-mode");
  }, [darkMode]);

  const toggleTheme = () => setDarkMode((prev) => !prev);

  return (
    <header className="site-header fixed-top">
    <div className="container">
      <div className="header-inner">
        <a href="#home" className="logo">
          <span>J</span>
          <span>J</span>
        </a>

        <nav className="desktop-nav">
          <ul>
            {["Home", "About", "Projects", "Skills", "Contact"].map((item) => (
              <li key={item}>
                <a href={`#${item.toLowerCase()}`}>{item}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header-actions">
          <button
            onClick={toggleTheme}
            className="theme-btn"
            aria-label="Toggle theme"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>

          <button
            className="mobile-menu-btn"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mobileNavbar"
            aria-controls="mobileNavbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <List size={27} />
          </button>
        </div>
      </div>
    </div>

    <div className="collapse mobile-navbar" id="mobileNavbar">
      <div className="container">
        <nav>
          <ul>
            {["Home", "About", "Projects", "Skills", "Contact"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  data-bs-toggle="collapse"
                  data-bs-target="#mobileNavbar"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  </header>
  )
}

export default Header;
