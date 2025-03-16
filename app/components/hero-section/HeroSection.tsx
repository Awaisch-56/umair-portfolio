"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-grid">
        <div className="hero-text">
          <h1 className="hero-title">
            <span className="hero-greeting">Hi, I am </span>
            <br />
            <TypeAnimation
              sequence={[
                "Umair Akhtar",
                1000,
                "Game UI/UX Designer",
                1000,
                "Graphic Designer",
                1000,
                "FreeLancer",
                1000,
              ]}
              wrapper="span"
              speed={40}
              repeat={Infinity}
              className="hero-animation"
            />
          </h1>
          <p className="hero-description">
          I am a Game UI/UX Designer & Graphic Artist with 3 years of experience in game interface design, 2D & 3D rendering, and visual aesthetics. I specialize in UV Mapping, 3D Modeling, Game Environment Design, and Icon Design for apps and games. Using Figma, Adobe Illustrator, and Photoshop, I craft engaging visuals that blend creativity with functionality.
          </p>
          <div className="hero-buttons">
            <button
              className="btn-contact"
              onClick={() => (window.location.href = "/contact")}
            >
              Contact
            </button>
            <button
              className="btn-hire-me"
              onClick={() => (window.location.href = "/contact")}
            >
              <span className="hire-me-span">Hire Me</span>
            </button>
          </div>
        </div>
        <div className="hero-image-container">
          <div className="hero-image-wrapper">
            <Image
              src="/images/profile.jpg"
              alt="Hero Section Image"
              width={350}
              height={350}
              className="hero-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
