import React from "react";
import "./industryMediaCard.css";

const IndustryMediaCard = ({ mediaLogo, mediaDesc, mediaTitle }) => {
  return (
    <>
      <div className="media industry-media-card">
        <img src={mediaLogo} className="mr-3 media-img" alt="media img" />
        <div className="media-body">
          <h6 className="mt-0 font-weight-bold">{mediaTitle}</h6>
          <p className="overflow-hidden">{mediaDesc}</p>
        </div>
      </div>
    </>
  );
};

export default IndustryMediaCard;
