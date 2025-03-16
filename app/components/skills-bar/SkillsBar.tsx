import React from "react";
import { SkillBarProps } from "@/type/componentsTypes";

const skillLevels: SkillBarProps[] = [
  { name: "Game UI/UX Design", level: "80" },
  { name: "2D & 3D Rendering", level: "70" },
  { name: "Environment Design", level: "80" },
  { name: "Game Icons & App Icons", level: "90" },
  { name: "Graphic Designing", level: "60" },
  { name: "Figma", level: "70" },
  { name: "Illustration", level: "80" },
  { name: "Adobe Photoshop", level: "80" },
  { name: "Branding", level: "70" },
  { name: "Logo Design", level: "90" },
];

export const SkillsBar: React.FC = () => {
  return (
    <div className="skills-bar-container">
      {skillLevels.map((skill) => (
        <div key={skill.name} className="skill-item">
          <div className="skill-header">
            <span className="skill-name">{skill.name}</span>
            <span className="skill-level">{skill.level}%</span>
          </div>
          <div className="skill-bar-background">
            <div
              className="skill-bar-fill"
              style={{ width: `${skill.level}% ` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillsBar;
