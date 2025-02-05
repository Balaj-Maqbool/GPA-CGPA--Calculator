import { React, useState } from 'react';
import { NavLink } from 'react-router-dom';
import "./Menu.css"
const Menu = () => {
    const [paths, setPaths] = useState(["Home", "GPA", "CGPA", "Instructions", "About", "Contact", "Share"])
    return (
        <label className="main">
            <input className="inp" defaultChecked type="checkbox" />
            <div className="bar">
                <span className="top bar-list" />
                <span className="middle bar-list" />
                <span className="bottom bar-list" />
            </div>
            <section className="menu-container">
                {paths.map((path, index) => {
                    return (
                        <li key={index} className='menu-list'>
                            <NavLink to={path === "Home" ? "/" : `/${path.toLowerCase()}`} >
                                {path}
                            </NavLink>
                        </li>
                    )
                })
                }
            </section>
        </label>
    );
}
export default Menu;

