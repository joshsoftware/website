import React from "react";
import LinkButton from "../linkButton/linkButton";
import "./aboutUsCard.css";

const AboutUsCard = ({ link }) => {
  return (
    <>
      <div className="about-us-box p-3">
        <h6 className="mb-3 font-weight-bold">About Us</h6>
        <p className="mb-0">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet,
          consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
          laboreLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet,
          consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
          labore.
        </p>
        <LinkButton buttonText="view more" />
      </div>
    </>
  );
};

export default AboutUsCard;
