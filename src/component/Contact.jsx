import React, { useState } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaPaperPlane,
} from "react-icons/fa";

function Contact() {
  const [values, setValues] = useState({
    username: "",
    email: "",
    message: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { username, email, message } = values;

    if (!username || !email || !message) {
      setError("All fields are required ⚠️");
      return;
    }

    setError("");

    const text = `Hello Mr
      Name: ${username}
      Email: ${email}
      Message: ${message}`;

    window.open(
      `https://wa.me/212716622297?text=${encodeURIComponent(text)}`,
      "_blank"
    );

    setValues({ username: "", email: "", message: "" });
  };

  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>

        <div className="contact-wrapper">
          {/* INFO */}
          <div className="contact-card">
            <h3 className="text-center fw-bold m-2">Let's Work Together</h3>
            <hr />
            <p>
              I'm open to freelance projects, collaborations, or full-time
              roles.
            </p>

            <div className="contact-info ">
              <a href="mailto:jamal.jouhari@gmail.com">
                <FaEnvelope className="text-info fs-4" />{" "}
                jamal.jouhari@gmail.com
              </a>
              <a href="tel:+212716622297">
                <FaPhone className="text-danger fs-4" /> +212 716 622 297
              </a>
              <span>
                <FaMapMarkerAlt className="text-primary fs-4" /> Mohammedia,
                Morocco
              </span>
              <a href="https://wa.me/212716622297" target="_blank">
                <FaWhatsapp className="text-success fs-4" /> WhatsApp Chat
              </a>
            </div>
          </div>

            <form onSubmit={handleSubmit} className="form-glass">
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
                  placeholder="Your Message"
                  value={values.message}
                  onChange={handleChange}
                />
              </div>

              {error && <p className="error">{error}</p>}

              <button type="submit" className="btn-send">
                <FaPaperPlane /> Send Message
              </button>
            </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;