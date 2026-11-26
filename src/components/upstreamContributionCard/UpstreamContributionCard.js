import React from "react";
import "./UpstreamContributionCard.css";
import { Fade } from "react-reveal";

export default function UpstreamContributionCard({ contribution, theme }) {
  return (
    <Fade bottom duration={550} distance="20px">
      <a
        className="upstream-card-link"
        href={contribution.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${contribution.repo} — ${contribution.badge}`}
      >
        <article
          className="upstream-card"
          style={{
            backgroundColor: theme.body,
            borderColor: theme.highlight,
          }}
        >
          <div className="upstream-card-top">
            <div className="upstream-repo-name-wrap">
              <svg
                aria-hidden="true"
                className="upstream-pr-svg"
                height="16"
                viewBox="0 0 16 16"
                width="16"
                fill={theme.imageHighlight}
              >
                <path
                  fillRule="evenodd"
                  d="M5 3.254V3.25v.005a.75.75 0 110-.005v.004zm.45 1.9a2.25 2.25 0 10-1.95.218v5.256a2.25 2.25 0 101.5 0V7.123A5.735 5.735 0 009.25 9h1.378a2.251 2.251 0 100-1.5H9.25a4.25 4.25 0 01-3.8-2.346zM12.75 9a.75.75 0 100-1.5.75.75 0 000 1.5zm-8.5 4.5a.75.75 0 100-1.5.75.75 0 000 1.5z"
                />
              </svg>
              <span
                className="upstream-repo-name"
                style={{ color: theme.text }}
              >
                {contribution.repo}
              </span>
            </div>
            <span
              className="upstream-badge"
              style={{
                backgroundColor: theme.highlight,
                color: theme.text,
              }}
            >
              {contribution.badge}
            </span>
          </div>

          <p
            className="upstream-description"
            style={{ color: theme.secondaryText }}
          >
            {contribution.description}
          </p>

          <div className="upstream-footer">
            <div className="upstream-lang" style={{ color: theme.text }}>
              {contribution.iconifyClass && (
                <span
                  className="iconify"
                  data-icon={contribution.iconifyClass}
                  data-inline="false"
                ></span>
              )}
              <span>{contribution.language}</span>
            </div>
            <span
              className="upstream-external"
              style={{ color: theme.imageHighlight }}
            >
              View PR →
            </span>
          </div>
        </article>
      </a>
    </Fade>
  );
}
