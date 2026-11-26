import React from "react";
import ProjectLanguages from "../../components/projectLanguages/ProjectLanguages";
import "./GithubRepoCard.css";
import { Fade } from "react-reveal";

export default function GithubRepoCard({ repo, category, theme }) {
  const badgeLabel = repo.category || category;
  const createdDate = repo.createdAt ? repo.createdAt.split("T")[0] : "";

  return (
    <div className="repo-card-div" style={{ backgroundColor: theme.highlight }}>
      <Fade bottom duration={550} distance="20px">
        <a
          className="repo-card-link"
          href={repo.url}
          target="_blank"
          rel="noopener noreferrer"
          key={repo.id}
        >
          <div className="repo-card-header-row">
            <div className="repo-name-div">
              <svg
                aria-hidden="true"
                className="octicon repo-svg"
                height="16"
                role="img"
                viewBox="0 0 12 16"
                width="12"
                fill={theme.text}
              >
                <path
                  fillRule="evenodd"
                  d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"
                ></path>
              </svg>
              <p className="repo-name" style={{ color: theme.text }}>
                {repo.name}
              </p>
            </div>
            {badgeLabel && (
              <span
                className="repo-category-badge"
                style={{
                  backgroundColor: theme.body,
                  color: theme.text,
                }}
              >
                {badgeLabel}
              </span>
            )}
          </div>
          <p className="repo-description" style={{ color: theme.text }}>
            {repo.description}
          </p>
          <div className="repo-details">
            {createdDate && (
              <p
                className="repo-creation-date subTitle"
                style={{ color: theme.secondaryText }}
              >
                Created on {createdDate}
              </p>
            )}
            <ProjectLanguages
              className="repo-languages"
              logos={repo.languages || []}
            />
          </div>
        </a>
      </Fade>
    </div>
  );
}
