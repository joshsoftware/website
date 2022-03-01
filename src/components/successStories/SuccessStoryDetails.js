import React from "react";
import { Route } from "react-router-dom";
import * as routes from "../../routeConstants";
import StoryDetails from "./storyDetails";

const SuccessStories = (props) => {
  return (
    <>
      <Route
        path={`${routes.SUCCESS_STORIES_URL}/:storyId`}
        component={StoryDetails}
      />
    </>
  );
};

export default SuccessStories;
