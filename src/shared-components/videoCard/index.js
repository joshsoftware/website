import React from "react";

import { Card } from "../../core-components";
import "./videoCard.css";

const VideoCard = ({ url, topic, speaker, event, date, videoId }) => {
  const VideoDetails = () => (
    <Card body className="video-details d-flex align-items-start">
      <a
        href={`https://www.youtube.com/watch?v=${videoId}`}
        target="_blank"
        rel="noopener noreferrer"
        className="font-weight-bold mb-2"
      >
        {speaker} - {topic}
      </a>

      <p className="mb-0">{topic}</p>
      <p className="mb-0">{event}</p>
      <p className="mb-0">
        By {speaker} ({date})
      </p>
    </Card>
  );

  return (
    <div className="video-card d-flex flex-column">
      <div className="video-frame position-relative">
        <iframe
          src={url}
          width="100%"
          height="100%"
          title={topic}
          frameBorder="0"
          allowFullScreen
        />
      </div>
      <VideoDetails />
    </div>
  );
};

export default VideoCard;
