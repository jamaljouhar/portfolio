import React from "react";
import ecommerceImg from "../assets/ecommerce.jpg"; // chemin relatif depuis ton fichier
import employerImg from "../assets/employer.jpg"; // chemin relatif depuis ton fichier
import weatherImg from "../assets/weather.jpg"; // chemin relatif depuis ton fichier

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
    tech: ["React JS", "Node JS", "Bootstrap 5", "SQL Server"],
    live: "#",
    github: "#",
  },
  {
    title: "Weather App",
    image: weatherImg, // صورة screenshot من التطبيق
    tech: ["React JS", "OpenWeatherMap API", "Vite", "Bootstrap 5"],
    live: "https://jamaljouhar.github.io/weathe-app-react-js", // رابط التطبيق المنشور
    github: "https://github.com/jamaljouhar/weathe-app-react-js", // رابط الريبو
  },

  {
    title: "SG Employer",
    image: employerImg,
    tech: ["React JS", "Node.js", "Bootstrap 5"],
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
    <section className="projects py-5" id="projects">
      <div className="container">
        <h2 className="section-title text-info text-start mb-5 fw-bold fs-1">
          My Projects
        </h2>

        <div className="row g-4 justify-content-center">
          {projectsData.map((project, index) => (
            <div className="col-12 col-md-6 col-lg-4" key={index}>
              <div className="card shadow-sm h-100 border hover-card bg-inherit text-inherit">
                <div className="position-relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="card-img-top"
                    style={{ height: "180px", objectFit: "cover" }}
                  />
                  <div className="position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center project-overlay opacity-0 hover-opacity-100 transition">
                    <a
                      href={project.live}
                      className="btn btn-sm btn-info me-2"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live
                    </a>
                    <a
                      href={project.github}
                      className="btn btn-sm btn-outline-info"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
                <div className="card-body">
                  <h5 className="card-title fw-bold text-info">
                    {project.title}
                  </h5>
                  <div className="d-flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="badge bg-info text-dark"
                        style={{ fontSize: "0.8rem" }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CSS inline pour hover */}
      <style jsx>{`
        .hover-card {
          transition: transform 0.3s, box-shadow 0.3s;
        }
        .hover-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(0, 245, 255, 0.3);
        }
        .project-overlay {
          background-color: rgba(0, 245, 255, 0.1);
          transition: all 0.3s ease-in-out;
          cursor: pointer;
        }
        .project-overlay:hover {
          opacity: 1 !important;
        }
        .transition {
          transition: all 0.3s ease-in-out;
        }
        .hover-opacity-100 {
          opacity: 1;
        }
        .opacity-0 {
          opacity: 0;
        }
      `}</style>
    </section>
  );
}

export default Projects;
