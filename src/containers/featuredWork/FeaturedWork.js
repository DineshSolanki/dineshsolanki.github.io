import React from "react";
import { Link } from "react-router-dom";
import { Fade } from "react-reveal";
import { awards, corporateProjects } from "../../portfolio";
import "./FeaturedWork.css";

export default function FeaturedWork({ theme }) {
  // Highlight the 3 highest-signal organizations on Home: EY, Ness (TraceIQ), Exela (DrySign)
  const featuredIds = [
    "ey-cloud-microservices",
    "ness-systech-traceiq",
    "exela-drysign-platform",
  ];
  const featuredItems = featuredIds
    .map((id) => corporateProjects.data.find((item) => item.id === id))
    .filter(Boolean);

  return (
    <section
      className="featured-work-section"
      aria-labelledby="featured-work-heading"
    >
      <Fade bottom duration={550} distance="24px">
        <div className="featured-work-header">
          <div>
            <h2
              id="featured-work-heading"
              className="featured-work-title"
              style={{ color: theme.text }}
            >
              Production Work &amp; Impact
            </h2>
            <p
              className="featured-work-subtitle"
              style={{ color: theme.secondaryText }}
            >
              Enterprise platforms delivered across global banking, pharma
              serialization, and regulated e-signature workflows.
            </p>
          </div>
          <Link
            to="/projects"
            className="featured-work-all-link"
            style={{
              color: theme.text,
              borderColor: theme.imageHighlight,
              backgroundColor: `${theme.highlight}55`,
            }}
          >
            All Projects &amp; Case Studies →
          </Link>
        </div>

        <div className="featured-work-grid">
          {featuredItems.map((item) => {
            const logoFile = item.product_logo_path || item.logo_path;
            const isWide = Boolean(item.product_logo_path);
            return (
              <article
                key={item.id}
                className="featured-work-card"
                style={{
                  backgroundColor: theme.body,
                  borderColor: theme.highlight,
                  borderTopColor: item.accentColor || theme.imageHighlight,
                }}
              >
                <div className="featured-work-card-top">
                  <div
                    className={`featured-work-logo-wrap ${
                      isWide ? "featured-work-logo-wrap--wide" : ""
                    }`}
                    style={{
                      backgroundColor: item.product_logo_bg || "#ffffff",
                    }}
                  >
                    <img
                      src={require(`../../assets/images/${logoFile}`)}
                      alt={item.product_name || item.company}
                      className="featured-work-logo"
                    />
                  </div>
                  <span
                    className="featured-work-metric"
                    style={{
                      backgroundColor: `${theme.highlight}77`,
                      color: theme.text,
                    }}
                  >
                    {item.impact}
                  </span>
                </div>

                <h3
                  className="featured-work-card-title"
                  style={{ color: theme.text }}
                >
                  {item.title}
                </h3>
                <p
                  className="featured-work-card-meta"
                  style={{ color: theme.secondaryText }}
                >
                  {item.company} · {item.role} · {item.duration}
                </p>
                <p
                  className="featured-work-card-summary"
                  style={{ color: theme.secondaryText }}
                >
                  {item.summary}
                </p>
                <div className="featured-work-card-actions">
                  <Link
                    to="/projects#corporate-projects"
                    className="featured-work-card-link"
                    style={{ color: theme.imageHighlight }}
                  >
                    Details →
                  </Link>
                  {item.product_url && (
                    <a
                      href={item.product_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="featured-work-card-link"
                      style={{ color: theme.text }}
                    >
                      {item.product_link_label || "Live Product ↗"}
                    </a>
                  )}
                </div>
              </article>
            );
          })}
        </div>

        {awards?.data?.length > 0 && (
          <div
            className="featured-awards-bar"
            style={{
              backgroundColor: `${theme.highlight}44`,
              borderColor: theme.highlight,
            }}
          >
            <span
              className="featured-awards-label"
              style={{ color: theme.text }}
            >
              Recognition:
            </span>
            <div className="featured-awards-list">
              {awards.data.map((award) =>
                award.certificate_link ? (
                  <a
                    key={award.title + award.subtitle}
                    href={award.certificate_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="featured-award-pill"
                    style={{
                      backgroundColor: theme.body,
                      color: theme.text,
                      borderColor: theme.highlight,
                    }}
                  >
                    <span role="img" aria-hidden="true">
                      🏆
                    </span>{" "}
                    {award.title} ({award.subtitle}) ↗
                  </a>
                ) : (
                  <span
                    key={award.title + award.subtitle}
                    className="featured-award-pill"
                    style={{
                      backgroundColor: theme.body,
                      color: theme.text,
                      borderColor: theme.highlight,
                    }}
                  >
                    <span role="img" aria-hidden="true">
                      🏆
                    </span>{" "}
                    {award.title} ({award.subtitle})
                  </span>
                )
              )}
            </div>
            <Link
              to="/experience"
              className="featured-awards-exp-link"
              style={{ color: theme.imageHighlight }}
            >
              Full Timeline →
            </Link>
          </div>
        )}
      </Fade>
    </section>
  );
}
