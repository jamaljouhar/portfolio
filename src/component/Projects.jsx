import React from "react";
import ecommerceImg from "../assets/ecommerce.jpg";
import employerImg from "../assets/employer.jpg";
import weatherImg from "../assets/weather.jpg";
import authImg from "../assets/auth.png";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const projectsData = [
  {
    title: "Employee Management System",
    image: employerImg,
    description:
      "A full-stack employee management system for managing employees through a modern administrative interface.",
    tech: [
      "React.js",
      "PrimeReact",
      "Spring Boot",
      "Bootstrap 5",
      "PostgreSQL",
    ],
    live: null,
    github: "https://github.com/jamaljouhar/employees-management-system",
  },
  {
    title: "E-commerce Website",
    image: ecommerceImg,
    description:
      "A full-stack e-commerce platform with product management, authentication, orders, customers and an admin dashboard.",
    tech: [
      "React.js",
      "TypeScript",
      "Tailwind CSS",
      "Java",
      "Spring Boot",
      "PostgreSQL",
    ],
    live: null,
    github: "https://github.com/jamaljouhar/ecommerce_platform",
  },
  {
    title: "Authentication System",
    image: authImg,
    description:
      "A secure REST API authentication system with JWT-based authentication, role management and Spring Security.",
    tech: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "JWT",
      "PostgreSQL",
      "Postman",
    ],
    live: null,
    github: null,
  },
  {
    title: "Clock App",
    image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg",
    description:
      "A simple and responsive clock application built with modern frontend technologies.",
    tech: ["HTML", "CSS", "JavaScript"],
    live: "https://jamaljouhar.github.io/clock-app/",
    github: "https://github.com/jamaljouhar/clock-app",
  },
  {
    title: "Todo List App",
    image: "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg",
    description:
      "A full-stack task management application with a React frontend and Spring Boot REST API.",
    tech: ["React.js", "Spring Boot", "Bootstrap 5", "MySQL"],
    live: null,
    github: "https://github.com/jamaljouhar/to-do-app",
  },
  {
    title: "Weather App",
    image: weatherImg,
    description:
      "A responsive weather application using the OpenWeatherMap API to display real-time weather information.",
    tech: ["React.js", "Vite", "Bootstrap 5", "OpenWeatherMap API"],
    live: "https://jamaljouhar.github.io/weathe-app-react-js",
    github: "https://github.com/jamaljouhar/weathe-app-react-js",
  },
];

function Projects() {
  return (
    <section className="projects-section" id="projects">
      <div className="container">
        <h2 className="section-title text-center">My Projects</h2>

        <p className="section-description fw-semibold ">
          A selection of projects I have developed using modern frontend and
          backend technologies.
        </p>

        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <article className="project-card" key={index}>
              <div className="project-image">
                <img src={project.image} alt={project.title} />

                <div className="project-overlay">
                  {project.live && project.live !== "#" && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaExternalLinkAlt />
                      <span>Live</span>
                    </a>
                  )}

                  {project.github && project.github !== "#" && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub />
                      <span>Code</span>
                    </a>
                  )}
                </div>
              </div>

              <div className="project-content">
                <h3 className="fw-bold text-info">{project.title}</h3>

                <p className="fw-semibold" style={{fontSize: "12px"}}>
                  {project.description}
                </p>

                <div className="tech-list">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
