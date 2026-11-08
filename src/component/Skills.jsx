import React from "react";
import {
  FaJava,
  FaJs,
  FaHtml5,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaCode,
} from "react-icons/fa";
import {
  SiMysql,
  SiLaravel,
  SiIntellijidea,
  SiPostgresql,
  SiPostman,
} from "react-icons/si";

const frontend = [
  {
    name: "HTML5 & CSS & JavaScript",
    icon: <FaHtml5 />,
    color: "#f3091d",
    level: 100,
  },
  {
    name: "Tailwind & Bootstrap",
    icon: <FaCode />,
    color: "#38BDF8",
    level: 100,
  },
  {
    name: "React.JS & Angular",
    icon: <FaReact />,
    color: "#61DAFB",
    level: 90,
  },
  {
    name: "React Native",
    icon: <FaReact />,
    color: "#61DAFB",
    level: 90,
  },
];

const backend = [
  {
    name: "Java & Spring Boot",
    icon: <FaJava />,
    color: "#fc8e08",
    level: 99,
  },
  { name: "Node.js & Express", icon: <FaNodeJs />, color: "#339933", level: 80 },
  { name: "SQL / MySQL", icon: <SiMysql />, color: "#4479A1", level: 95 },
  { name: "PHP & Symfony", icon: <SiLaravel />, color: "#FF2D20", level: 75 },
];

const tools = [
  {
    name: "IntelliJ IDEA",
    icon: <SiIntellijidea className="fs-2" />,
    color: "#217346",
    level: 99,
  },
  {
    name: "GitHub",
    icon: <FaGithub className="fs-2" />,
    color: "#f11616",
    level: 79,
  },
  {
    name: "Postman",
    icon: <SiPostman className="fs-2" />,
    color: "#f3a108",
    level: 85,
  },
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

                    <div className="skill-level">
                      <div className="skill-level-track">
                        <div
                          className="skill-level-fill"
                          style={{
                            width: `${item.level}%`,
                            backgroundColor: item.color,
                          }}
                        />
                      </div>

                      <span
                        className="skill-percentage"
                        style={{ color: item.color }}
                      >
                        {item.level}%
                      </span>
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
