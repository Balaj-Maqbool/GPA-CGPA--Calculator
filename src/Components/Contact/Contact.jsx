import { useState, useEffect } from "react";
import { FaWhatsapp, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";


import "./Contact.css";

const Contact = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Prevent scrolling when the menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMenuOpen]);

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/Balaj-Maqbool",
      icon: <FaGithub className="social-icon" aria-hidden="true" />,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/balaj-maqbool-9456a1310?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      icon: <FaLinkedin className="social-icon" aria-hidden="true" />,
    },
    {
      name: "Email",
      url: "mail to:balajmaqbool54@gmail.com",
      icon: <HiOutlineMail className="social-icon" aria-hidden="true" />,
    },
    {
      name: "WhatsApp",
      url: "https://wa.me/923252624261",
      icon: <FaWhatsapp className="social-icon" aria-hidden="true" />,
    },
    {
      name: "Instagram",
      url: "#",
      icon: <FaInstagram className="social-icon" aria-hidden="true" />,
    },
  ];

  const handleLinkClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className="contact-container">
      <div className="intro">
        <h1>Balaj Maqbool</h1>
        <p>Full-stack developer | Turning ideas into digital reality</p>
      </div>

      <div
        className="contact-trigger"
        onMouseEnter={() => setIsMenuOpen(true)}
        onMouseLeave={() => setIsMenuOpen(false)}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-expanded={isMenuOpen}
        aria-label="Contact menu"
      >
        Get in Touch
        <div className={`social-menu ${isMenuOpen ? "open" : ""}`}>
          {socialLinks.map((social, index) => (
            <div
              key={social.name}
              className="social-item"
              onClick={() => handleLinkClick(social.url)}
              style={{ transitionDelay: `${index * 50}ms` }}
              tabIndex={isMenuOpen ? 0 : -1} // Make items focusable only when menu is open
              aria-label={`Link to ${social.name}`}
            >
              {social.icon}
              <span className="social-text">{social.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
