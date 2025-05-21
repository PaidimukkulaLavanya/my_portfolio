import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <h1 className="logo-text">Lavanya's Portfolio</h1>
      </div>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
        <li>
          <a 
            href="https://drive.google.com/file/d/1CJhHjFF-D8kuWGMbUOdLrTc9c3A1S2tr/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="resume-btn"
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
