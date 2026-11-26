import React from "react";
import "./PublicationCard.css";
import { Fade } from "react-reveal";

export default function PublicationCard({ pub, theme }) {
  return (
    <a
      className="publication-card-div"
      href={pub.url}
      target="_blank"
      rel="noopener noreferrer"
      style={{ backgroundColor: theme.highlight }}
    >
      <Fade bottom duration={550} distance="20px">
        <div className="publication-card-inner" key={pub.id}>
          {pub.tags && pub.tags.length > 0 && (
            <div className="publication-tags">
              {pub.tags.map((tag) => (
                <span
                  key={tag}
                  className="publication-tag"
                  style={{
                    color: theme.text,
                    backgroundColor: theme.body,
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
          <div className="publication-name-div">
            <p className="publication-name" style={{ color: theme.text }}>
              {pub.name}
            </p>
          </div>
          <p className="publication-description" style={{ color: theme.text }}>
            {pub.description}
          </p>
          <div className="publication-details">
            <p
              className="publication-creation-date subTitle"
              style={{ color: theme.secondaryText }}
            >
              Published on {pub.createdAt.split("T")[0]}
            </p>
            <span
              className="publication-read-more"
              style={{ color: theme.imageHighlight }}
            >
              Read article ↗
            </span>
          </div>
        </div>
      </Fade>
    </a>
  );
}
