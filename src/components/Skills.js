import React from "react";

import cIcon from "./images/c.png";
import cppIcon from "./images/cpp.png";
import pythonIcon from "./images/py.png";
import jsIcon from "./images/js.png";
import javaIcon from "./images/java.png";
import htmlIcon from "./images/html.png";
import cssIcon from "./images/css.png";
import reactIcon from "./images/react.png";
import nodeIcon from "./images/node.png";
import expressIcon from "./images/express.png";
import mongoIcon from "./images/mago.png";
import mysqlIcon from "./images/sql.png";
import androidIcon from "./images/android.png";
import flutterIcon from "./images/flutter.png";
import mlIcon from "./images/ml.png";
import dlIcon from "./images/dl.png";
import gitIcon from "./images/github.png";
import vscodeIcon from "./images/vs.jpg";
import artificialIntelligenceIcon from "./images/ai.png";
import psIcon from "./images/ps.jpg";
import ltIcon from "./images/lt.png";
import commIcon from "./images/comm.jpg";
import twIcon from "./images/tw.png";

import "./Skills.css";

function Skills() {
  const skillCategories = [
    {
      category: "Programming Languages",
      skills: [
        { name: "C", icon: cIcon },
        { name: "C++", icon: cppIcon },
        { name: "Python", icon: pythonIcon },
        { name: "JavaScript", icon: jsIcon },
        { name: "Java", icon: javaIcon },
      ],
    },
    {
      category: "Web Development",
      skills: [
        { name: "HTML5", icon: htmlIcon },
        { name: "CSS3", icon: cssIcon },
        { name: "React", icon: reactIcon },
        { name: "Node.js", icon: nodeIcon },
        { name: "Express.js", icon: expressIcon },
        { name: "MongoDB", icon: mongoIcon },
        { name: "MySQL", icon: mysqlIcon },
      ],
    },
    {
      category: "App Development",
      skills: [
        { name: "Android Studio", icon: androidIcon },
        { name: "Flutter", icon: flutterIcon },
      ],
    },
    {
      category: "AI & Machine Learning",
      skills: [
        { name: "Artificial Intelligence", icon: artificialIntelligenceIcon },
        { name: "Machine Learning", icon: mlIcon },
        { name: "Deep Learning", icon: dlIcon },

      ],
    },
    {
      category: "Tools & IDEs",
      skills: [
        { name: "Git", icon: gitIcon },
        { name: "VS Code", icon: vscodeIcon },
      ],
    },
    {
      category: "Soft Skills",
      skills: [
        { name: "Problem-solving", icon: psIcon },
        { name: "Logical Thinking", icon: ltIcon },
        { name: "Communication", icon: commIcon },
        { name: "Teamwork", icon: twIcon },
      ],
    },
  ];

  return (
    <section id="skills" className="skills section">
      <h2>Skills & Proficiencies</h2>
      <div className="skills-container">
        {skillCategories.map((cat, idx) => (
          <div key={idx} className="skill-category">
            <h3>{cat.category}</h3>
            <ul className="skill-list">
              {cat.skills.map((skill, i) => (
                <li key={i} className="skill-item">
                  {skill.icon && (
                    <img
                      src={skill.icon}
                      alt={`${skill.name} icon`}
                      className="skill-icon"
                    />
                  )}
                  <span className="skill-name">{skill.name}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}


export default Skills;
