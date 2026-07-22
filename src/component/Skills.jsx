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
} from "react-icons/fa";
import {
  SiC,
  SiMysql,
  SiSpring,
  SiLaravel,
  SiExpress,
  SiDotnet,
  SiIntellijidea,
  SiPostgresql,
} from "react-icons/si";

// `level` (0-100) pilote l'ordre d'affichage : le plus haut niveau apparaît en premier.
// Pour changer l'ordre plus tard, il suffit d'ajuster ces chiffres.
const frontend = [
  { name: "JavaScript", icon: <FaJs />, color: "#f7df1e", level: 95 },
  { name: "React.JS & Angular", icon: <FaReact />, color: "#61DAFB", level: 90 },
  { name: "HTML5", icon: <FaHtml5 />, color: "#f3091d", level: 90 },
  {
    name: "CSS3 & Tailwind & Bootstrap",
    icon: <FaCode />,
    color: "#38BDF8",
    level: 85,
  },
];

const backend = [
  {
    name: "Java & Spring Boot",
    icon: <FaJava />,
    color: "#f89820",
    level: 90,
  },
  { name: "Node.js & Express", icon: <FaNodeJs />, color: "#339933", level: 80 },
  { name: "SQL / MySQL", icon: <SiMysql />, color: "#4479A1", level: 80 },
  { name: "PHP & Laravel", icon: <SiLaravel />, color: "#FF2D20", level: 70 },
];

const tools = [
  { name: "GitHub", icon: <FaGithub />, color: "#f11616", level: 90 },
  { name: "VS Code", icon: <FaCode />, color: "#007ACC", level: 90 },
  { name: "PostgreSQL", icon: <SiPostgresql />, color: "#0699fa", level: 75 },
  { name: "IntelliJ IDEA", icon: <SiIntellijidea />, color: "#217346", level: 70 },
];

// Trie une catégorie du niveau le plus élevé au plus faible
const sortByLevel = (list) => [...list].sort((a, b) => b.level - a.level);

const categories = [
  { title: "Frontend", items: sortByLevel(frontend) },
  { title: "Backend", items: sortByLevel(backend) },
  { title: "Tools", items: sortByLevel(tools) },
];

function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="section-title">My Skills</h2>

        <div className="skills-wrapper">
          {categories.map((category) => (
            <div className="skills-card" key={category.title}>
              <h3>{category.title}</h3>
              <div className="skills-grid">
                {category.items.map((item) => (
                  <div className="skill-item" key={item.name}>
                    <span className="skill-icon" style={{ color: item.color }}>
                      {item.icon}
                    </span>
                    <p className="skill-name">{item.name}</p>
                    <div className="skill-level-track">
                      <div
                        className="skill-level-fill"
                        style={{
                          width: `${item.level}%`,
                          backgroundColor: item.color,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
