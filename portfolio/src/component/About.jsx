import React from "react";
import { FaRocket, FaClock, FaUsers } from "react-icons/fa";

function About() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title text-start">About Me</h2>

        <div className="row align-items-center gy-5">
          <div className="col-lg-7">
            <h3 className="about-title">Passionate Full Stack Developer</h3>

            <p className="about-text">
              I’m Jamal Jouhari, a passionate Full Stack Developer specializing
              in building modern, scalable, and high-performance web
              applications using React and Spring Boot. I focus on crafting
              clean, user-friendly interfaces combined with robust and secure
              backend systems. My goal is to transform ideas into efficient
              digital solutions while maintaining high code quality,
              performance, and great user experience.
            </p>

            <div className="stats-grid">
              {[
                {
                  number: "15+",
                  label: "Projects Completed",
                  icon: <FaRocket />,
                },
                { number: "2+", label: "Years Experience", icon: <FaClock /> },
                { number: "10+", label: "Happy Clients", icon: <FaUsers /> },
              ].map((stat, i) => (
                <div className="stat-modern" key={i}>
                  <span className="stat-icon text-info">{stat.icon}</span>
                  <h3 className="stat-number">{stat.number}</h3>
                  <p className="stat-label">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="d-flex flex-column flex-sm-row gap-4 justify-content-center justify-content-lg-start">

                <a
                  href="#contact"
                  className=" mt-4 d-inline-block btn btn-outline-info fw-bold px-4 w-sm-auto"
                >
                  Contact Me
                </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
