import React from "react";
import aboutImage from "../assets/code.jpeg";

function About() {
  return (
    <section
      id="about"
      className="d-flex align-items-center py-5 position-relative text-inherit bg-inherit"
      style={{ scrollMarginTop: "20px" }}
    >
      <div className="container">
        <h2 className="section-title text-info text-start mb-3 fw-bold fs-1">
          About me
        </h2>
        <div className="row align-items-center g-4">
          {/* Texte */}
          <div className="col-12 col-lg-7">
            <h3 className="fw-bold text-success mb-3 fs-4 animate__fadeInUp">
              Passionate Web Developer
            </h3>
            <p className="lead mb-4 fw-bold text-inherit animate__fadeInUp">
              Hi! I am Jamal Jouhari. I'm a passionate software development
              student dedicated to creating innovative web solutions.
            </p>

            {/* Stats */}
            <div className="row text-center text-lg-start g-3">
              {[
                { number: "15+", label: "Projects Completed" },
                { number: "2+", label: "Years Experience" },
                { number: "10+", label: "Happy Clients" },
              ].map((stat, idx) => (
                <div
                  className="col-12 col-md-4 animate__fadeInUp"
                  style={{ animationDelay: `${idx * 0.2}s` }}
                  key={idx}
                >
                  <div className="card shadow-sm h-100 border btn-gradient bg-inherit text-inherit">
                    <div className="card-body">
                      <h4 className="fw-bold text-info fs-3">{stat.number}</h4>
                      <p className="mb-0 fw-bold text-inherit">{stat.label}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Inline CSS pour animations et hover */}
      <style jsx>{`
        .about-img-animate {
          transform: translateY(20px);
          opacity: 0;
          animation: floatUp 1s ease-out forwards;
        }
        @keyframes floatUp {
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        .animate__fadeInUp {
          opacity: 0;
          transform: translateY(20px);
          animation: fadeUp 0.8s ease-out forwards;
        }
        @keyframes fadeUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .btn-gradient {
          transition: transform 0.3s, box-shadow 0.3s;
          cursor: pointer;
        }
        .btn-gradient:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 20px rgba(0, 245, 255, 0.4);
        }
      `}</style>
    </section>
  );
}

export default About;
