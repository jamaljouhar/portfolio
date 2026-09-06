import React, { useEffect, useState } from "react";
import reactLogo from "../assets/portfolioLogo.jpeg";

function Hero() {
  const titleText = "Hi, I'm JAMAL Jouhari";
  const roles = ["Full Stack Developer", "React & React Native Expert", "Java & Spring Boot", "UI Designer"];

  const [title, setTitle] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    let i = 0;

    const typing = setInterval(() => {
      setTitle(titleText.slice(0, i + 1));
      i++;
      if (i === titleText.length) clearInterval(typing);
    }, 50);

    return () => clearInterval(typing);
  }, []);

  // rotating roles
  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

 return (
  <section id="home" className="hero-section">
   <div className="hero-bg hero-bg-one"></div>
   <div className="hero-bg hero-bg-two"></div>

   <div className="container">
     <div className="row align-items-center">
       <div className="col-lg-7">
         <div className="hero-content">
           <span className="hero-badge">
             <span className="status-dot"></span>
             Available for opportunities
           </span>

           <h1 className="hero-title">
             {title}
             <span className="cursor">|</span>
           </h1>

           <div className="hero-role">{roles[roleIndex]}</div>

           <p className="hero-desc">
             I’m a Full-Stack Developer passionate about building modern,
             scalable, and high-performance web applications. I combine React
             and Spring Boot to create clean, secure, and user-focused digital
             solutions, with a strong focus on code quality, performance, and
             maintainability.
           </p>

           <div className="hero-buttons">
             <a href="#contact" className="hero-btn hero-btn-primary">
               Contact Me
               <span>→</span>
             </a>

             <a href="#projects" className="hero-btn hero-btn-outline">
               View Projects
               <span>↗</span>
             </a>
           </div>

           <div className="hero-tech">
             <span>React</span>
             <span>Spring Boot</span>
             <span>TypeScript</span>
             <span>PostgreSQL</span>
           </div>
         </div>
       </div>

       <div className="col-lg-5">
         <div className="hero-visual">
           <div className="visual-glow"></div>

           <div className="visual-card">
             <img src={reactLogo} alt="Profile" />
           </div>

           <div className="floating-card card-one">
             <span>⚡</span>
             <div>
               <strong>Fast</strong>
               <small>Performance</small>
             </div>
           </div>

           <div className="floating-card card-two">
             <span>🔐</span>
             <div>
               <strong>Secure</strong>
               <small>Applications</small>
             </div>
           </div>
         </div>
       </div>
     </div>
   </div>
 </section>
 )
}

export default Hero;
