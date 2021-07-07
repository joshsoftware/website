import React from "react";
import { Button } from "reactstrap";
import "./defaultButton.scss";

const DefaultButton = ({ buttonText, link, icon }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="default-btn-link"
    >
      <Button className="default-btn text-uppercase text-white d-block text-center font-weight-bold">
        {icon && <img src={icon} alt="book icon" className="mr-2" />}
        {buttonText}
      </Button>
    </a>
  );
};

export default DefaultButton;
