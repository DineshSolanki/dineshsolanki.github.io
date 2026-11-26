import React, { Component } from "react";
import "./Header.css";
import { Fade } from "react-reveal";
import { NavLink, Link } from "react-router-dom";
import { greeting, settings } from "../../portfolio.js";
import SeoHeader from "../seoHeader/SeoHeader";

const onMouseEnter = (event, color) => {
  const el = event.currentTarget;
  el.style.backgroundColor = color;
};

const onMouseOut = (event, activeColor) => {
  const el = event.currentTarget;
  el.style.backgroundColor = el.classList.contains("header-nav-active")
    ? activeColor
    : "transparent";
};

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { menuOpen: false };
  }

  closeMenu = () => {
    this.setState({ menuOpen: false });
  };

  toggleMenu = (event) => {
    this.setState({ menuOpen: event.target.checked });
  };

  render() {
    const theme = this.props.theme;
    const link = settings.isSplash ? "/splash" : "/home";
    const activeBg = `${theme.highlight}77`;
    const navItems = [
      { to: "/home", label: "Home" },
      { to: "/experience", label: "Experience" },
      { to: "/projects", label: "Projects" },
      { to: "/education", label: "Education" },
      { to: "/contact", label: "Contact" },
    ];

    return (
      <Fade top duration={500} distance="16px">
        <SeoHeader />
        <div>
          <header className="header">
            <NavLink
              to={link}
              tag={Link}
              className="logo"
              onClick={this.closeMenu}
            >
              <span style={{ color: theme.text }}> &lt;</span>
              <span className="logo-name" style={{ color: theme.text }}>
                {greeting.logo_name}
              </span>
              <span style={{ color: theme.text }}>/&gt;</span>
            </NavLink>
            <input
              className="menu-btn"
              type="checkbox"
              id="menu-btn"
              checked={this.state.menuOpen}
              onChange={this.toggleMenu}
            />
            <label
              className="menu-icon"
              htmlFor="menu-btn"
              aria-label="Toggle navigation menu"
            >
              <span className="navicon" style={{ color: theme.text }}></span>
            </label>
            <ul className="menu" style={{ backgroundColor: theme.body }}>
              {navItems.map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    tag={Link}
                    activeClassName="header-nav-active"
                    activeStyle={{
                      fontWeight: "bold",
                      backgroundColor: activeBg,
                    }}
                    style={{ color: theme.text }}
                    onClick={this.closeMenu}
                    onMouseEnter={(event) =>
                      onMouseEnter(event, theme.highlight)
                    }
                    onMouseOut={(event) => onMouseOut(event, activeBg)}
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
              <li className="header-resume-item">
                <a
                  className="header-resume-cta"
                  href={greeting.resumeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={this.closeMenu}
                  style={{
                    color: theme.body,
                    backgroundColor: theme.text,
                    borderColor: theme.text,
                  }}
                >
                  Résumé ↗
                </a>
              </li>
            </ul>
          </header>
        </div>
      </Fade>
    );
  }
}
export default Header;
