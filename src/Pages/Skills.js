import React from "react";
import "../AllCss/Skills.css";
import Skill from "../Component/Skill";
import { SkillsList } from "../Component/SkillList";

const Skills = () => {
  return (
    <section className="Skills">
      <div className="SkillsContainer">
        <div className="SkillsTitle">
          <h2>SKILLS</h2>
        </div>
        <div className="SkillsLineContainer">
          <div className="SkillsLine"></div>
        </div>
      </div>
      <div className="skillListContainer">
        <div className="skillList">
          {SkillsList.map((skill, key) => (
            <Skill name={skill.name} key={key} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
