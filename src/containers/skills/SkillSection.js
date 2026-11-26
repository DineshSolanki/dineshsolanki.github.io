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
                <Fade left duration={550}>
                  <div className="skills-image-div">{skillSvg}</div>
                </Fade>
              )}

              <div className="skills-text-div">
                <Fade right duration={550}>
                  <h1 className="skills-heading" style={{ color: theme.text }}>
                    {skill.title}
                  </h1>
                </Fade>
                <Fade right duration={600}>
                  <SoftwareSkill logos={skill.softwareSkills} />
                </Fade>
                <Fade right duration={600}>
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
                    {skill.skillGroups && skill.skillGroups.length > 0 && (
                      <div className="skills-groups-grid">
                        {skill.skillGroups.map((group) => (
                          <div
                            key={group.category}
                            className="skills-group-card"
                            style={{
                              borderColor: theme.highlight,
                              backgroundColor: `${theme.highlight}33`,
                            }}
                          >
                            <h3
                              className="skills-group-title"
                              style={{ color: theme.text }}
                            >
                              {group.category}
                            </h3>
                            <div className="skills-group-chips">
                              {group.items.map((item) => (
                                <span
                                  key={item}
                                  className="skills-group-chip"
                                  style={{
                                    color: theme.text,
                                    backgroundColor: theme.body,
                                    borderColor: theme.highlight,
                                  }}
                                >
                                  {item}
                                </span>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
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
