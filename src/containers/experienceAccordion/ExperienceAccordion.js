import React, { Component } from "react";
import ExperienceCard from "../../components/experienceCard/ExperienceCard.js";
import "./ExperienceAccordion.css";

// Sections render expanded by default: hiding a work history behind a click
// costs more than it saves, and keeps the content out of crawlers' reach.
class ExperienceAccordion extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="experience-accord">
        {this.props.sections.map((section) => (
          <div className="experience-section" key={section["title"]}>
            {this.props.sections.length > 1 && (
              <h2
                className="experience-section-title"
                style={{ color: theme.text }}
              >
                {section["title"]}
              </h2>
            )}
            {section["experiences"].map((experience, index) => (
              <ExperienceCard
                key={experience["company"] + experience["title"]}
                index={index}
                totalCards={section["experiences"].length}
                experience={experience}
                theme={theme}
              />
            ))}
          </div>
        ))}
      </div>
    );
  }
}

export default ExperienceAccordion;
