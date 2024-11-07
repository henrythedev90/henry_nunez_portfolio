"use client";
import { SKILLS_TYPE } from "../../_lib/skillsType";
import { SKILLS } from "../../_lib/skills";
import SkillsImage from "./SkillsImage";
import { useState, useEffect, useCallback } from "react";
import "./styles.css";
export default function Skills() {
  const [openSkills, setOpenSkills] = useState<string | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % SKILLS_TYPE.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide(
      (prev) => (prev - 1 + SKILLS_TYPE.length) % SKILLS_TYPE.length
    );
  }, []);

  const rotateText = {
    display: "inline-block",
    transform: "rotateX(180deg)",
  };
  return (
    <div className={`skills_page ${fadeIn ? "fade-in" : ""}`}>
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
            &lt;
          </button>
          <div className="carousel-container">
            <div
              className="carousel-slide"
              style={{
                transform: `translateX(-${currentSlide * 100}%)`,
                transition: "transform 0.5s ease-in-out",
                display: "flex",
                height: "100%",
              }}
            >
              {SKILLS_TYPE.map((skillType) => (
                <div
                  key={skillType.type}
                  className="skill-type-slide"
                  style={{ width: `${100 / SKILLS_TYPE.length}%` }}
                >
                  <h2 className="skills_list_desktop_title">
                    {skillType.type.replace("_", " ")}
                  </h2>
                  <ul className="skills_grid">
                    {SKILLS.filter(
                      (skill) => skill.type === skillType.type
                    ).map((skill, skillIndex) => (
                      <SkillsImage
                        key={skillIndex}
                        title={skill.title}
                        icon={skill.icon}
                      />
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <button
            className="carousel-button carousel_button_next"
            onClick={nextSlide}
          >
            &gt;
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
                const titleElement = document.querySelector(
                  `.skills_${skillType.type
                    .toLowerCase()
                    .replace(" ", "_")} .skills_list_mobile_title`
                );
                if (titleElement) {
                  titleElement.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                    inline: "center",
                  });
                }
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
