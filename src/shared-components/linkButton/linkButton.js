import React from "react";
import { Button } from "reactstrap";
import "./linkButton.css";

const LinkButton = ({ className, buttonText, onClick }) => {
  return (
    <>
      <Button
        color="link"
        className={`${className} link-btn text-uppercase text-white text-center font-weight-bold`}
        onClick={onClick}
      >
        {buttonText}
      </Button>
    </>
  );
};

export default LinkButton;
