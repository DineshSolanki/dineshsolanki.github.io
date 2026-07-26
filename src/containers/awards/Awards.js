import React, { Component } from "react";
import "./Awards.css";
import { Fade } from "react-reveal";
import { awards } from "../../portfolio";

class Awards extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="main" id="awards">
        <div className="awards-header-div">
          <Fade bottom duration={1000} distance="20px">
            <h1 className="awards-header" style={{ color: theme.text }}>
              {awards.title}
            </h1>
          </Fade>
        </div>
        <div className="awards-body-div">
          {awards.data.map((award) => {
            const card = (
              <div
                className="award-card"
                style={{ backgroundColor: theme.body }}
              >
                <img
                  className="award-card-logo"
                  src={require(`../../assets/images/${award.logo_path}`)}
                  alt={award.alt_name}
                />
                <div className="award-card-text">
                  <h2 className="award-card-title" style={{ color: theme.text }}>
                    {award.title}
                  </h2>
                  <h3
                    className="award-card-subtitle"
                    style={{ color: theme.secondaryText }}
                  >
                    {award.subtitle}
                  </h3>
                </div>
              </div>
            );
            return (
              <Fade
                bottom
                duration={1000}
                distance="20px"
                key={award.title + award.subtitle}
              >
                {award.certificate_link ? (
                  <a
                    className="award-card-link"
                    href={award.certificate_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${award.title} — view certificate`}
                  >
                    {card}
                  </a>
                ) : (
                  card
                )}
              </Fade>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Awards;
