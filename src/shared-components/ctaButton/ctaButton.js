import React from "react";
import { Button } from "reactstrap";
import "./ctaButton.css";

const CtaButton = ({ className, buttonText, link, icon }) => {
  return (
    <>
      <Button
        color="link"
        className={`${className} cta-btn text-uppercase text-white text-center font-weight-bold`}
      >
        {buttonText}
      </Button>
    </>
  );
};

export default CtaButton;
