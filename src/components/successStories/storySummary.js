import React from "react";
import "./success-story.css";

const StorySummary = (props) => {
  return (
    <div className="story-content-summary">
      <h6 className="text-uppercase mb-4">SUCCESS STORIES oF</h6>
      <img
        src={require(`../../assets/images/successStories/${props.storyImg}.png`)}
        alt={props.imageAlt}
        className="mb-4"
      />
      <h3 className="mb-3">{props.title}</h3>
      <p className="mb-0">{props.subHeading}</p>
    </div>
  );
};

export default StorySummary;
