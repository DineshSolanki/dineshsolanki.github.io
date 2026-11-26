import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { greeting, impactStats } from "../../portfolio";
import { Fade } from "react-reveal";
import FeelingProud from "./FeelingProud";

export default function Greeting(props) {
  const theme = props.theme;
  const [copied, setCopied] = useState(false);
  const copyTimerRef = useRef(null);

  useEffect(() => {
    return () => {
      if (copyTimerRef.current) {
        clearTimeout(copyTimerRef.current);
      }
    };
  }, []);

  const handleCopyEmail = () => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(greeting.email).catch(() => {});
    }
    setCopied(true);
    if (copyTimerRef.current) {
      clearTimeout(copyTimerRef.current);
    }
    copyTimerRef.current = setTimeout(() => setCopied(false), 2200);
  };

  return (
    <Fade bottom duration={550} distance="24px">
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
                <Link
                  to="/projects"
                  className="greeting-secondary-cta"
                  style={{
                    color: theme.text,
                    borderColor: theme.text,
                    backgroundColor: "transparent",
                  }}
                >
                  View Production Projects →
                </Link>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="greeting-copy-email-btn"
                  style={{
                    color: theme.text,
                    borderColor: theme.highlight,
                    backgroundColor: `${theme.highlight}55`,
                  }}
                  aria-label={`Copy email address ${greeting.email}`}
                >
                  {copied ? "Email Copied ✓" : `Copy ${greeting.email}`}
                </button>
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
