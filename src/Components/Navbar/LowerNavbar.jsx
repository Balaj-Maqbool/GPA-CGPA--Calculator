import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

const LowerNavbar = () => {
  return (
    <nav className="lower-navbar">
      <ul className="navbar_links">
        <li>
          <NavLink
            to="/gpa"
            className={(e) => (e.isActive ? "lower-active" : "")}
          >
            GPA
          </NavLink>
        </li>
        <span className="slash"> / </span>
        <li>
          <NavLink
            to="/cgpa"
            className={(e) => (e.isActive ? "lower-active" : "")}
          >
            CGPA
          </NavLink>
        </li>
      </ul>
      <div className="empty-container"></div>
    </nav>
  );
};

export default LowerNavbar;