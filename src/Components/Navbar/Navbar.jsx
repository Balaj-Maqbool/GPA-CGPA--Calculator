import { React, useState } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import Menu from "./Menu"

const Navbar = () => {
  const [paths, setPaths] = useState(["Home", "Instructions", "About", "Contact", "Share"])
  return (
    <nav className="navbar">
      <div className="navbar_container">
        <h1 className="navbar_title">GPA / CGPA CALCULATOR</h1>
        <section className="left">
          <ul className="navbar_links">
            {paths.map((path, index) => {
              return (
                <li key={index} >
                  <NavLink to={path === "Home" ? "/" : `/${path.toLowerCase()}`} className={(e) => {
                    return e.isActive ? "active_link" : "";
                  }}>
                    {path}
                  </NavLink>
                </li>
              )
            })
            }
          </ul>
        </section>
        <section className="right">
          <Menu />
        </section>
      </div>
    </nav>
  );
};

export default Navbar;
