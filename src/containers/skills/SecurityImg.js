import React, { Component } from "react";

// Theme-aware illustration for the "Security & IAM" skill section:
// a shield with a keyhole, flanked by an identity token and a key.
export default class SecurityImg extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1164.07"
        height="555.93"
        viewBox="0 0 700 480"
        role="img"
        aria-label="Illustration of a shield with a keyhole representing security and identity"
      >
        <defs>
          <linearGradient id="secShieldGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor={theme.imageHighlight} stopOpacity="0.95" />
            <stop offset="1" stopColor={theme.imageHighlight} stopOpacity="0.6" />
          </linearGradient>
        </defs>

        {/* ground shadow */}
        <ellipse
          cx="350"
          cy="430"
          rx="240"
          ry="26"
          fill={theme.imageHighlight}
          opacity="0.13"
        />

        {/* orbit rings */}
        <circle
          cx="350"
          cy="215"
          r="196"
          fill="none"
          stroke={theme.imageHighlight}
          strokeOpacity="0.18"
          strokeWidth="2"
          strokeDasharray="10 14"
        />
        <circle
          cx="350"
          cy="215"
          r="164"
          fill="none"
          stroke={theme.imageHighlight}
          strokeOpacity="0.12"
          strokeWidth="2"
        />

        {/* shield body */}
        <path
          d="M350 55 L470 103 V226 c0 78-52 133-120 158 -68-25-120-80-120-158 V103 Z"
          fill="url(#secShieldGrad)"
        />
        {/* shield inner face */}
        <path
          d="M350 82 L446 120 V226 c0 63-41 108-96 130 -55-22-96-67-96-130 V120 Z"
          fill={theme.body}
          opacity="0.92"
        />

        {/* keyhole */}
        <circle cx="350" cy="205" r="30" fill={theme.imageHighlight} />
        <path
          d="M338 226 h24 l7 58 h-38 Z"
          fill={theme.imageHighlight}
        />
        <circle cx="350" cy="205" r="12" fill={theme.body} />

        {/* verified check badge */}
        <circle
          cx="470"
          cy="330"
          r="40"
          fill={theme.imageHighlight}
          opacity="0.9"
        />
        <path
          d="M452 330 l12 13 24-26"
          fill="none"
          stroke={theme.body}
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* identity token card */}
        <g transform="translate(120 286) rotate(-8)">
          <rect
            width="150"
            height="96"
            rx="12"
            fill={theme.imageHighlight}
            opacity="0.9"
          />
          <circle cx="38" cy="38" r="17" fill={theme.body} opacity="0.95" />
          <path
            d="M20 70 c0-11 8-19 18-19 s18 8 18 19 Z"
            fill={theme.body}
            opacity="0.95"
          />
          <rect x="72" y="28" width="60" height="9" rx="4.5" fill={theme.body} opacity="0.8" />
          <rect x="72" y="47" width="48" height="9" rx="4.5" fill={theme.body} opacity="0.6" />
          <rect x="72" y="66" width="54" height="9" rx="4.5" fill={theme.body} opacity="0.45" />
        </g>

        {/* key */}
        <g transform="translate(496 118) rotate(24)">
          <circle
            cx="26"
            cy="26"
            r="24"
            fill="none"
            stroke={theme.imageHighlight}
            strokeWidth="11"
          />
          <path
            d="M26 50 v72"
            stroke={theme.imageHighlight}
            strokeWidth="11"
            strokeLinecap="round"
          />
          <path
            d="M26 92 h22 M26 112 h16"
            stroke={theme.imageHighlight}
            strokeWidth="11"
            strokeLinecap="round"
          />
        </g>

        {/* floating dots */}
        <circle cx="176" cy="128" r="9" fill={theme.imageHighlight} opacity="0.5" />
        <circle cx="548" cy="252" r="7" fill={theme.imageHighlight} opacity="0.4" />
        <circle cx="214" cy="212" r="5" fill={theme.imageHighlight} opacity="0.35" />
      </svg>
    );
  }
}
