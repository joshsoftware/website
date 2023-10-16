import React from "react";
import LinkButton from "../linkButton/linkButton";
import { useHistory } from "react-router-dom";
import "./aboutUsCard.css";

const AboutUsCard = (props) => {
  let history = useHistory();

  function handleClick() {
    history.push("/about-us");
  }
  return (
    <>
      <div className="about-us-box">
        <h6 className="mb-2 font-weight-bold">About Us</h6>
        <p className="mb-3">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet,
          consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
          laboreLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet,
          consectetur adipisicing elit, sed do eiusmod tempor
        </p>
        <LinkButton buttonText="view more" onClick={handleClick} />
      </div>
    </>
  );
};

export default AboutUsCard;
