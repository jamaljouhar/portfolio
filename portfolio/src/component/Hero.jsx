import React, { useEffect, useState } from "react";
import reactLogo from "../assets/react.svg";

function Hero() {
  const titleText = "Hi, I'm JAMAL Jouhari";
  const subtitleText = "A Creative Web Developer";

  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");

  useEffect(() => {
    let i = 0,
      j = 0;

    const titleInterval = setInterval(() => {
      setTitle(titleText.slice(0, i + 1));
      i++;
      if (i === titleText.length) {
        clearInterval(titleInterval);
        const subtitleInterval = setInterval(() => {
          setSubtitle(subtitleText.slice(0, j + 1));
          j++;
          if (j === subtitleText.length) clearInterval(subtitleInterval);
        }, 80);
      }
    }, 80);

    return () => clearInterval(titleInterval);
  }, []);

  return (
    <section
      id="home"
      className="d-flex align-items-center position-relative text-inherit bg-inherit"
      style={{ minHeight: "100vh", paddingTop: "80px" }}
    >
      <div className="container position-relative" style={{ zIndex: 2 }}>
        <div className="row align-items-center gy-5">
          {/* LEFT CONTENT */}
          <div className="col-12 col-lg-6 text-center text-lg-start">
            <h1 className="fw-bold display-6 display-md-5 display-lg-4">
              {title.includes("JAMAL") ? (
                <>
                  Hi, I'm{" "}
                  <span className="text-info fs-md-2 fs-lg-1">
                    JAMAL Jouhari
                  </span>
                </>
              ) : (
                title
              )}
              <span className="cursor">|</span>
            </h1>

            <p className="fst-italic fs-2 fs-md-4 fs-lg-3 mt-3 text-inherit">
              {subtitle}
              <span className="cursor">|</span>
            </p>

            <p className="fw-bold fs-6 fs-md-5 mt-3 mb-4 text-inherit">
              I create beautiful, responsive websites and web applications that
              provide exceptional user experiences. Let's bring your ideas to
              life!
            </p>

            <div className="d-flex flex-column flex-sm-row gap-2 justify-content-center justify-content-lg-start">
              <a
                href="#contact"
                className="btn btn-primary fw-bold px-4 w-100 w-sm-auto"
              >
                Contact Me
              </a>
              <a
                href="#projects"
                className="btn btn-outline-primary fw-bold px-4 w-100 w-sm-auto"
              >
                View Projects
              </a>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="col-12 col-lg-6 text-center">
            <img
              src={reactLogo}
              alt="React Logo"
              className="img-fluid react-logo-animate mx-auto"
              width={300}
              height={250}
            />
          </div>
        </div>
      </div>

      {/* BACKGROUND OVERLAY */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          background:
            "radial-gradient(circle at 20% 50%, rgba(0, 245, 255, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 0, 255, 0.1) 0%, transparent 50%)",
          zIndex: 1,
        }}
      />

      {/* Inline CSS pour l'animation du curseur et du logo */}
      <style jsx>{`
        .cursor {
          margin-left: 5px;
          animation: blink 1s infinite;
        }
        @keyframes blink {
          0% {
            opacity: 1;
          }
          50% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
        .react-logo-animate {
          animation: float 4s ease-in-out infinite;
        }
        @keyframes float {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-12px);
          }
          100% {
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}

export default Hero;
