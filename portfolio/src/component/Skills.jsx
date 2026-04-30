import React from "react";
import {
  FaJava,
  FaPython,
  FaJs,
  FaHtml5,
  FaReact,
  FaBootstrap,
  FaNodeJs,
  FaGithub,
  FaCode,
  FaFileExcel,
} from "react-icons/fa";
import {
  SiC,
  SiMysql,
  SiSpring,
  SiLaravel,
  SiExpress,
  SiDotnet,
} from "react-icons/si";

const frontend = [
  { name: "HTML & CSS & Tailwind", icon: <FaCode />, color: "#38BDF8" },
  { name: "JavaScript", icon: <FaJs />, color: "#f7df1e" },
  { name: "React.JS & Primereact", icon: <FaReact />, color: "#61DAFB" },
  { name: "Bootstrap", icon: <FaBootstrap />, color: "#7952B3" },
];

const backend = [
  { name: "Java & Spring Boot", icon: <FaJava />, color: "#f89820" },
  { name: "PHP & Laravel", icon: <SiLaravel />, color: "#FF2D20" },
  { name: "C# & .NET", icon: <SiDotnet />, color: "#512BD4" },
  { name: "Node.js & Express", icon: <FaNodeJs />, color: "#339933" },
  { name: "SQL / MySQL", icon: <SiMysql />, color: "#4479A1" },
];

const tools = [
  { name: "GitHub", icon: <FaGithub />, color: "#fff" },
  { name: "VS Code", icon: <FaCode />, color: "#007ACC" },
  { name: "Excel", icon: <FaFileExcel />, color: "#217346" },
];

function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="section-title">My Skills</h2>

        <div className="skills-wrapper">
          {/* Frontend */}
          <div className="skills-card">
            <h3>Frontend</h3>
            <div className="skills-grid">
              {frontend.map((item, i) => (
                <div key={i} className="skill-item">
                  <span style={{ color: item.color }}>{item.icon}</span>
                  <p>{item.name}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Backend */}
          <div className="skills-card">
            <h3>Backend</h3>
            <div className="skills-grid">
              {backend.map((item, i) => (
                <div key={i} className="skill-item">
                  <span style={{ color: item.color }}>{item.icon}</span>
                  <p>{item.name}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div className="skills-card">
            <h3>Tools</h3>
            <div className="skills-grid">
              {tools.map((item, i) => (
                <div key={i} className="skill-item">
                  <span style={{ color: item.color }}>{item.icon}</span>
                  <p>{item.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
