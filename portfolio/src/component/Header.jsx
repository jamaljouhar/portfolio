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
    <header className="fixed-top border-bottom shadow-sm">
      <div className="container d-flex justify-content-between align-items-center p-3">
        <h2
          className={`fw-bold ${darkMode ? "text-info" : "text-primary"} m-0`}
        >
          Jamal JOUHARI<span className="fs-2">.</span>
        </h2>

        {/* Navigation desktop */}
        <nav className="d-none d-lg-block">
          <ul className="nav gap-3">
            {["Home", "About", "Projects", "Skills", "Contact"].map((item) => (
              <li className="nav-item" key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className={`nav-link fw-bold ${
                    darkMode ? "text-white" : "text-dark"
                  }`}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Hamburger & theme toggle */}
        <div className="d-flex align-items-center gap-2">
          <button
            className="navbar-toggler d-lg-none border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarMenu"
          >
            <List color={darkMode ? "white" : "black"} size={30} />
          </button>

          <button
            onClick={toggleTheme}
            className={'btn btn-sm '}
          >
            {darkMode ? "☀️" : "🌙"}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className="collapse w-50" id="navbarMenu">
        <div className={`p-3 ${darkMode ? "bg-dark" : "bg-light"}`}>
          <ul className="nav flex-column gap-2">
            {["Home", "About", "Projects", "Skills", "Contact"].map((item) => (
              <li className="nav-item" key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className={`nav-link fw-bold ${
                    darkMode ? "text-white" : "text-dark"
                  }`}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
