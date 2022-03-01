import React from "react";
import { Route, Redirect } from "react-router-dom";
import * as routes from "../../routeConstants";
import SuccessStoriesLayout from "./successStoriesLayout.js";
const SuccessStories = (props) => {
  return (
    <>
      <Route
        path={`${routes.SUCCESS_STORIES_URL}`}
        component={SuccessStoriesLayout}
      />

      {/* {props.location.pathname === routes.SUCCESS_STORIES_URL && (
        <Redirect
          to={`${routes.SUCCESS_STORIES_URL}/ffd`}
          from={routes.SUCCESS_STORIES_URL}
        />
      )} */}
    </>
  );
};

export default SuccessStories;
