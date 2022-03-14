import React from "react";
import { Link } from "react-router-dom";
import FbIcon from "../../assets/images/home/facebook-icon.png";
import FbIconHover from "../../assets/images/home/facebook-hover.png";
import TwitterIcon from "../../assets/images/home/twitter-icon.png";
import TwitterIconHover from "../../assets/images/home/twitter-hover.png";
import LinkedIn from "../../assets/images/home/linkedin-icon.png";
import LinkedInHover from "../../assets/images/home/linkedin-hover.png";
import GithubIcon from "../../assets/images/home/github-icon.png";
import GithubIconHover from "../../assets/images/home/github-hover.png";
import logo from "../../assets/images/revampImages/josh-logo-white-3x.png";

const Footer = () => {
  return (
    <>
      {/* <footer className="josh-footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="info-wrap">
                <h4>Josh Software</h4>
                <p>
                  Josh stands for enthusiasm and passion. We believe Programming
                  is an Art and build Innovative Web Based Applications on an
                  Open Source framework for our world-wide clientele.
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="connect-wrap">
                <p>Connect with us</p>
                <div className="social-media-links">
                  <a
                    className="fb-icon"
                    href="https://facebook.com/joshsoftware"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={FbIcon}
                      alt="Facebook Icon"
                      className="social-media-icon"
                    />
                    <img
                      src={FbIconHover}
                      alt="Facebook Icon"
                      className="social-media-icon-hover"
                    />
                  </a>
                  <a
                    href="https://twitter.com/joshsoftware"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={TwitterIcon}
                      alt="Twitter Icon"
                      className="social-media-icon"
                    />
                    <img
                      src={TwitterIconHover}
                      alt="Twitter Icon"
                      className="social-media-icon-hover"
                    />
                  </a>
                  <a
                    href="http://www.linkedin.com/company/josh-software-private-limited"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={LinkedIn}
                      alt="LinkedIn Icon"
                      className="social-media-icon"
                    />
                    <img
                      src={LinkedInHover}
                      alt="LinkedIn Icon"
                      className="social-media-icon-hover"
                    />
                  </a>
                  <a
                    href="https://github.com/joshsoftware"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={GithubIcon}
                      alt="Github Icon"
                      className="social-media-icon"
                    />
                    <img
                      src={GithubIconHover}
                      alt="Github Icon"
                      className="social-media-icon-hover"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="email-wrap">
            <p>Email</p>
            <a href="mailto:info@joshsoftware.com">info@joshsoftware.com</a>
          </div>
          <div className="footer-nav-wrap">
            <nav className="nav footer-nav">
              <Link to="/" className="nav-link">
                Home
              </Link>
              <Link to="services" className="nav-link">
                Services
              </Link>
              <Link to="services#ourWork" className="nav-link">
                Our Work
              </Link>
              <Link to="/innovations" className="nav-link">
                Innovation
              </Link>
              <Link to="technologies" className="nav-link">
                Technologies
              </Link> */}
      {/* <Link to="/success_stories" className="nav-link">Success Stories</Link> */}
      {/* <Link to="/domain_expertise" className="nav-link">
                INDUSTRIES
              </Link>
              <Link to="/testimonials" className="nav-link">
                Testimonials
              </Link>
            </nav>
            <nav className="nav footer-nav">
              <Link to="/about-us" className="nav-link">
                Company
              </Link> */}
      {/* <a href="open-source.html" className="nav-link">Open Source</a> */}
      {/* <a
                href="https://joshsoftware.com/media-coverage"
                className="nav-link"
              >
                In News
              </a> */}
      {/* <Link to="/domain_expertise" className="nav-link">Domain Expertise</Link> */}
      {/* <Link to="/team" className="nav-link">Our Team</Link> */}

      {/* <a
                href="https://blog.joshsoftware.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-link"
              >
                Blog
              </a>

              <a
                href="https://careers.joshsoftware.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-link"
              >
                Career
              </a>
              <Link to="/contact_us" className="nav-link">
                Contact Us
              </Link>
            </nav>
          </div>
          <p className="text-policy text-center mb-3">
            <a
              href="https://s3.ap-south-1.amazonaws.com/josh-website/PrivacyPolicyWebsite.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Privacy Policy
            </a>
          </p>
          <p className="text-copyright text-center mb-3">
            Copyright © 2007 - 2021 Josh Software Pvt. Ltd.
          </p>
        </div>
      </footer> */}
      <footer className="josh-footer-section">
        <div className="container">
          <Link className="footer-logo d-block mb-2" to="/">
            <img src={logo} alt="Josh Software" />
          </Link>
          <div className="footer-details d-flex justify-content-between position-relative">
            <div className="josh-info">
              <p className="text-white text-uppercase mb-3 font-weight-bold">
                About JOSH
              </p>
              <p className="text-white mb-3">
                Josh stands for enthusiasm and passion. We believe Programming
                is an Art and build Innovative Web Based Applications on an Open
                Source framework for our world-wide clientele.
              </p>
              <p className="text-uppercase mb-0 font-weight-bold">
                <a
                  href="https://s3.ap-south-1.amazonaws.com/josh-website/PrivacyPolicyWebsite.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white"
                >
                  View Privacy Policy
                </a>
              </p>
            </div>
            <div className="footer-links-wrap d-flex flex-1">
              <div className="footer-links-item">
                <Link
                  to="technologies"
                  className="nav-link text-white text-uppercase font-weight-bold"
                >
                  Technologies
                </Link>
                <Link
                  to="/domain_expertise"
                  className="nav-link text-white text-uppercase font-weight-bold"
                >
                  INDUSTRIES
                </Link>
                <Link
                  to="/success_stories"
                  className="nav-link text-white text-uppercase font-weight-bold"
                >
                  Success Stories
                </Link>
                <a
                  href="https://blog.joshsoftware.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-link text-white text-uppercase font-weight-bold"
                >
                  Blog
                </a>
              </div>
              <div className="footer-links-item">
                <Link
                  to="/talks"
                  className="nav-link text-white text-uppercase font-weight-bold"
                >
                  Talks
                </Link>
                <Link
                  to="/publications"
                  className="nav-link text-white text-uppercase font-weight-bold"
                >
                  PUBLICATIONS
                </Link>
                <Link
                  to="/media-coverage"
                  className="nav-link text-white text-uppercase font-weight-bold"
                >
                  MEDIA COVERAGE
                </Link>
                <Link
                  to="/white-papers"
                  className="nav-link text-white text-uppercase font-weight-bold"
                >
                  OUR WHITE PAPERS
                </Link>
              </div>
              <div className="footer-links-item">
                <Link
                  to="/about-us"
                  className="nav-link text-white text-uppercase font-weight-bold"
                >
                  Company
                </Link>
                <a
                  href="https://careers.joshsoftware.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-link text-white text-uppercase font-weight-bold"
                >
                  Career
                </a>
                <Link
                  to="/innovations"
                  className="nav-link text-white text-uppercase font-weight-bold"
                >
                  Innovation
                </Link>
                <Link
                  to="/contact_us"
                  className="nav-link text-white text-uppercase font-weight-bold"
                >
                  Contact Us
                </Link>
                <Link
                  to="/testimonials"
                  className="nav-link text-white text-uppercase font-weight-bold"
                >
                  Testimonials
                </Link>
              </div>
            </div>
            <div className="copyright-wrap position-absolute">
              <p className="text-center mb-0">
                Copyright © 2007 - 2021 Josh Software Pvt. Ltd.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
