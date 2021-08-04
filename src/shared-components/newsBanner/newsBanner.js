import React from "react";
import PropTypes from "prop-types";

import { Container } from "../../core-components";
import "./newsBanner.css";

const NewsBanner = ({ caption, className, bannerClassName }) => {
  return (
    <div className={`banner-wrapper position-relative ${className}`}>
      <Container>
        <div className={`banner ${bannerClassName}`}>
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
  bannerClassName: PropTypes.string,
};

NewsBanner.defaultProps = {
  className: "",
  bannerClassName: "",
};

export default NewsBanner;
