import { React, useState } from "react";
import "./Navbar.css";
import { TiThMenu } from "react-icons/ti";
import { ImCross } from "react-icons/im";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="navbar">
      <div className="navbar_container">
        <h1 className="navbar_title">GPA / CGPA CALCULATOR</h1>
        <section className="left">
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
                to="/contact"
                className={(e) => {
                  return e.isActive ? "active_link" : "";
                }}
              >
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
        </section>
        <section className="right">
          <div
            className="menu"
            onClick={() => {
              setMenuOpen(!menuOpen);
            }}
          >
            {menuOpen ? <ImCross /> : <TiThMenu />}
          </div>
        </section>
      </div>
    </nav>
  );
};

export default Navbar;
