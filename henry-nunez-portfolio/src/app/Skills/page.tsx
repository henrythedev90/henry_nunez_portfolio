"use client";
import { SKILLS_TYPE } from "../_lib/skillsType";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/24/solid";
import SkillsImage from "../components/SkillsImage";
import { SKILLS } from "../_lib/skills";
import { useState } from "react";
import "./styles.css";
export default function Skills() {
  const [openSkills, setOpenSkills] = useState<string | null>(null);
  const rotateText = {
    display: "inline-block",
    transform: "rotateX(180deg)",
  };
  return (
    <div className="skills_page">
      <div className="skills_container">
        <div className="skills_atom">
          {SKILLS_TYPE.map((item, index) => {
            return (
              <div className="skills_orbit" key={index}>
                <div className="skills_path">
                  <div className="skills_electron">
                    <span style={rotateText}>
                      {item.type.replace("_", "-")}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
          <div className="skills_nucleus">
            <span>Skills</span>
          </div>
        </div>
      </div>
      <div className="skills_list"></div>
      {/* Mobile */}
      <div className="skills_list_mobile">
        {SKILLS_TYPE.map((skillType) => (
          <div
            key={skillType.type}
            className={`skills_${skillType.type
              .toLowerCase()
              .replace(" ", "_")}`}
          >
            <div
              className="toggle_skills"
              onClick={(e) => {
                e.preventDefault();
                setOpenSkills(
                  openSkills === skillType.type ? null : skillType.type
                );
              }}
            >
              <h1 className="skills_list_mobile_title">
                {skillType.type.replace("_", "-")}
              </h1>
              {openSkills === skillType.type ? (
                <ChevronUpIcon className="h-5 w-5 text-white" />
              ) : (
                <ChevronDownIcon className="h-5 w-5 text-white" />
              )}
            </div>
            {openSkills === skillType.type && (
              <ul
                className={`skills_list_mobile_item ${
                  openSkills === skillType.type ? "open" : ""
                }`}
              >
                {SKILLS.filter((item) => item.type === skillType.type).map(
                  (item, index) => (
                    <SkillsImage
                      key={index}
                      title={item.title}
                      icon={item.icon}
                    />
                  )
                )}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
