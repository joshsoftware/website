import React from "react";
import { Link } from "react-router-dom";
import { isWebpSupported } from "react-image-webp/dist/utils";

import { CONTACT_US_URL } from "../../routeConstants.js";
import ContactUsForm from "../contact_us/contactUsForm.js";
import socialMedia from "../../assets/images/revampImages/social-media.png";
import socialMediaHover from "../../assets/images/revampImages/social-media-hover@2x.png";
const ContactUs = (props) => {
  const { socialIcons } = props;
  return (
    <>
      {/* <section
        id="contactSlide"
        className={`section-contact ${
          isWebpSupported() ? "webp-bg-contact" : "no-webp-bg-contact"
        }`}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="contact-wrap">
                <p>
                  Looking for an <br />
                  expert technical partner?
                </p>
                <div className="d-none d-lg-block">
                  <Link to={CONTACT_US_URL} className="btn btn-gray">
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`contact-banner ${
            isWebpSupported() ? "mb-webp-bg-contact" : "mb-no-webp-bg-contact"
          }`}
        ></div>
        <div className="contact-number">
          <div className="container">
            <h6>Call Us</h6>
            <p>
              <i className="align-middle icon-phone"></i>+91-7887889902
            </p>
          </div>
        </div>
      </section> */}
      <section className="contact-section">
        <div className="container">
          <h1 className="site-heading font-weight-bold">Get In Touch</h1>
          <div className="d-flex align-content-center justify-content-between flex-column flex-lg-row">
            <ContactUsForm />
            {/* <div className="social-media-wrap">
              <img
                src={socialMedia}
                alt="social media"
                className="social-media-icon"
              />
              <img
                src={socialMediaHover}
                alt="socail media hover"
                className="social-media-hover-icon"
              />
            </div> */}
            <div className="social-link-box position-relative d-flex justify-content-center">
              {socialIcons.map((socialItems, i) => {
                return (
                  <>
                    <a
                      href={socialItems.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${socialItems.class} d-flex align-items-center justify-content-center`}
                    >
                      <img
                        src={require(`../../assets/images/revampImages/${socialItems.icon}`)}
                        alt="social media icons"
                        className="social-media-icon"
                      />

                      <img
                        src={require(`../../assets/images/revampImages/${socialItems.iconhover}`)}
                        alt="social media"
                        className="social-media-icon-hover"
                      />
                    </a>
                  </>
                );
              })}
              <span className="hover-box position-absolute"></span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

ContactUs.defaultProps = {
  socialIcons: [
    {
      icon: "linkedin.svg",
      iconhover: "linkedin-white.svg",
      url: "http://www.linkedin.com/company/josh-software-private-limited",
      class: "icon-linked",
    },
    {
      icon: "instagram.svg",
      iconhover: "instagram-white.svg",
      url: "https://facebook.com/joshsoftware",
      class: "icon-insta",
    },
    {
      icon: "twitter.svg",
      iconhover: "twitter-white.svg",
      url: "https://twitter.com/joshsoftware",
      class: "icon-twitter",
    },
    {
      icon: "facebook.svg",
      iconhover: "facebook-white.svg",
      url: "https://facebook.com/joshsoftware",
      class: "icon-facebook",
    },
  ],
};
export default ContactUs;
