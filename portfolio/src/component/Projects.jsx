import React from "react";
import ecommerceImg from "../assets/ecommerce.jpg"; // chemin relatif depuis ton fichier
import employerImg from "../assets/employer.jpg"; // chemin relatif depuis ton fichier
import weatherImg from "../assets/weather.jpg"; // chemin relatif depuis ton fichier
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const projectsData = [
  {
    title: "PostGram Chat App",
    image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg",
    tech: ["React JS", "Firebase", "CSS"],
    live: "#",
    github: "#",
  },
  {
    title: "Todo-list App",
    image: "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg",
    tech: ["React JS", "Spring Boot", "Bootstrap 5", "MySQL"],
    live: "#",
    github: "#",
  },
  {
    title: "Weather App",
    image: weatherImg,
    tech: ["React JS", "OpenWeatherMap API", "Vite", "Bootstrap 5"],
    live: "https://jamaljouhar.github.io/weathe-app-react-js", 
    github: "https://github.com/jamaljouhar/weathe-app-react-js", 
  },

  {
    title: "Employee Management System",
    image: employerImg,
    tech: ["React.JS & Primereact", "Spring Boot", "CSS & Bootstrap5"],
    live: "#",
    github: "#",
  },
  {
    title: "E-commerce Website",
    image: ecommerceImg,
    tech: ["HTML", "CSS", "JavaScript"],
    live: "#",
    github: "#",
  },
];

function Projects() {
  return (
    <section className="projects-section" id="projects">
      <div className="container">
        <h2 className="section-title">My Projects</h2>

        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <div className="project-card" key={index}>
              {/* IMAGE */}
              <div className="project-image">
                <img src={project.image} alt={project.title} />

                {/* OVERLAY */}
                <div className="project-overlay">
                  <a href={project.live} target="_blank">
                    <FaExternalLinkAlt /> Live
                  </a>
                  <a href={project.github} target="_blank">
                    <FaGithub /> Code
                  </a>
                </div>
              </div>

              {/* CONTENT */}
              <div className="project-content">
                <h3>{project.title}</h3>

                <div className="tech-list">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
