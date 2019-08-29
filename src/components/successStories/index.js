import React, { Fragment } from "react";
import Media from "react-media";
import { Route, Redirect, Link } from 'react-router-dom';

import { H3Text } from './successStoriesStyledComponents';
import TextImage from './textImage';
import ImageText from './imageText';
import MobileStoryView from './mobileStoryView';
import * as routes from '../../routeConstants';
import SuccessStoriesLayout from "./successStoriesLayout.js";

const SuccessStories = (props) => {
  return (
    <>
      <Route path={`${routes.SUCCESS_STORIES_URL}/:story`} component={SuccessStoriesLayout} />
      {props.location.pathname === routes.SUCCESS_STORIES_URL && <Redirect to={`${routes.SUCCESS_STORIES_URL}/ffd`} from={routes.SUCCESS_STORIES_URL} />}
    </>
  )
}

export default SuccessStories;
