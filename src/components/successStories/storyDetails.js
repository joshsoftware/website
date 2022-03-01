import React, { Fragment } from "react";
import Media from "react-media";

import { H3Text } from "./successStoriesStyledComponents";
import TextImage from "./textImage";
import ImageText from "./imageText";
import MobileStoryView from "./mobileStoryView";
import stories from "./stories.js";

const StoryDetails = (props) => {
  const { match } = props;
  console.log(match.params);
  const selectedStory = match.params.storyId ? match.params.storyId : "ffd";
  const story = stories[selectedStory];
  return (
    <Media query="(max-width: 900px)" key={story.title}>
      {(matches) =>
        matches ? (
          <Fragment>
            <H3Text
              className="mt-5 text-center mb-5 text-uppercase"
              color="#0F0F0F"
            >
              {" "}
              {story.title}{" "}
            </H3Text>
            {story.contentKeys.map((key) => {
              return (
                <MobileStoryView
                  key={`mobile-${key}`}
                  text={story[key].text}
                  subHeading={story[key].subHeading}
                  image={story[key].image}
                />
              );
            })}
          </Fragment>
        ) : (
          <Fragment>
            <H3Text
              className="mt-5 text-center mb-5 text-uppercase"
              color="#CF4338"
            >
              {" "}
              {story.title}{" "}
            </H3Text>
            {story.contentKeys.map((key, index) => {
              if (index % 2 === 0) {
                return (
                  <TextImage
                    text={story[key].text}
                    key={key}
                    subHeading={story[key].subHeading}
                    image={story[key].image}
                  />
                );
              } else
                return (
                  <ImageText
                    text={story[key].text}
                    key={key}
                    subHeading={story[key].subHeading}
                    image={story[key].image}
                  />
                );
            })}
          </Fragment>
        )
      }
    </Media>
  );
};

export default StoryDetails;
