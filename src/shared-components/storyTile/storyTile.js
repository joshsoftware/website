import React from "react";
import PropTypes from "prop-types";
import "./storyTile.css";

const StoryTile = ({ storyTitle, className }) => {
  return (
    <div
      className={`story-tile d-flex align-items-center justify-content-center ${className}`}
    >
      <img
        src={require("../../assets/images/revampImages/plus-icon.png")}
        alt="plus icon"
        className="mr-3"
      />
      <span className="text-white text-uppercase font-weight-bold">
        {storyTitle}
      </span>
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
