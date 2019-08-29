import React, { Fragment } from "react";
import Media from "react-media";

import { H3Text } from './successStoriesStyledComponents';
import TextImage from './textImage';
import ImageText from './imageText';
import MobileStoryView from './mobileStoryView';

const StoryDetails = (props) => {
  return (
    <Media query="(max-width: 900px)" key={props.title}>
      {matches =>
        matches ? (
          <Fragment>
            <H3Text className="mt-5 text-center mb-5 text-uppercase" color="#0F0F0F"> {props.title} </H3Text>
            {props.contentKeys.map((key) => {
              return <MobileStoryView
                key={`mobile-${key}`}
                text={props[key].text}
                subHeading={props[key].subHeading} image={props[key].image} />
            })}
          </Fragment>
        ) : (
            <Fragment>
              <H3Text className="mt-5 text-center mb-5 text-uppercase" color="#CF4338"> {props.title} </H3Text>
              {props.contentKeys.map((key, index) => {
                if (index % 2 === 0) {
                  return <TextImage text={props[key].text} key={key}
                    subHeading={props[key].subHeading} image={props[key].image} />
                }
                else
                  return <ImageText text={props[key].text}
                    key={key}
                    subHeading={props[key].subHeading} image={props[key].image} />
              })}
            </Fragment>
          )
      }
    </Media>
  )
}

export default StoryDetails;