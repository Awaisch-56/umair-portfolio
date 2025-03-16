import React from "react";
import SkillsSection from "../components/skills-section/SkillsSection";
import { BackgroundBeamsWithCollision } from "../components/ui/background-beams-with-collision";

const Skills = () => {
  return (
    <main className="page-container">
     <BackgroundBeamsWithCollision>
     <div className="page-section">
        <SkillsSection />
      </div>
     </BackgroundBeamsWithCollision>
    </main>
  );
};

export default Skills;
