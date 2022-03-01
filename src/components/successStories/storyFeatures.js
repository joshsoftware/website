import React from "react";
import "./success-story.css";

const StoryFeatures = (props) => {
  return (
    <div className="story-features">
      <div className="features-title-wrap position-relative d-flex mb-3">
        <span className="text-uppercase px-3 py-1 bg-white">
          {props.featureTitle}
        </span>
      </div>
      <div className="features-details d-flex">
        <p className="mb-0 px-4">{props.details}</p>
        <img
          src={require(`../../assets/images/successStories/${props.image}.png`)}
          alt={props.imageAlt}
        />
      </div>
    </div>
  );
};

export default StoryFeatures;
