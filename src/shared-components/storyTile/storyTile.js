import React from "react";
import PropTypes from "prop-types";
import LinkButton from "../../shared-components/linkButton/linkButton";
import "./storyTile.css";

const StoryTile = ({ storyTitle, className }) => {
  return (
    <div
      className={`story-tile d-flex align-items-center justify-content-center position-relative ${className}`}
    >
      <img
        src={require("../../assets/images/revampImages/plus-icon.png")}
        alt="plus icon"
        className="mr-3"
      />
      <span className="text-white text-uppercase font-weight-bold">
        {storyTitle}
      </span>

      <div className="story-tile-hover-wrap">
        <img
          src={require("../../assets/images/revampImages/plus-icon.png")}
          alt="plus icon"
          className="mr-3"
        />
        <div>
          <span className="d-block mb-3 text-white text-uppercase font-weight-bold">
            {storyTitle}
          </span>
          <p className="text-white mb-3">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet,
            consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
            labore Lorem ipsum dolor sit amet…
          </p>
          <LinkButton buttonText="view" className="story-view-btn" />
        </div>
      </div>
    </div>
  );
};

StoryTile.propTypes = {
  className: PropTypes.string,
};

StoryTile.defaultProps = {
  className: "",
};

export default StoryTile;
