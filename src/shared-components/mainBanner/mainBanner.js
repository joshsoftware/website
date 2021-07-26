import React from "react";
import "./mainBanner.css";

const MainBanner = ({
  className,
  mainBannerTitle,
  middleText,
  endText,
  startText,
}) => {
  return (
    <div
      className={`main-banner-wrap ${className} d-flex justify-content-center flex-column align-items-center`}
    >
      <h6 className="text-white">
        {startText}
        <span className="font-weight-bold text-uppercase mx-2">
          {middleText}
        </span>
        {endText}
      </h6>
      <h1 className="font-weight-bold text-white text-capitalize mb-0">
        {mainBannerTitle}
      </h1>
    </div>
  );
};

export default MainBanner;
