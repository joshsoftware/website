import React from "react";

import { Card } from "../../core-components";
import { DefaultButton } from "../../shared-components";
import "./mediaCard.scss";

const MediaCard = ({ photo, headline, bodycopy, date, url }) => {
  const MediaDetails = () => (
    <Card body className="media-details d-flex align-items-start">
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="font-weight-bold mb-2"
      >
        {headline}
      </a>
      <p className="mb-2">{bodycopy}</p>
      <p className="mb-2">{date}</p>
      <DefaultButton buttonText="Know More" link={url} className="mt-auto" />
    </Card>
  );

  return (
    <div className="media-card d-flex flex-column">
      <div className="media-frame position-relative overflow-hidden">
        <div className="img-box w-100 h-100 overflow-hidden">
          <img src={photo} alt={headline} />
        </div>
      </div>
      <MediaDetails />
    </div>
  );
};

export default MediaCard;
