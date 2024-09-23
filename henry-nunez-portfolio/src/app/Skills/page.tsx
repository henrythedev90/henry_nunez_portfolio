import { SKILLS_TYPE } from "../_lib/skillsType";
import "./styles.css";
export default function Skills() {
  return (
    <div className="skills_container">
      <div className="skills_atom">
        {SKILLS_TYPE.map((item, index) => {
          return (
            <div className="skills_orbit" key={index}>
              <div className="skills_path">
                <div className="skills_electron">{item.type}</div>
              </div>
            </div>
          );
        })}
        <div className="skills_nucleus">Skills</div>
      </div>
    </div>
  );
}
