import React from "react";
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaLaravel, FaFigma } from "react-icons/fa";

const skills = [
  { icon: <FaReact />, name: "React.js", level: "85%" },
  { icon: <FaLaravel />, name: "Laravel", level: "80%" },
  { icon: <FaHtml5 />, name: "HTML5", level: "95%" },
  { icon: <FaCss3Alt />, name: "CSS3 / SCSS", level: "90%" },
  { icon: <FaJs />, name: "JavaScript", level: "85%" },
  { icon: <FaFigma />, name: "UI/UX (Figma)", level: "75%" },
];

const SkillsPage = () => {
  return (
    <div className="skills-container">
      <h1 className="title">My Skills</h1>
      <p className="subtitle">Berikut adalah keterampilan yang saya kuasai:</p>
      <div className="skills-list">
        {skills.map((skill, index) => (
          <div key={index} className="skill">
            <div className="skill-header">
              <span className="icon">{skill.icon}</span>
              <span className="skill-name">{skill.name}</span>
              <span className="skill-level">{skill.level}</span>
            </div>
            <div className="progress-bar">
              <div className="progress" style={{ width: skill.level }}></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsPage;
