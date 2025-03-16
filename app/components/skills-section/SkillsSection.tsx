import React from "react";
import SkillsBar from "../skills-bar/SkillsBar";
import ImageSlider from "../image-slider/ImageSlider";

const SkillsSection: React.FC = () => {
  return (
    <section>
      <div className="skills-container">
        <h2 className="skills-title">
          My{" "}
          <span className="highlight-skills">Skills</span>
        </h2>
        <div className="skills-grid">
          <div className="skills-slider-wrapper">
            <ImageSlider />
          </div>
          <div className="skills-bar-wrapper">
            <SkillsBar />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;