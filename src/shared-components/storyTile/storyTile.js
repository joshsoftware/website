import React from "react";
import PropTypes from "prop-types";
import LinkButton from "../../shared-components/linkButton/linkButton";
import "./storyTile.css";
import { Link } from "react-router-dom";
import { SUCCESS_STORIES_URL } from "../../routeConstants.js";

const StoryTile = ({ storyTitle, className, storyId, storyDesc }) => {
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
          className="mr-3 mt-2"
        />
        <div>
          <span className="d-block mb-3 text-white text-uppercase font-weight-bold">
            {storyTitle}
          </span>
          <p className="text-white text-truncate-multi-line -four-line overflow-hidden mb-3">
            {storyDesc}
          </p>
          <div className="story-view-btn-wrap position-relative d-flex w-100">
            <LinkButton
              buttonText="view"
              className="story-view-btn"
              link={`${SUCCESS_STORIES_URL}/${storyId}`}
            />
            <Link
              className="story-view-btn"
              to={`${SUCCESS_STORIES_URL}/${storyId}`}
            >
              View
            </Link>
          </div>
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
