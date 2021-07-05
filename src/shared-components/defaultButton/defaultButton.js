import React from "react";
import { Button } from "reactstrap";
import "./defaultButton.scss";

const DefaultButton = ({ buttonText, link, icon }) => {
  return (
    <Button className="default-btn text-uppercase text-white d-block text-center font-weight-bold">
      <a href={link} target="_blank" rel="noopener noreferrer">
        {icon && <img src={icon} alt="book icon" className="mr-2" />}
        {buttonText}
      </a>
    </Button>
  );
};

export default DefaultButton;
