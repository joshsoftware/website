import React from "react";
import PropTypes from "prop-types";
import "./mainBanner.css";

const MainBanner = ({
  pageCaption,
  startTagLine,
  tagText,
  endTagLine,
  bannerClassName,
}) => {
  return (
    <div className={`main-banner ${bannerClassName}`}>
      {startTagLine && endTagLine && tagText && (
        <p className="mb-0">
          {startTagLine}
          <span className="font-weight-bold text-uppercase mx-1">
            {tagText}
          </span>
          {endTagLine}
        </p>
      )}
      {pageCaption && (
        <h1 className="pagecaption font-weight-bold text-white text-capitalize mb-0">
          {pageCaption}
        </h1>
      )}
    </div>
  );
};

MainBanner.propTypes = {
  bannerClassName: PropTypes.string,
};

MainBanner.defaultProps = {
  bannerClassName: "",
};

export default MainBanner;
