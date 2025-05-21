import React from "react";
import './Certifications.css';

const certs = [
  {
    category: "NPTEL",
    items: [
      "Problem-solving through programming in C",
      "Enhancing my soft skills and personality",
      "Programming in Java",
      "The Joy of Computing Using Python",
    ],
  },
  {
    category: "Spoken Tutorial",
    items: [
      "Java",
      "C",
      "C++",
      "Python",
      "PHP & MySQL",
      "Linux",
    ],
  },
  {
    category: "Infosys Springboard",
    items: [
      "Artificial Intelligence Foundation",
      "AI Primer",
    ],
  },
  {
    category: "Cisco",
    items: [
      "Python essentials-1",
      "Introduction to Cyber Security",
      "CCNA",
      "Python essentials-2",
    ],
  },
  {
    category: "Coursera",
    items: [
      "Machine Learning with Python",
      "Introduction to Software Engineering",
      "Programming for Everybody",
    ],
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="certifications section">
      <h2>Certifications</h2>
      <div className="cert-container">
        {certs.map((cat, idx) => (
          <div key={idx} className="cert-card">
            <h3>{cat.category}</h3>
            <ul className="cert-list">
              {cat.items.map((cert, i) => (
                <li key={i} className="cert-item">{cert}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
