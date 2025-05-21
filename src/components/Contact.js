import React from "react";
import "./Contact.css";

const codingProfiles = [
  {
    name: "GitHub",
    url: "https://github.com/PaidimukkulaLavanya",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/lavanya-paidimukkula-84a012273/",
  },
  {
    name: "LeetCode",
    url: "https://leetcode.com/u/lavanyapwg05/",
  },
  {
    name: "CodeChef",
    url: "https://www.codechef.com/users/lavanya_1013",
  },
  {
    name: "HackerRank",
    url: "https://www.hackerrank.com/profile/lavanyapwg05",
  },
  {
    name: "Codeforces",
    url: "https://codeforces.com/profile/Paidimukkula_Lavanya",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="contact section">
      <h2>Connect with Me</h2>
      <p className="ready-to-work">
        Open to work — check my resume below and contact me!
      </p>

      {/* Contact Info first */}
      <div className="resume-contact-info">
        <div className="contact-info">
          <p>Name: Paidimukkula Lavanya</p>
          <p>Email: lavanyapwg05@gmail.com</p>
          <p>Phone: +91 8074100690</p>
        </div>
        <br></br>

        <a
          href="https://drive.google.com/file/d/1CJhHjFF-D8kuWGMbUOdLrTc9c3A1S2tr/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="resume-btn"
        >
          View Resume

        </a>
      </div>
    <br /><br /><br></br>
      {/* Coding Profiles second */}
      <div className="coding-profiles-container">
        {codingProfiles.map((profile, idx) => (
          <a
            key={idx}
            href={profile.url}
            target="_blank"
            rel="noopener noreferrer"
            className="coding-profile-card"
          >
            <span className="profile-name">{profile.name}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
