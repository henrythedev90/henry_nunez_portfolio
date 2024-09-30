import { SKILLS_TYPE } from "../_lib/skillsType";
import "./styles.css";
export default function Skills() {
  const rotateText = {
    display: "inline-block",
    transform: "rotateX(180deg)",
  };
  return (
    <div>
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
    </div>
  );
}
