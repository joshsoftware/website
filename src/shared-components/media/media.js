import React from "react";
import { Button } from "reactstrap";
import DefaultButton from "../defaultButton/defaultButton";
import "./media.css";

const MediaItem = ({
  url,
  topic,
  speaker,
  event,
  date,
  videoId,
  mediaCoverageTitle,
  mediaCoverageDesc,
}) => {
  const MediaTile = (props) => (
    <div className="media-content d-flex align-items-start">
      <div className="profile-icon mr-3"></div>
      <div className="media-content-info">
        <a
          href={`https://www.youtube.com/watch?v=${videoId}`}
          target="_blank"
          rel="noopener noreferrer"
          className="font-weight-bold mb-2"
        >
          Day 1 - {speaker} - {topic}
        </a>

        <p className="mb-0">{topic}</p>
        <p className="mb-0">{event}</p>
        <p className="mb-0">
          By {speaker} ({date})
        </p>
      </div>
    </div>
  );

  // const MediaCoverageTile = (props) => (
  //   <div className="media-coverage-content">
  //     <h5>{mediaCoverageTitle}</h5>
  //     <p>{mediaCoverageDesc}</p>
  //     <DefaultButton buttonText={"know More"} />
  //   </div>
  // );

  return (
    <div className="media-item d-flex flex-column">
      <div className="media-frame d-flex flex-column">
        <iframe
          src={url}
          width="100%"
          title={topic}
          frameBorder="0"
          allowFullScreen
        />
        <MediaTile />
      </div>
    </div>
  );
};

export default MediaItem;
