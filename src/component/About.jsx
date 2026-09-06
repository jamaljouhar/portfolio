import React from "react";
import { FaRocket, FaClock, FaUsers, FaCode, FaCheckCircle } from "react-icons/fa";

function About() {
  const stats = [
    {
      number: "15+",
      label: "Projects Completed",
      icon: <FaRocket />,
    },
    {
      number: "2+",
      label: "Years Experience",
      icon: <FaClock />,
    },
    {
      number: "10+",
      label: "Happy Clients",
      icon: <FaUsers />,
    },
  ];

  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title">About Me</h2>

        <div className="row align-items-center">
          <div className="col-lg-7">
            <h3 className="about-title">Passionate Full-Stack Developer</h3>

            <p className="about-text">
              I’m Jamal Jouhari, a Full-Stack Developer passionate about
              building modern, scalable, and high-performance web applications.
            </p>

            <p className="about-text">
              I specialize in React, Angular, Spring Boot, and Laravel, with a
              strong focus on clean architecture, secure APIs, performance, and
              maintainable code.
            </p>

            <p className="about-text">
              I turn ideas into reliable digital solutions while continuously
              improving my skills and embracing new technologies.
            </p>

            <div className="about-highlights">
              <div className="d-flex gap-2">
                <FaCode className="fs-4 text-success" />
                <div>
                  <strong>Clean & Scalable Code</strong>
                </div>
              </div>

              <div className="d-flex gap-2 mt-2">
                <FaCheckCircle className="fs-4 text-info" />
                <div>
                  <strong>Quality & Performance</strong>
                </div>
              </div>
            </div>

            <div className="stats-grid">
              {stats.map((stat, i) => (
                <div className="stat-modern" key={i}>
                  <span className="stat-icon">{stat.icon}</span>
                  <h3 className="stat-number">{stat.number}</h3>
                  <p className="stat-label">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-lg-start mt-4">
              <a href="#contact" className="btn btn-primary fw-bold px-4 py-2">
                Let's Work Together
              </a>

              <a
                href="#projects"
                className="btn btn-outline-info fw-bold px-4 py-2"
              >
                View My Projects
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
