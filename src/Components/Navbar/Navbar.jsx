import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar_container">
        <h1 className="navbar_title">GPA / CGPA CALCULATOR</h1>
        <ul className="navbar_links">
          <li>
            <NavLink
              to="/"
              className={(e) => {
                return e.isActive ? "active_link" : "";
              }}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/gpa"
              className={(e) => {
                return e.isActive ? "active_link" : "";
              }}
            >
              GPA
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/cgpa"
              className={(e) => {
                return e.isActive ? "active_link" : "";
              }}
            >
              CGPA
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={(e) => {
                return e.isActive ? "active_link" : "";
              }}
            >
              About
            </NavLink>
          </li>
          <li className="navbar_links">
            <NavLink
              to="/instructions"
              className={(e) => {
                return e.isActive ? "active_link" : "";
              }}
            >
              Instructions
            </NavLink>
          </li>
          <li className="navbar_links">
            <NavLink to="/contact" className={(e) => {
                return e.isActive ? "active_link" : "";
              }}>
              Contact
            </NavLink>
          </li>
          <li className="navbar_links">
            <NavLink
              to="/share"
              className={(e) => {
                return e.isActive ? "active_link" : "";
              }}
            >
              Share
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
