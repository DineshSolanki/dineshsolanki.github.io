import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import CorporateProjectCard from "../../components/corporateProjectCard/CorporateProjectCard";
import GithubRepoCard from "../../components/githubRepoCard/GithubRepoCard";
import UpstreamContributionCard from "../../components/upstreamContributionCard/UpstreamContributionCard";
import PublicationCard from "../../components/publicationsCard/PublicationCard";
import Button from "../../components/button/Button";
import TopButton from "../../components/topButton/TopButton";
import { Fade } from "react-reveal";
import {
  greeting,
  projectsHeader,
  corporateProjectsHeader,
  corporateProjects,
  openSourceProjectsHeader,
  openSourceProjects,
  publicationsHeader,
  publications,
} from "../../portfolio.js";
import ProjectsData from "../../shared/opensource/projects.json";
import "./Projects.css";
import ProjectsImg from "./ProjectsImg";

class Projects extends Component {
  render() {
    const theme = this.props.theme;

    const pinnedRepos = ProjectsData.data || [];
    const seenNames = new Set(
      pinnedRepos.map((repo) => repo.name.toLowerCase())
    );
    const additionalRepos = (openSourceProjects.additionalRepos || []).filter(
      (repo) => !seenNames.has(repo.name.toLowerCase())
    );
    const allOpenSourceRepos = [...pinnedRepos, ...additionalRepos];

    return (
      <div className="projects-main">
        <Header theme={theme} />
        <div className="basic-projects">
          <Fade bottom duration={550} distance="24px">
            <div className="projects-heading-div">
              <div className="projects-heading-img-div">
                <ProjectsImg theme={theme} />
              </div>
              <div className="projects-heading-text-div">
                <h1
                  className="projects-heading-text"
                  style={{ color: theme.text }}
                >
                  {projectsHeader.title}
                </h1>
                <p
                  className="projects-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {projectsHeader["description"]}
                </p>
                <nav
                  className="projects-section-nav"
                  aria-label="Project categories"
                >
                  <a
                    href="#corporate-projects"
                    className="projects-nav-pill"
                    style={{
                      backgroundColor: theme.highlight,
                      color: theme.text,
                    }}
                  >
                    Corporate Projects ({corporateProjects.data.length})
                  </a>
                  <a
                    href="#open-source-projects"
                    className="projects-nav-pill"
                    style={{
                      backgroundColor: theme.highlight,
                      color: theme.text,
                    }}
                  >
                    Open Source ({allOpenSourceRepos.length})
                  </a>
                  {publications.data.length > 0 && (
                    <a
                      href="#publications"
                      className="projects-nav-pill"
                      style={{
                        backgroundColor: theme.highlight,
                        color: theme.text,
                      }}
                    >
                      Publications ({publications.data.length})
                    </a>
                  )}
                </nav>
              </div>
            </div>
          </Fade>
        </div>

        {/* Corporate Projects */}
        {corporateProjects.data.length > 0 && (
          <section
            id="corporate-projects"
            className="projects-section-block"
            aria-labelledby="corporate-projects-heading"
          >
            <div className="basic-projects">
              <Fade bottom duration={550} distance="20px">
                <div className="section-heading-div">
                  <h2
                    id="corporate-projects-heading"
                    className="section-heading-text"
                    style={{ color: theme.text }}
                  >
                    {corporateProjectsHeader.title}
                  </h2>
                  <p
                    className="projects-header-detail-text subTitle"
                    style={{ color: theme.secondaryText }}
                  >
                    {corporateProjectsHeader.description}
                  </p>
                </div>
              </Fade>
            </div>
            <div className="corporate-projects-grid">
              {corporateProjects.data.map((project) => (
                <CorporateProjectCard
                  key={project.id}
                  project={project}
                  theme={theme}
                />
              ))}
            </div>
          </section>
        )}

        {/* Open Source Projects */}
        <section
          id="open-source-projects"
          className="projects-section-block"
          aria-labelledby="open-source-projects-heading"
        >
          <div className="basic-projects">
            <Fade bottom duration={550} distance="20px">
              <div className="section-heading-div">
                <h2
                  id="open-source-projects-heading"
                  className="section-heading-text"
                  style={{ color: theme.text }}
                >
                  {openSourceProjectsHeader.title}
                </h2>
                <p
                  className="projects-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {openSourceProjectsHeader.description}
                </p>
              </div>
            </Fade>
          </div>

          <div className="repo-cards-div-main">
            {allOpenSourceRepos.map((repo) => (
              <GithubRepoCard
                key={repo.id}
                repo={repo}
                category={openSourceProjects.repoCategories?.[repo.name]}
                theme={theme}
              />
            ))}
          </div>

          {openSourceProjects.upstreamContributions &&
            openSourceProjects.upstreamContributions.length > 0 && (
              <div className="upstream-contributions-wrap">
                <Fade bottom duration={550} distance="20px">
                  <div className="upstream-heading-div">
                    <h3
                      className="upstream-heading-text"
                      style={{ color: theme.text }}
                    >
                      {openSourceProjectsHeader.contributionsTitle}
                    </h3>
                    <p
                      className="upstream-subheading-text subTitle"
                      style={{ color: theme.secondaryText }}
                    >
                      {openSourceProjectsHeader.contributionsDescription}
                    </p>
                  </div>
                </Fade>
                <div className="upstream-cards-grid">
                  {openSourceProjects.upstreamContributions.map(
                    (contribution) => (
                      <UpstreamContributionCard
                        key={contribution.id}
                        contribution={contribution}
                        theme={theme}
                      />
                    )
                  )}
                </div>
              </div>
            )}

          <div className="opensource-cta-row">
            <Button
              text={"More Projects on GitHub"}
              className="project-button"
              href={greeting.githubProfile}
              newTab={true}
              theme={theme}
            />
            <Link
              to="/opensource"
              className="opensource-activity-link"
              style={{
                color: theme.text,
                borderColor: theme.text,
              }}
            >
              View PRs &amp; Activity →
            </Link>
          </div>
        </section>

        {/* Publications */}
        {publications.data.length > 0 ? (
          <section
            id="publications"
            className="projects-section-block"
            aria-labelledby="publications-heading"
          >
            <div className="basic-projects">
              <Fade bottom duration={550} distance="20px">
                <div className="publications-heading-div">
                  <div className="publications-heading-text-div">
                    <h2
                      id="publications-heading"
                      className="publications-heading-text"
                      style={{ color: theme.text }}
                    >
                      {publicationsHeader.title}
                    </h2>
                    <p
                      className="projects-header-detail-text subTitle"
                      style={{ color: theme.secondaryText }}
                    >
                      {publicationsHeader["description"]}
                    </p>
                  </div>
                </div>
              </Fade>
            </div>

            <div className="repo-cards-div-main">
              {publications.data.map((pub) => {
                return <PublicationCard key={pub.id} pub={pub} theme={theme} />;
              })}
            </div>
          </section>
        ) : null}

        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Projects;
