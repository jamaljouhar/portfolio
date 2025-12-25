import React, { useState } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaWhatsapp,
} from "react-icons/fa";

function Contact() {
  const [values, setValues] = useState({
    username: "",
    email: "",
    message: "",
  });

  const getMessage = (e) => {
    setValues((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    const { username, email, message } = values;

    if (!username || !email || !message) {
      alert("Please fill in all fields");
      return;
    }

    const text = `Hello 👋
      Name: ${username}
      Email: ${email}
      Message: ${message}`;

     const whatsappURL = `https://wa.me/212716622297?text=${encodeURIComponent(
       text
     )}`;

     window.open(whatsappURL, "_blank");

    // Reset form
    setValues({
      username: "",
      email: "",
      message: "",
    });
  };

  return (
    <section
      className="contact py-5"
      id="contact"
      style={{ scrollMarginTop: "80px" }}
    >
      <div className="container">
        <h2 className="section-title text-info text-start mb-2 fw-bold fs-1 animate-fade">
          Get In Touch
        </h2>

        <div className="row justify-content-center align-items-stretch g-4">
          {/* Contact Info Card */}
          <div className="col-12 col-md-5 animate-slide-up">
            <div className="card hover-card shadow-sm h-100 theme-card">
              <div className="card-body text-info d-flex flex-column justify-content-center">
                <h3 className="fw-bold mb-4">Let's Work Together</h3>
                <p className="text-secondary mb-4 text-center">
                  Feel free to reach out for any project or collaboration.
                  <br />I would love to hear from you!
                </p>

                <ul className="list-unstyled mb-0">
                  <li className="whatsapp-card d-flex align-items-center gap-3 p-2 mb-2">
                    <FaEnvelope className="text-danger fs-3" />
                    <a
                      href="mailto:jamal.jouhari@gmail.com"
                      className=" text-decoration-none fw-bold"
                    >
                      jamal.jouhari@gmail.com
                    </a>
                  </li>
                  <li className="whatsapp-card d-flex align-items-center gap-3 p-2 mb-3">
                    <FaPhone className="text-success fs-3" />
                    <a
                      href="tel:+212716622297"
                      className="text-decoration-none fw-bold"
                    >
                      +212 0716622297
                    </a>
                  </li>
                  <li className="whatsapp-card d-flex align-items-center fw-bold gap-3 p-2 mb-3">
                    <FaMapMarkerAlt className="text-info fw-bold fs-3" />
                    Mohammedia, Morocco
                  </li>
                  <li className="whatsapp-card d-flex align-items-center gap-3 p-2 mb-3">
                    <FaWhatsapp className="text-success fs-3" />
                    <a
                      href="https://wa.me/212716622297"
                      target="_blank"
                      rel="noopener noreferrer"
                      className=" text-decoration-none fw-bold"
                    >
                      Chat on WhatsApp
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Contact Form Card */}
          <div className="col-12 col-md-7 animate-slide-up animate-delay-5">
            <div className="card hover-card shadow-sm border theme-card h-100">
              <div className="card-body">
                <form
                  className="contact-form"
                  autoComplete="off"
                  onSubmit={handleSubmit}
                >
                  <div className="mb-3 form-floating">
                    <input
                      type="text"
                      className="form-control theme-input"
                      name="username"
                      placeholder="Your Name"
                      value={values.username}
                      onChange={getMessage}
                    />
                    <label htmlFor="name" className="text-info fw-bold">
                      Your Name
                    </label>
                  </div>

                  <div className="mb-3 form-floating">
                    <input
                      type="email"
                      className="form-control theme-input"
                      name="email"
                      placeholder="Your Email"
                      value={values.email}
                      onChange={getMessage}
                    />
                    <label htmlFor="email" className="text-info fw-bold">
                      Your Email
                    </label>
                  </div>

                  <div className="mb-3 form-floating">
                    <textarea
                      className="form-control theme-input"
                      name="message"
                      placeholder="Your Message"
                      value={values.message}
                      onChange={getMessage}
                      style={{ minHeight: "150px" }}
                    ></textarea>
                    <label htmlFor="message" className="text-info fw-bold">
                      Your Message
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-gradient w-50 fw-bold animate-fade"
                  >
                    Send
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .theme-card {
          background-color: inherit; /* hérite de la couleur du body */
          color: inherit;
          transition: background-color 0.3s ease, color 0.3s ease;
        }

        .theme-input {
          background-color: inherit;
          color: inherit;
          background-color: inherit;
          color: inherit;
          border: 1px solid #0dcaf0;
        }

        .theme-input:focus {
          border-color: #0dcaf0;
          box-shadow: none;
        }

        .hover-card {
          transition: transform 0.3s, box-shadow 0.3s;
        }

        .hover-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(0, 245, 255, 0.3);
        }

        .whatsapp-card {
          border-bottom: 2px solid aqua;
          border-radius: 1px 5px;
          padding: 0.5rem;
          transition: transform 0.3s, box-shadow 0.3s;
        }

        .whatsapp-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 20px rgba(0, 255, 255, 0.4);
        }
      `}</style>
    </section>
  );
}

export default Contact;
