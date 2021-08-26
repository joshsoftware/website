import React from "react";
import DefaultButton from "../defaultButton/defaultButton";
import "./aboutUsCard.css";

const AboutUsCard = (props) => {
  return (
    <div className="about-us-box px-3 py-4">
      <h6 className="mb-3 font-weight-bold">About Us</h6>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur
        adipisicing elit, sed do eiusmod tempor incididunt ut laboreLorem ipsum
        dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
        incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipisicing
        elit, sed do eiusmod tempor incididunt ut labore.
      </p>
      <DefaultButton buttonText="vIEW MORE" link="#" />
    </div>
  );
};

export default AboutUsCard;
