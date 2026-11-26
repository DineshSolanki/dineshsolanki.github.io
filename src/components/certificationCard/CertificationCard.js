import React, { Component } from "react";
import "./CertificationCard.css";
import { Fade } from "react-reveal";

class CertificationCard extends Component {
  renderVisual(certificate) {
    if (certificate.logo_path) {
      return (
        <img
          className="logo_img"
          src={require(`../../assets/images/${certificate.logo_path}`)}
          alt={certificate.alt_name}
        />
      );
    }
    if (certificate.iconifyClass) {
      return (
        <span
          className="iconify cert-iconify"
          data-icon={certificate.iconifyClass}
          data-inline="false"
          aria-hidden="true"
        />
      );
    }
    return (
      <span className="cert-badge-monogram" aria-hidden="true">
        {certificate.badgeText || certificate.alt_name}
      </span>
    );
  }

  render() {
    const certificate = this.props.certificate;
    const theme = this.props.theme;
    const hasLink = Boolean(certificate.certificate_link);

    const headerVisual = (
      <div
        className="cert-header"
        style={{ backgroundColor: certificate.color_code || theme.headerColor }}
      >
        {this.renderVisual(certificate)}
      </div>
    );

    return (
      <Fade bottom duration={550} distance="20px">
        <article
          className="cert-card"
          style={{
            backgroundColor: theme.body,
            borderColor: theme.highlight,
          }}
        >
          <div className="content">
            {hasLink ? (
              <a
                href={certificate.certificate_link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Verify ${certificate.title} credential`}
              >
                <div className="content-overlay"></div>
                {headerVisual}
                <div className="content-details fadeIn-top">
                  <h3 className="content-title" style={{ color: "#ffffff" }}>
                    Verify Credential ↗
                  </h3>
                </div>
              </a>
            ) : (
              headerVisual
            )}
          </div>
          <div className="cert-body">
            <h2 className="cert-body-title" style={{ color: theme.text }}>
              {certificate.title}
            </h2>
            <h3
              className="cert-body-subtitle"
              style={{ color: theme.secondaryText }}
            >
              {certificate.subtitle}
            </h3>
            {(certificate.issued || certificate.credentialId) && (
              <p
                className="cert-body-meta"
                style={{ color: theme.secondaryText }}
              >
                {certificate.issued ? `Issued ${certificate.issued}` : ""}
                {certificate.issued && certificate.credentialId ? " · " : ""}
                {certificate.credentialId
                  ? `ID ${certificate.credentialId}`
                  : ""}
              </p>
            )}
            {hasLink && (
              <a
                href={certificate.certificate_link}
                target="_blank"
                rel="noopener noreferrer"
                className="cert-verify-link"
                style={{ color: theme.imageHighlight }}
              >
                Verify Credential ↗
              </a>
            )}
          </div>
        </article>
      </Fade>
    );
  }
}

export default CertificationCard;
