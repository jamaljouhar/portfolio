import React, { useEffect, useState } from "react";
import reactLogo from "../assets/portfolioLogo.jpeg";

function Hero() {
  const titleText = "Hi, I'm JAMAL Jouhari";
  const roles = ["Full Stack Developer", "React Expert", "UI Designer"];

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
    <section id="home" className="hero-section d-flex align-items-center">
      <div className="container">
        <div className="row align-items-center gy-5">
          {/* LEFT */}
          <div className="col-lg-6 hero-left">
            <h1 className="hero-title">
              {title}
              <span className="cursor">|</span>
            </h1>

            <h3 className="hero-roles text-info">{roles[roleIndex]}</h3>

            <p className="hero-desc">
              I design and build high-performance web applications with modern
              technologies like React & Spring Boot.
            </p>

            <div className="d-flex flex-column flex-sm-row gap-4 justify-content-center justify-content-lg-start">
              {" "}
              <a
                href="#contact"
                className="btn btn-primary fw-bold px-4 w-100 w-sm-auto"
              >
                {" "}
                Contact Me{" "}
              </a>{" "}
              <a
                href="#projects"
                className="btn btn-outline-primary fw-bold px-4 w-100 w-sm-auto"
              >
                {" "}
                View Projects{" "}
              </a>{" "}
            </div>
          </div>

          {/* RIGHT */}
          <div className="col-lg-6 text-center">
            <div className="hero-img-3d">
              <img src={reactLogo} alt="profile" />
            </div>
          </div>
        </div>
      </div>

      {/* BACKGROUND */}
      <div className="hero-bg"></div>
    </section>
  );
}

export default Hero;
