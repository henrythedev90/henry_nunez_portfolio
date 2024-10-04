"use client";
import { SKILLS_TYPE } from "../_lib/skillsType";
import SkillsImage from "../components/SkillsImage";
import { SKILLS } from "../_lib/skills";
import { useState, useEffect, useCallback } from "react";
import "./styles.css";
export default function Skills() {
  const [openSkills, setOpenSkills] = useState<string | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % SKILLS_TYPE.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide(
      (prev) => (prev - 1 + SKILLS_TYPE.length) % SKILLS_TYPE.length
    );
  }, []);

  // useEffect(() => {
  //   const interval = setInterval(nextSlide, 10000);
  //   return () => clearInterval(interval);
  // }, [nextSlide]);

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
      {/* Desktop */}
      <div className="skills_list_desktop">
        <div className="carousel_wrapper">
          <button
            className="carousel-button carousel_button_prev"
            onClick={prevSlide}
          >
            prev
          </button>
          <div className="carousel-container">
            {SKILLS_TYPE.map((skillType, index) => (
              <div
                key={skillType.type}
                className={`skill-type-slide ${
                  index === currentSlide ? "active" : ""
                }`}
                style={{
                  transform: `translateX(-${currentSlide * 100}%)`,
                  transition: "transform 0.5s ease-in-out",
                }}
              >
                <h2>{skillType.type.replace("_", "-")}</h2>
                <div className="skills_grid">
                  {SKILLS.filter((item) => item.type === skillType.type).map(
                    (item, index) => (
                      <SkillsImage
                        key={index}
                        title={item.title}
                        icon={item.icon}
                      />
                    )
                  )}
                </div>
              </div>
            ))}
          </div>
          <button
            className="carousel-button carousel_button_next"
            onClick={nextSlide}
          >
            next
          </button>
        </div>
      </div>
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
                <div className="chevron_arrow_up"></div>
              ) : (
                <div className="chevron_arrow_down"></div>
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
