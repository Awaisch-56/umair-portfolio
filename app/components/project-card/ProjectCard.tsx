import React from "react";
import { ProjectCardProps } from "@/type/componentsTypes";
import Image from "next/image";

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  url,
}) => {
  return (
    <div className="project-card">
      <div className="image-wrapper">
        <Image
          src={image}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="image"
        />
      </div>
      <div className="content">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
        <a href={url} target="_blank" rel="noopener noreferrer" className="project-button">
          <span className="button-text">Click Here</span>
        </a>
      </div>
    </div>
  );
};