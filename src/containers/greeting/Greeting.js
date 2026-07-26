import React from "react";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { greeting, impactStats } from "../../portfolio";
import { Fade } from "react-reveal";
import FeelingProud from "./FeelingProud";

export default function Greeting(props) {
  const theme = props.theme;
  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1 className="greeting-text" style={{ color: theme.text }}>
                {greeting.title}
              </h1>
              <h2 className="greeting-role" style={{ color: theme.text }}>
                {greeting.role}
              </h2>
              <p
                className="greeting-stack"
                style={{ color: theme.secondaryText }}
              >
                {greeting.roleStack}
              </p>
              <p
                className="greeting-current"
                style={{ color: theme.text, backgroundColor: theme.highlight }}
              >
                {greeting.currentPosition}
              </p>
              <p
                className="greeting-text-p subTitle"
                style={{ color: theme.secondaryText }}
              >
                {greeting.subTitle}
              </p>

              <div className="greeting-stats">
                {impactStats.map((stat) => (
                  <div
                    className="greeting-stat"
                    key={stat.value}
                    style={{ borderLeftColor: theme.headerColor }}
                  >
                    <span
                      className="greeting-stat-value"
                      style={{ color: theme.text }}
                    >
                      {stat.value}
                    </span>
                    <span
                      className="greeting-stat-label"
                      style={{ color: theme.secondaryText }}
                    >
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>

              <SocialMedia theme={theme} />
              <div className="button-greeting-div">
                <Button
                  text="Download Résumé"
                  newTab={true}
                  href={greeting.resumeLink}
                  theme={theme}
                />
                <Button
                  text="Email Me"
                  href={`mailto:${greeting.email}`}
                  theme={theme}
                />
              </div>
            </div>
          </div>
          <div className="greeting-image-div">
            <FeelingProud theme={theme} />
          </div>
        </div>
      </div>
    </Fade>
  );
}
