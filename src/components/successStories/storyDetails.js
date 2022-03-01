import React, { Fragment } from "react";
import Media from "react-media";

import { H3Text } from "./successStoriesStyledComponents";
import TextImage from "./textImage";
import ImageText from "./imageText";
import MobileStoryView from "./mobileStoryView";
import stories from "./stories.js";
import { Col, Row } from "reactstrap";
import StorySummary from "./storySummary";
import StoryFeatures from "./storyFeatures";

const StoryDetails = (props) => {
  const { match } = props;
  console.log(match.params);
  const selectedStory = match.params.storyId ? match.params.storyId : "ffd";
  const story = stories[selectedStory];
  return (
    // <Media query="(max-width: 900px)" key={story.title}>
    //   {(matches) =>
    //     matches ? (
    //       <Fragment>
    //         <H3Text
    //           className="mt-5 text-center mb-5 text-uppercase"
    //           color="#0F0F0F"
    //         >
    //           {" "}
    //           {story.title}{" "}
    //         </H3Text>
    //         {story.contentKeys.map((key) => {
    //           return (
    //             <MobileStoryView
    //               key={`mobile-${key}`}
    //               text={story[key].text}
    //               subHeading={story[key].subHeading}
    //               image={story[key].image}
    //             />
    //           );
    //         })}
    //       </Fragment>
    //     ) : (
    //       <Fragment>
    //         <H3Text
    //           className="mt-5 text-center mb-5 text-uppercase"
    //           color="#CF4338"
    //         >
    //           {" "}
    //           {story.title}{" "}
    //         </H3Text>
    //         {story.contentKeys.map((key, index) => {
    //           if (index % 2 === 0) {
    //             return (
    //               <TextImage
    //                 text={story[key].text}
    //                 key={key}
    //                 subHeading={story[key].subHeading}
    //                 image={story[key].image}
    //               />
    //             );
    //           } else
    //             return (
    //               <ImageText
    //                 text={story[key].text}
    //                 key={key}
    //                 subHeading={story[key].subHeading}
    //                 image={story[key].image}
    //               />
    //             );
    //         })}
    //       </Fragment>
    //     )
    //   }
    // </Media>
    <div className="josh-content">
      <div className="container">
        <Row>
          <Col lg={5}>
            <StorySummary
              title={story.title}
              subHeading={story.summary.text}
              storyImg={story.summary.image}
              imageAlt={story.summary.subHeading}
            />
          </Col>
          <Col lg={7}>
            {story.contentKeys.map((key, index) => {
              return (
                <StoryFeatures
                  featureTitle={story[key].subHeading}
                  details={story[key].text}
                  image={story[key].image}
                  imageAlt={story[key].subHeading}
                />
              );
            })}
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default StoryDetails;
