import React from "react";
import "./About.css";
import avatarImage from "./images/avataaars.png";

function About() {
// Update the import path for avatarImage
// import avatarImage from "../assets/avatar.png"; // Remove or comment out this line

return (
    <section id="about" className="about section">
        <div className="about-container">
            <div className="about-text">
                <h2>About Me</h2>
                <p>
                    I'm <strong>Paidimukkula Lavanya</strong>, a final-year Computer Science and Engineering student with a passion for software development and innovation.
                </p>
                <p>
                    My journey in tech has been shaped by hands-on experience with full-stack projects, AI/ML solutions, and organizing technical events. I enjoy transforming ideas into real applications that solve real problems.
                </p>

                <div className="about-cards">
                    <ul>
                        <li>💻 Full-Stack Developer (MERN & Android)</li>
                        <li>🤖 AI/ML enthusiast with real-world project experience</li>
                        <li>📚 Strong in DSA, DBMS, OS, CN, OOP</li>
                        <li>🎤 Tech Event Organizer – MLSA & SITAR</li>
                        <li>Amazon Future Engineer Scholarship holder and mentee in their exclusive mentorship program</li>
                    </ul>
                </div>
            </div>

            <div className="about-image">
                <img src={avatarImage} alt="Lavanya About" />
            </div>
        </div>
    </section>
);
}

export default About;
