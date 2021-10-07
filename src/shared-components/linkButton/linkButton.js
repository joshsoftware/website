import React from "react";
import { Button } from "reactstrap";
import "./linkButton.css";

const LinkButton = ({ className, buttonText, link, icon }) => {
  return (
    <>
      <Button
        color="link"
        className={`${className} link-btn text-uppercase text-white text-center font-weight-bold`}
      >
        {buttonText}
      </Button>
    </>
  );
};

export default LinkButton;
