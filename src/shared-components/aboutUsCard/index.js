import React from "react";
import "./aboutUsCard.css";

const AboutUsCard = ({ link }) => {
  return (
    <>
      <div className="about-us-box">
        <div className="about-us-card-wrapper py-3">
          <h6 className="mb-3 font-weight-bold">About Us</h6>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet,
            consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
            laboreLorem ipsum dolor sit amet, consectetur adipisicing elit, sed
            do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet,
            consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
            labore.
          </p>
          {/* <DefaultButton buttonText="vIEW MORE" link="/about-us" /> */}
          {/* <DefaultButton buttonText="vIEW MORE" link={link} /> */}
        </div>
      </div>
    </>
  );
};

export default AboutUsCard;
