import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import BlogsImg from "./BlogsImg";
import AddressImg from "./AddressImg";
import { Fade } from "react-reveal";
import "./ContactComponent.css";
import { greeting, contactPageData } from "../../portfolio.js";

const ContactData = contactPageData.contactSection;
const blogSection = contactPageData.blogSection;
const addressSection = contactPageData.addressSection;
const phoneSection = contactPageData.phoneSection;

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = { copied: false };
  }

  componentWillUnmount() {
    if (this.copyTimer) {
      clearTimeout(this.copyTimer);
    }
  }

  handleCopyEmail = () => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(greeting.email).catch(() => {});
    }
    this.setState({ copied: true });
    if (this.copyTimer) {
      clearTimeout(this.copyTimer);
    }
    this.copyTimer = setTimeout(() => this.setState({ copied: false }), 2200);
  };

  render() {
    const theme = this.props.theme;
    return (
      <div className="contact-main">
        <Header theme={theme} />
        <div className="basic-contact">
          <Fade bottom duration={550} distance="24px">
            <div className="contact-heading-div">
              <div className="contact-heading-img-div">
                <img
                  src={require(`../../assets/images/${ContactData["profile_image_path"]}`)}
                  alt="Dinesh Solanki"
                />
              </div>
              <div className="contact-heading-text-div">
                <h1
                  className="contact-heading-text"
                  style={{ color: theme.text }}
                >
                  {ContactData["title"]}
                </h1>
                <p
                  className="contact-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {ContactData["description"]}
                </p>
                <SocialMedia theme={theme} />
                <div className="resume-btn-div">
                  <Button
                    text="See My Resume"
                    newTab={true}
                    href={greeting.resumeLink}
                    theme={theme}
                  />
                  <button
                    type="button"
                    onClick={this.handleCopyEmail}
                    className="contact-copy-email-btn"
                    style={{
                      color: theme.text,
                      borderColor: theme.highlight,
                      backgroundColor: `${theme.highlight}55`,
                    }}
                  >
                    {this.state.copied
                      ? "Email Copied ✓"
                      : `Copy ${greeting.email}`}
                  </button>
                </div>
              </div>
            </div>
          </Fade>
          <Fade bottom duration={550} distance="24px">
            <div className="blog-heading-div">
              <div className="blog-heading-text-div">
                <h1 className="blog-heading-text" style={{ color: theme.text }}>
                  {blogSection["title"]}
                </h1>
                <p
                  className="blog-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {blogSection["subtitle"]}
                </p>
                <div className="blogsite-btn-div">
                  <Button
                    text="Visit My Blogsite"
                    newTab={true}
                    href={blogSection.link}
                    theme={theme}
                  />
                </div>
              </div>
              <div className="blog-heading-img-div">
                <BlogsImg theme={theme} />
              </div>
            </div>
          </Fade>
          <Fade bottom duration={550} distance="24px">
            <div className="address-heading-div">
              <div className="contact-heading-img-div">
                <AddressImg theme={theme} />
              </div>
              <div className="address-heading-text-div">
                <h1
                  className="address-heading-text"
                  style={{ color: theme.text }}
                >
                  {addressSection["title"]}
                </h1>
                <p
                  className="contact-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {addressSection["subtitle"]}
                </p>
                {phoneSection["title"] && (
                  <h1
                    className="address-heading-text"
                    style={{ color: theme.text }}
                  >
                    {phoneSection["title"]}
                  </h1>
                )}
                {phoneSection["subtitle"] && (
                  <p
                    className="contact-header-detail-text subTitle"
                    style={{ color: theme.secondaryText }}
                  >
                    {phoneSection["subtitle"]}
                  </p>
                )}
                {addressSection.location_map_link && (
                  <div className="address-btn-div">
                    <Button
                      text="Visit on Google Maps"
                      newTab={true}
                      href={addressSection.location_map_link}
                      theme={theme}
                    />
                  </div>
                )}
              </div>
            </div>
          </Fade>
        </div>
        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Contact;
