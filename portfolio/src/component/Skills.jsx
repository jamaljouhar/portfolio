import React from "react";
import {
  FaJava,
  FaPython,
  FaPhp,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaBootstrap,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiC,
  SiCplusplus,
  SiMysql,
  SiTailwindcss,
  SiSpring,
  SiDjango,
  SiLaravel,
  SiExpress,
  SiDotnet,
} from "react-icons/si";

// Languages
const languages = [
  { name: "HTML & CSS", icon: <FaHtml5 size={40} />, color: "#E34F26" },
  { name: "JS & PHP", icon: <FaJs size={40} />, color: "#f7df1e" },
  { name: "SQL", icon: <SiMysql size={40} />, color: "#4479A1" },
  { name: "Java", icon: <FaJava size={40} />, color: "#f89820" },
  { name: "Python", icon: <FaPython size={40} />, color: "#306998" },
  { name: "C, C++, C#", icon: <SiC size={40} />, color: "#555555" },
];

// Frameworks
const frameworks = [
  { name: "React JS", icon: <FaReact size={40} />, color: "#61DAFB" },
  { name: "B5 & T CSS", icon: <FaBootstrap size={40} />, color: "#7952B3" },
  { name: "Laravel", icon: <SiLaravel size={40} />, color: "#FF2D20" },
  { name: "MySQL", icon: <SiMysql size={40} />, color: "#4479A1" },
  { name: "Spring Boot", icon: <SiSpring size={40} />, color: "#16ee16ff" },
  { name: ".NET", icon: <SiDotnet size={45} />, color: "#512BD4" },
  { name: "Node JS", icon: <FaNodeJs size={40} />, color: "#339933" },
  { name: "Express", icon: <SiExpress size={40} />, color: "#1ed81eff" },
];

function Skills() {
  return (
    <section
      id="skills"
      className="skills py-5 position-relative"
      style={{ scrollMarginTop: "20px" }}
    >
      <div className="container">
        <h2 className="section-title text-info text-start mb-3 fw-bold fs-1">
          My Skills
        </h2>

        <div className="row g-4 justify-content-center">
          {/* Languages */}
          <div className="col-12">
            <div className="card shadow-sm h-100 border border-info hover-card theme-card">
              <div className="card-body">
                <h5 className="card-title text-info fs-2 fw-bold m-3">
                  Languages
                </h5>
                <div className="d-flex flex-wrap gap-3 frameworks-container">
                  {languages.map((lang, index) => (
                    <span
                      key={index}
                      className="badge d-flex align-items-center gap-2 fs-6 badge-hover framework-badge"
                    >
                      <span style={{ color: lang.color, fontSize: "1.5rem" }}>
                        {lang.icon}
                      </span>
                      {lang.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Frameworks */}
          <div className="col-12">
            <div className="card shadow-sm h-100 border border-info hover-card theme-card">
              <div className="card-body">
                <h5 className="card-title text-info fw-bold m-3 fs-2">
                  Frameworks & Tools
                </h5>
                <div className="d-flex flex-wrap gap-3 frameworks-container">
                  {frameworks.map((fw, index) => (
                    <span
                      key={index}
                      className="badge d-flex align-items-center gap-2 fs-6 badge-hover framework-badge"
                    >
                      <span style={{ color: fw.color, fontSize: "1.5rem" }}>
                        {fw.icon}
                      </span>
                      {fw.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Inline Styles */}
      <style jsx>{`
        .theme-card {
          background-color: inherit;
          color: inherit;
          transition: background-color 0.3s ease, color 0.3s ease;
        }

        .hover-card {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(0, 245, 255, 0.3);
          transition: transform 0.3s, box-shadow 0.3s;
        }

        .badge-hover {
          transition: transform 0.2s, box-shadow 0.2s;
          cursor: pointer;
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(0, 245, 255, 0.3);
          padding: 0.5rem;
          border-radius: 0.5rem;
        }

        .badge-hover:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(0, 245, 255, 0.3);
        }

        .frameworks-container {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          padding: 0.5rem;
          justify-content: center;
        }

        .framework-badge {
          background-color: inherit;
          color: inherit;
          flex: 0 0 auto;
          min-width: 100px;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        /* Responsive badges for small screens */
        @media (max-width: 400px) {
          .framework-badge {
            flex: 0 0 100%;
          }
        }
      `}</style>
    </section>
  );
}

export default Skills;
