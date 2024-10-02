"use client";
import { SKILLS_TYPE } from "../_lib/skillsType";
import { SKILLS } from "../_lib/skills";
import { useState } from "react";
import "./styles.css";
export default function Skills() {
  const [isOpen, setIsOpen] = useState(false);
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
                    <span style={rotateText}>{item.type}</span>
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
        <div className="skills_front_end">
          <div className="toggle_skills" onClick={() => setIsOpen(!isOpen)}>
            <h1 className="skills_list_mobile_title">{SKILLS_TYPE[0].type}</h1>
          </div>
          <div className="skills_list_mobile_content">
            <ul className="skills_list_mobile_item">
              {SKILLS.filter((item) => item.type === "Front-End").map(
                (item, index) => {
                  return <li key={index}>{item.title}</li>;
                }
              )}
            </ul>
          </div>
        </div>
        <div className="skills_back_end">
          <div className="toggle_skills" onClick={() => setIsOpen(!isOpen)}>
            <h1 className="skills_list_mobile_title">{SKILLS_TYPE[1].type}</h1>
          </div>
          <div className="skills_list_mobile_content">
            <ul className="skills_list_mobile_item">
              {SKILLS.filter((item) => item.type === "Back-End").map(
                (item, index) => {
                  return <li key={index}>{item.title}</li>;
                }
              )}
            </ul>
          </div>
        </div>
        <div className="skills_tools">
          <div className="toggle_skills" onClick={() => setIsOpen(!isOpen)}>
            <h1 className="skills_list_mobile_title">{SKILLS_TYPE[2].type}</h1>
          </div>
          <div className="skills_list_mobile_content">
            <ul className="skills_list_mobile_item">
              {SKILLS.filter((item) => item.type === "Tools").map(
                (item, index) => {
                  return <li key={index}>{item.title}</li>;
                }
              )}
            </ul>
          </div>
        </div>
        <div className="skills_testing">
          <div className="toggle_skills" onClick={() => setIsOpen(!isOpen)}>
            <h1 className="skills_list_mobile_title">{SKILLS_TYPE[3].type}</h1>
          </div>
          <div className="skills_list_mobile_content">
            <ul className="skills_list_mobile_item">
              {SKILLS.filter((item) => item.type === "Testing").map(
                (item, index) => {
                  return <li key={index}>{item.title}</li>;
                }
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
