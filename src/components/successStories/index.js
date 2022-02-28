import React from "react";
import { Row, Col } from "reactstrap";
import { Route, Redirect } from "react-router-dom";

import * as routes from "../../routeConstants";
import StoryTile from "../../shared-components/storyTile/storyTile";
import SuccessStoriesLayout from "./successStoriesLayout.js";

const SuccessStories = (props) => {
  return (
    <>
      {/* <Route path={`${routes.SUCCESS_STORIES_URL}/:story`} component={SuccessStoriesLayout} />
      {props.location.pathname === routes.SUCCESS_STORIES_URL && <Redirect to={`${routes.SUCCESS_STORIES_URL}/ffd`} from={routes.SUCCESS_STORIES_URL} />} */}
      <div className="josh-content">
        <div className="container">
          <div className="story-tile-wrapper">
            <div className="story-tile-list d-flex flex-1">
              <div className="story-tile-item d-flex align-items-center justify-content-center">
                <StoryTile storyTitle="ENABLING STORIES OF FREEDOM" />
              </div>
              <div className="story-tile-item d-flex">
                <StoryTile storyTitle="brandscope" />
                <StoryTile storyTitle="STAR NETWORK" />
              </div>
              <div className="story-tile-item d-flex align-items-center justify-content-center">
                <StoryTile storyTitle="PROJECT 4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SuccessStories;
