import React from "react";
import PropTypes from "prop-types";

import { Container } from "../../core-components";
import "./newsBanner.css";

const NewsBanner = ({ caption, className }) => {
  return (
    <div className={`banner-wrapper position-relative ${className}`}>
      <Container>
        <div className="banner-wrap text-center">
          {caption && (
            <h1 className="caption font-weight-bold text-white text-capitalize mb-0">
              {caption}
            </h1>
          )}
        </div>
      </Container>
    </div>
  );
};

NewsBanner.propTypes = {
  className: PropTypes.string,
};

NewsBanner.defaultProps = {
  className: "",
};

export default NewsBanner;
