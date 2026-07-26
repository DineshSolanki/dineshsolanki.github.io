import React, { Component } from "react";
import "./Skills.css";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import { skills } from "../../portfolio";
import { Fade } from "react-reveal";
import DataScienceImg from "./DataScienceImg";
import FullStackImg from "./FullStackImg";
import CloudInfraImg from "./CloudInfraImg";
import DesignImg from "./DesignImg";
import SecurityImg from "./SecurityImg";

// Returns null for sections with no fileName (e.g. the flat "Technical Skills"
// keyword block), which then render full width instead of borrowing an
// unrelated illustration.
function getSkillSvg(fileName, theme) {
  switch (fileName) {
    case "DataScienceImg":
      return <DataScienceImg theme={theme} />;
    case "FullStackImg":
      return <FullStackImg theme={theme} />;
    case "CloudInfraImg":
      return <CloudInfraImg theme={theme} />;
    case "SecurityImg":
      return <SecurityImg theme={theme} />;
    case "DesignImg":
      return <DesignImg theme={theme} />;
    default:
      return null;
  }
}

class SkillSection extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div>
        {skills.data.map((skill) => {
          const skillSvg = getSkillSvg(skill.fileName, theme);
          return (
            <div
              key={skill.title}
              className={
                skillSvg ? "skills-main-div" : "skills-main-div skills-no-image"
              }
            >
              {skillSvg && (
                <Fade left duration={1000}>
                  <div className="skills-image-div">{skillSvg}</div>
                </Fade>
              )}

              <div className="skills-text-div">
                <Fade right duration={1000}>
                  <h1 className="skills-heading" style={{ color: theme.text }}>
                    {skill.title}
                  </h1>
                </Fade>
                <Fade right duration={1500}>
                  <SoftwareSkill logos={skill.softwareSkills} />
                </Fade>
                <Fade right duration={1500}>
                  <div>
                    {skill.skills.map((skillSentence) => {
                      return (
                        <p
                          key={skillSentence}
                          className="subTitle skills-text"
                          style={{ color: theme.secondaryText }}
                        >
                          {skillSentence}
                        </p>
                      );
                    })}
                  </div>
                </Fade>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default SkillSection;
