import React from "react";
import { Button } from "reactstrap";
import "./linkButton.css";

const LinkButton = ({ className, buttonText, link, icon, onClick }) => {
  return (
    <>
      <Button
        color="link"
        className={`${className} cta-btn text-uppercase text-white text-center font-weight-bold`}
        onClick={onClick}
      >
        {buttonText}
      </Button>
    </>
  );
};

export default LinkButton;
