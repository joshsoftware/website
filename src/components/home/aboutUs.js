import React from "react";
import { DefaultButton } from "../../shared-components";
const AboutUs = (props) => {
  return (
    <section className="about-section text-center">
      <div className="container">
        <h1 className="site-heading font-weight-bold">About Us</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet,
          consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
          labore sed do eiusmod tempor incididunt ut labore sed do eiusmod
          tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur
          adipisicing elit, sed do eiusmod tempor incididunt ut labore Lorem
          ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incididunt ut labore sed do eiusmod tempor incididunt ut labore
          sed do eiusmod tempor incididunt ut labore
        </p>
        <DefaultButton
          buttonText="View More"
          className="d-flex justify-content-center"
          link="/about-us"
        />
      </div>
    </section>
  );
};

export default AboutUs;
