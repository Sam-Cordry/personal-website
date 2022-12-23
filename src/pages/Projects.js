import React from "react";

export default function Projects() {
    return (
        <div className="projects">
            <h1 className="projects-title">Projects and Experience</h1>
            <h2 className="projects-description">Check out what I've done!</h2>
            <div className="projects-main">
                <div className="projects-website">
                    <h3>Personal Website</h3>
                    <ul>
                        <li>The website you're currently on!</li>
                        <li>Designed to be a nicely organized place for me to present my project.</li>
                        <li>Created using ReactJS, HTML, and CSS.</li>
                        <li>Can send emails to me from the Contact page using EmailJS.</li>
                        <li><a href="https://github.com/Sam-Cordry/personal-website">Click here for the code on Github.</a></li>
                    </ul>
                </div>
                <div className="projects-envelope">
                    <h3>Envelope Budget System</h3>
                    <ul>
                        <li>A macOS application that enables for easy budgeting.</li>
                        <li>Currently in progress, but is actively being updated.</li>
                        <li>When finished, it will be able to read CSV files an update envelopes accordingly.</li>
                        <li>Created using Swift and SwiftUI.</li>
                        <li><a href="https://github.com/Sam-Cordry/Envelope_Budget_System">Click here for the code on Github.</a></li>
                    </ul>
                </div>
                <div className="projects-robotics">
                    <h3>FRC Robotics</h3>
                    <ul>
                        <li>A part of FRC Team 3176 in the FIRST Indiana district.</li>
                        <li>Acted as the lead vision programmer for the team.</li>
                        <li>Worked with systems dealing with image processing and target recognition.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}