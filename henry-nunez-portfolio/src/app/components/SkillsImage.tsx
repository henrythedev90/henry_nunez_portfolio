import React from "react";
import "../styles/skills-image.module.css";

interface SkillsImageProps {
  title: string;
  icon: string;
}

const SkillsImage: React.FC<SkillsImageProps> = ({ title, icon }) => {
  return (
    <li className="skills_image_container">
      <div className="skills_image_content">
        <h5 className="skills_image_title">{title}</h5>
        <i className={`devicon-${icon} skills_image_content_image`}></i>
      </div>
    </li>
  );
};

export default SkillsImage;
