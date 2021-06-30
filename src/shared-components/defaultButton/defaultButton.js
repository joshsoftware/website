import React from "react";
import { Button } from "reactstrap";
import "./defaultButton.scss";

const DefaultButton = ({ buttonText, link }) => {
  return (
    <Button className="default-btn text-uppercase text-white d-block text-center font-weight-bold">
      <a href={link} target="_blank" rel="noopener noreferrer">
        {buttonText}
      </a>
    </Button>
  );
};

export default DefaultButton;
