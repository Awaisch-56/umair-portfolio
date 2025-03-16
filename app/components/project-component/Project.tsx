"use client";
import React from "react";
import { ProjectCard } from "../project-card/ProjectCard";

const projects = [
  {
    title: "Car Racing Game",
    image: "/images/car-racing.png",
    url: "https://www.behance.net/gallery/206740667/Car-Racing-Game-Screenshot",
  },
  {
    title: "Bus Game",
    image: "/images/bus-game.png",
    url: "https://www.behance.net/gallery/204848929/Bus-Game-Screenshot-2024",
  },
  {
    title: "American Truck Game",
    image: "/images/american-truck.png",
    url: "https://www.behance.net/gallery/200509431/American-Truck-Game",
  },
  {
    title: "Car Parking Game",
    image: "/images/car-parking.png",
    url: "https://www.behance.net/gallery/203440901/Car-Parking-Game-Screenshot",
  },
  {
    title: "Bus Simulator Game",
    image: "/images/bus-simulator.png",
    url: "https://www.behance.net/gallery/194885361/Bus-Simulator-Game-UI-2024",
  },
  {
    title: "construction Game",
    image: "/images/construction-game.png",
    url: "https://www.behance.net/gallery/189182211/construction-Game-UI",
  },
  {
    title: "Artwork illustrator",
    image: "/images/illustrater.png",
    url: "https://www.behance.net/gallery/186372745/Artwork-illustrator",
  },
  {
    title: "Tractor Farming Game",
    image: "/images/farming.png",
    url: "https://www.behance.net/gallery/187859433/Tractor-Farming-Game-UI",
  },
  {
    title: "Police Car Chase Game",
    image: "/images/police-car.png",
    url: "https://www.behance.net/gallery/203157687/Police-Car-Chase-Game-2024",
  },

];

const Project: React.FC = () => {
  return (
    <div className="projects-container">
      <h2 className="projects-heading">
        My <span className="projects-gradient-text">Projects</span>
      </h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            image={project.image}
            url={project.url}
          />
        ))}
      </div>
    </div>
  );
};

export default Project;
