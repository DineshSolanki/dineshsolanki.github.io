import React from "react";
import "./CorporateProjectCard.css";
import { Fade } from "react-reveal";

export default function CorporateProjectCard({ project, theme }) {
  const hasProductLogo = Boolean(project.product_logo_path);
  const displayLogo = hasProductLogo
    ? project.product_logo_path
    : project.logo_path;
  const displayAlt =
    project.product_logo_alt || project.product_name || project.company;
  const primaryUrl = project.product_url || project.company_url;

  return (
    <Fade bottom duration={1200} distance="30px">
      <article
        className="corporate-card"
        style={{
          backgroundColor: theme.body,
          borderColor: theme.highlight,
          borderTopColor: project.accentColor || theme.imageHighlight,
        }}
      >
        <div className="corporate-card-header">
          <div className="corporate-card-org">
            <a
              className={`corporate-card-logo-wrap ${
                hasProductLogo ? "corporate-card-logo-wrap--wide" : ""
              }`}
              href={primaryUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${displayAlt}`}
              style={{
                backgroundColor: project.product_logo_bg || "#ffffff",
              }}
            >
              <img
                className="corporate-card-logo"
                src={require(`../../assets/images/${displayLogo}`)}
                alt={displayAlt}
              />
            </a>
            <div className="corporate-card-org-meta">
              <div className="corporate-card-company-row">
                {hasProductLogo && (
                  <img
                    className="corporate-card-company-mini-logo"
                    src={require(`../../assets/images/${project.logo_path}`)}
                    alt=""
                    aria-hidden="true"
                  />
                )}
                <a
                  className="corporate-card-company"
                  href={project.company_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: theme.text }}
                >
                  {project.company}
                </a>
              </div>
              <span
                className="corporate-card-role"
                style={{ color: theme.secondaryText }}
              >
                {project.role} · {project.duration}
              </span>
            </div>
          </div>
          <span
            className="corporate-card-scope"
            style={{
              backgroundColor: theme.highlight,
              color: theme.text,
            }}
          >
            {project.scopeLabel || "Enterprise"}
          </span>
        </div>

        <h3 className="corporate-card-title" style={{ color: theme.text }}>
          {project.product_url ? (
            <a
              href={project.product_url}
              target="_blank"
              rel="noopener noreferrer"
              className="corporate-card-title-link"
              style={{ color: theme.text }}
            >
              {project.title}
            </a>
          ) : (
            project.title
          )}
        </h3>

        {(project.domain || project.impact) && (
          <div
            className="corporate-card-callout"
            style={{
              borderLeftColor: theme.imageHighlight,
              backgroundColor: `${theme.highlight}55`,
            }}
          >
            {project.domain && (
              <span
                className="corporate-card-domain"
                style={{ color: theme.secondaryText }}
              >
                {project.domain}
              </span>
            )}
            {project.impact && (
              <span
                className="corporate-card-impact"
                style={{ color: theme.text }}
              >
                {project.impact}
              </span>
            )}
          </div>
        )}

        <p
          className="corporate-card-summary"
          style={{ color: theme.secondaryText }}
        >
          {project.summary}
        </p>

        {project.highlights && project.highlights.length > 0 && (
          <ul
            className="corporate-card-highlights"
            style={{ color: theme.text }}
          >
            {project.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        )}

        <div className="corporate-card-footer">
          {project.techStack && project.techStack.length > 0 && (
            <div className="corporate-card-stack">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="corporate-tech-chip"
                  style={{
                    color: theme.text,
                    borderColor: theme.highlight,
                    backgroundColor: `${theme.highlight}44`,
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          )}

          {project.product_url && (
            <div className="corporate-card-links">
              <a
                href={project.product_url}
                target="_blank"
                rel="noopener noreferrer"
                className="corporate-product-link"
                style={{
                  color: theme.text,
                  borderColor: theme.imageHighlight,
                  backgroundColor: `${theme.highlight}55`,
                }}
              >
                {project.product_link_label || "View Product ↗"}
              </a>
            </div>
          )}
        </div>
      </article>
    </Fade>
  );
}
