import React from "react";
import { Button } from "reactstrap";
import "./defaultButton.scss";

const DefaultButton = ({ buttonText }) => {
  return (
    <Button className="default-btn text-uppercase text-white d-block text-center font-weight-bold">
      {buttonText}
    </Button>
  );
};

export default DefaultButton;
