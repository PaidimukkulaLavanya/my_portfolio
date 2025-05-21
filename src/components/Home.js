import React from "react";
import "./Home.css";

function Home() {
  return (
    <section id="home" className="home">
      <div className="home-content">
        <h2>Paidimukkula Lavanya 👋</h2>
        <p className="highlight">Final Year CSE Student | Aspiring Software Developer</p>
        <p>Full-Stack Developer | AIML Enthusiast | Creative Technophile</p>
        <p>
          I love building web apps and smart systems that solve real-world problems. With a strong grasp of both frontend and backend development, I strive to create seamless digital experiences.
        </p>
        <p>
          Eager to turn ideas into impactful software solutions and kick-start my career in the tech industry.
        </p>
        <a href="#contact" className="btn">Get in Touch</a>
      </div>
      <div className="home-image">
        <img src={require("../components/images/blue.jpg")} alt="Lavanya" />
      </div>
    </section>
  );
}

export default Home;
