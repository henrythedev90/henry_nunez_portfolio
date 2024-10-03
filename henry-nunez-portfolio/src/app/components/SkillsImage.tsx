import React from "react";
import "../styles/skills-image.module.css";

const SkillsImage = ({ title, icon }: { title: string; icon: string }) => {
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
