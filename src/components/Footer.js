import React from "react";
import LinkedinLogo from "../images/Linkedin-Logo.png";
import GithubLogo from "../images/Github-Logo.png";
import { NavLink } from "react-router-dom";

export default function Footer() {
    return (
        <div className="footer">
            <div className="footer-logos">
                <a href="https://www.linkedin.com/in/sam-cordry" target="_blank" rel="noreferrer">
                    <img src={LinkedinLogo} className="footer-linkedin" alt="Linkedin Logo" />
                </a>
                <a href="https://www.github.com/Sam-Cordry" target="_blank" rel="noreferrer">
                    <img src={GithubLogo} className="footer-github" alt="Github Logo" />
                </a>
            </div>
            <NavLink to="/contact" exact className="footer-contact" rel="noreferrer">
                <h4 className="footer-contact">Contact Me</h4>
            </NavLink>
            {/* <h5 className="footer-darkmode">Secret Dark Mode!</h5> */}
        </div>
    )
}