import React from "react";
import ProfilePicture from "../images/Profile-Picture.jpg";
import useMobile from "../Hooks";

export default function About() {
    const isMobile = useMobile();
    return (
        <div className="about">
            <div className="about-top">
                <h1>Hello! My name is Sam.</h1>
                <h1>Welcome to my little corner of the Internet.</h1>
            </div>
            <div className="about-main">
                <img src={ProfilePicture} alt="Profile" className="about-profile" />
                <p className="about-paragraph">
                    My name is Sam Cordry, and I am a current student at Rochester Institute of Technology pursuing a degree in
                    Computer Science with a minor in mathematics. Within the field of computer science, I am most interested in
                    becoming a software engineer who specializes in artificial intelligence and machine learning. Outside of this,
                    I am very passionate about the performing arts, being an active French horn and mellophone player continuously
                    for the last 8 years. Feel free to look around the website and contact me if you want to chat!
                </p>
            </div>
        </div>
    )
}