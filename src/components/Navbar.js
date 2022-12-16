import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <div className="navbar">
            <h2 className="navbar-title">Sam Cordry</h2>
            <NavLink to="/" exact className="navbar-about" rel="noreferrer">
                <h3>About</h3>
            </NavLink>
            <NavLink to="/projects" className="navbar-projects" rel="noreferrer">
                <h3>Projects</h3>
            </NavLink>
            <NavLink to="/resume" className="navbar-resumé" rel="noreferrer">
                <h3>Resumé</h3>
            </NavLink>
            <NavLink to="/contact" className="navbar-contact" rel="noreferrer">
                <h3>Contact</h3>
            </NavLink>
        </div>
    )
}