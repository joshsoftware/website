/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";

import { Card, CardBody } from "reactstrap";
import ContactUsForm from "./contactUsForm.js";
import wave from "../../assets/images/revampImages/wave@2x.png";
import locationIcon from "../../assets/images/revampImages/location-icon@2x.png";
import webIcon from "../../assets/images/revampImages/web-icon@2x.png";
import emailIcon from "../../assets/images/revampImages/email-icon@2x.png";
import "./contact-us.css";

const ContactUs = () => {
  return (
    <section className="josh-content">
      <div className="contact-us-section d-flex">
        <div className="contact-form-content d-flex flex-column">
          <h3 className="font-weight-bold">Contact us</h3>
          <p className="hello-text-box">
            <img src={wave} alt="waving hand" className="mr-3" />
            Hello, let's get in Touch
          </p>
          <ContactUsForm />
        </div>
        <div className="contact-details py-3 d-flex flex-column">
          <Card className="contact-card">
            <CardBody>
              <img
                src={locationIcon}
                alt="location icon"
                className="position-absolute"
              />
              <h6 className="ofc-heading font-weight-bold mb-2">
                India Office
              </h6>
              <h3 className="mb-3">JOSH SOFTWARE PVT. LTD.</h3>
              <p className="mb-2">
                2nd Floor, I-Space, IT Park, Mumbai Pune Bypass Rd Bavdhan,
                Pune, Maharashtra 411021
              </p>
              <span className="font-weight-bold">+91-7887889902</span>
            </CardBody>
          </Card>
          <Card className="contact-card">
            <CardBody>
              <img
                src={locationIcon}
                alt="location icon"
                className="position-absolute"
              />
              <h6 className="ofc-heading font-weight-bold mb-2">US Office</h6>
              <h3 className="mb-3">JOSH SOFTWARE INC.</h3>
              <p className="mb-2">
                7300 Lone Star Drive, Suite C200, Plano, TX 75024
              </p>
              <span className="font-weight-bold">+1 (469) 300-1564</span>
            </CardBody>
          </Card>
          <Card className="contact-card">
            <CardBody>
              <img
                src={emailIcon}
                alt="location icon"
                className="position-absolute"
              />
              <p className="mb-0 email-text font-weight-bold">
                info@joshsoftware.com
              </p>
            </CardBody>
          </Card>
          <Card className="contact-card">
            <CardBody>
              <img
                src={webIcon}
                alt="location icon"
                className="position-absolute"
              />
              <ul className="list-unstyled pl-0 mb-0 social-media-list-wrap d-flex">
                <li className="social-media-list-item">
                  <a
                    href="https://www.instagram.com/josh.software"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="-insta d-flex"
                  >
                    <div className="media-img"></div>
                  </a>
                </li>
                <li className="social-media-list-item">
                  <a
                    href="https://twitter.com/joshsoftware"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="-twitter d-flex"
                  >
                    <div className="media-img"></div>
                  </a>
                </li>
                <li className="social-media-list-item">
                  <a
                    href="https://facebook.com/joshsoftware"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="-facebook d-flex"
                  >
                    <div className="media-img"></div>
                  </a>
                </li>
                <li className="social-media-list-item">
                  <a
                    href="http://www.linkedin.com/company/josh-software-private-limited"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="-linkedin d-flex"
                  >
                    <div className="media-img"></div>
                  </a>
                </li>
              </ul>
            </CardBody>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
