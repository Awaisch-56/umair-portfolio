import React from 'react';
import AboutSection from '../components/about-section/AboutSection';
import { BackgroundBeamsWithCollision } from '../components/ui/background-beams-with-collision';

const About = () => {
  return (
    <main className="page-container">
      <BackgroundBeamsWithCollision>
      <div className="page-section">
        <AboutSection />
    </div>
      </BackgroundBeamsWithCollision>
    </main>
  )
}

export default About;
