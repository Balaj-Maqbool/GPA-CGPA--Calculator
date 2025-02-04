import {
  FaGraduationCap,
  FaReact,
  FaUsers,
  FaRegLightbulb,
  FaChartLine,
  FaRegEnvelope,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <header className="about-header">
        <h1>About GPA-CGPA Calculator</h1>
        <div className="header-gradient"></div>
      </header>

      <section className="content-section">
        <div className="section-header">
          <FaGraduationCap className="section-icon" />
          <h2>Our Journey</h2>
        </div>
        <p>
          Born from my personal challenges during my Software Engineering
          degree, this platform was created to simplify academic calculations.
          What started as a student's passion project is now helping students
          worldwide manage their academic performance effortlessly.
        </p>
      </section>

      <section className="content-section">
        <div className="section-header">
          <FaRegLightbulb className="section-icon" />
          <h2>Our Mission</h2>
        </div>
        <p>
          We empower students to focus on learning by providing intuitive tools
          for GPA/CGPA calculation. Our goal is continuous improvement through
          user feedback and educational trends analysis.
        </p>
      </section>

      <section className="content-section">
        <div className="section-header">
          <FaReact className="section-icon" />
          <h2>Our Technology</h2>
        </div>
        <p>
          Built with modern web technologies including React, Node.js, and
          responsive CSS. The platform features real-time calculations, data
          persistence, and cross-device compatibility.
        </p>
      </section>

      <section className="stats-grid">
        <div className="stat-card">
          <FaUsers className="stat-icon" />
          <h3>5000+</h3>
          <p>Students Empowered</p>
        </div>
        <div className="stat-card">
          <FaChartLine className="stat-icon" />
          <h3>98%</h3>
          <p>Accuracy Rate</p>
        </div>
      </section>

      <div className="contact-fab">
        <Link to="/contact" className="contact-button">
          <FaRegEnvelope className="contact-icon" />
          Contact Me
        </Link>
      </div>

      <footer className="about-footer">
        <p>
          © {new Date().getFullYear()} GPA-CGPA Calculator. All rights reserved.
        </p>
        <p>[ Created with ❤️ by Balaj Maqbool ]</p>
      </footer>
    </div>
  );
};

export default About;
