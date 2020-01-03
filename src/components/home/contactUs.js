import React from 'react';
import { Link } from "react-router-dom";
import {isWebpSupported} from 'react-image-webp/dist/utils';

import { CONTACT_US_URL } from "../../routeConstants.js";

const ContactUs = () => {
  return (
    <section id="contactSlide" className={`section-contact ${isWebpSupported() ? 'webp-bg-contact' : 'no-webp-bg-contact'}`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12">
            <div className="contact-wrap">
              <p>Looking for an <br />expert technical partner?</p>
              <div className="d-none d-lg-block">
                <Link to={CONTACT_US_URL} className="btn btn-gray">Contact Us</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`contact-banner ${isWebpSupported() ? 'mb-webp-bg-contact' : 'mb-no-webp-bg-contact'}`}></div>
      <div className="contact-number">
        <div className="container">
          <h6>Call Us</h6>
          <p><i className="align-middle icon-phone"></i>+91-7887889902</p>
        </div>
      </div>
    </section>
  )
}

export default ContactUs
