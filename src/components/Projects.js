import React from "react";
import "./Projects.css";
function Projects() {
  const projects = [
    {
      name: "ShelfBound (MERN Stack)",
      completed: "March 2025",
      description:
        "Developed a MERN stack web app for managing reading progress, including features like book reviews, favorites, and JWT-based authentication for secure logins and personalized experiences.",
      link: "https://github.com/PaidimukkulaLavanya/ShelfBound",
    },
    {
      name: "Energy Conservation Champion (Android)",
      completed: "March 2025",
      description:
        "Created an Android app to monitor and optimize energy usage, offering real-time tracking of energy consumption and sending alerts for usage optimization to contribute to energy conservation.",
      link: "https://github.com/PaidimukkulaLavanya/Energy_Conservation_Champion_mad",
    },
    {
      name: "Flight Route Planner (C Programming)",
      completed: "December 2023",
      description:
        "Developed a C program to optimize flight routing, utilizing graph algorithms to calculate the shortest, cheapest, and fastest flight routes.",
      link: "https://github.com/PaidimukkulaLavanya/Flight-Route-Planner", 
    },
    {
      name: "Lung Cancer Detection (Machine Learning)",
      completed: "March 2023",
      description:
        "Developed a machine learning model to predict lung cancer using preprocessed medical data, aimed at assisting in health diagnostics.",
      link: "https://github.com/PaidimukkulaLavanya/lung-cacer-detection-",
    },
  ];

  return (
    <section id="projects" className="projects section">
      <h2>Projects</h2>
      <div className="project-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.name}</h3>
            <p><em>Completed – {project.completed}</em></p>
            <p>{project.description}</p>
            {project.link !== "#" && (
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn">
                View Project
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
