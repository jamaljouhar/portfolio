import React, { useState } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaPaperPlane,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

function Contact() {
  const [values, setValues] = useState({
    username: "",
    email: "",
    message: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { username, email, message } = values;

    if (!username || !email || !message) {
      setError("Please fill in all fields.");
      return;
    }

    setError("");

    const text = `Hello Jamal,

Name: ${username}
Email: ${email}

Message:
${message}`;

    window.open(
      `https://wa.me/212716622297?text=${encodeURIComponent(text)}`,
      "_blank"
    );

    setValues({
      username: "",
      email: "",
      message: "",
    });
  };

  return (
    <section className="contact-section" id="contact">
      <div className="">
        <h2 className="section-title">Get In Touch</h2>

        <p className="section-description">
          I'm currently looking for junior developer opportunities, internships,
          and projects where I can contribute, learn, and grow as a developer.
        </p>

        <div className="contact-wrapper">
          <div className="contact-card">
            <span className="contact-subtitle">CONTACT ME</span>

            <h3>Let's Connect</h3>

            <p className="contact-intro">
              Have a project, internship opportunity, or simply want to
              connect? Feel free to reach out. I’d be happy to discuss it with
              you.
            </p>

            <div className="contact-info">
              <a href="mailto:jamal.jouhari@gmail.com">
                <FaEnvelope />
                <span>jamal.jouhari@gmail.com</span>
              </a>

              <a href="tel:+212716622297">
                <FaPhone />
                <span>+212 716 622 297</span>
              </a>

              <div>
                <FaMapMarkerAlt />
                <span>Mohammedia, Morocco</span>
              </div>

              <a
                href="https://wa.me/212716622297"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp />
                <span>WhatsApp</span>
              </a>
            </div>

            <div className="contact-socials">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="form-glass">
            <div className="form-header">
              <h3>Send Me a Message</h3>
              <p>I usually respond as soon as possible.</p>
            </div>

            <div className="input-group">
              <input
                type="text"
                name="username"
                placeholder="Your Name"
                value={values.username}
                onChange={handleChange}
              />
            </div>

            <div className="input-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={values.email}
                onChange={handleChange}
              />
            </div>

            <div className="input-group">
              <textarea
                name="message"
                placeholder="Tell me about your project or opportunity..."
                value={values.message}
                onChange={handleChange}
                rows="6"
              />
            </div>

            {error && <p className="error">{error}</p>}

            <button type="submit" className="btn-send">
              <FaPaperPlane />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
