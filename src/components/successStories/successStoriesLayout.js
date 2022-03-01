import React from "react";

import { Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

import stories from "./stories.js";
import { PinkDiv } from "./successStoriesStyledComponents";
import JoshCarousel from "../home/carousel";
import previousSvg from "../../assets/images/previous.svg";
import nextSvg from "../../assets/images/next.svg";
import StoryDetails from "./storyDetails.js";
import StoryTile from "../../shared-components/storyTile/storyTile.js";

const SuccessStoriesLayout = (props) => {
  const { match, storyTitles } = props;

  // const carouseItems = storyTitles.map((item) => {
  //   return (
  //     <div className="border-right border-muted text-center" key={item.name}>
  //       <Col>
  //         <Link to={`/success_stories/${item.slug}`} className="text-dark">
  //           {" "}
  //           {item.name}{" "}
  //         </Link>
  //       </Col>
  //     </div>
  //   );
  // });

  // const NextArrow = (props) => {
  //   const { className, onClick } = props;
  //   return (
  //     <img src={nextSvg} className={className} onClick={onClick} alt="Next" />
  //   );
  // };

  // const PrevArrow = (props) => {
  //   const { className, onClick } = props;
  //   return (
  //     <img
  //       src={previousSvg}
  //       className={className}
  //       onClick={onClick}
  //       alt="Previous"
  //     />
  //   );
  // };

  // const currentSlideIndex = storyTitles.findIndex(
  //   (story) => story.slug === props.match.params.story
  // );
  // const initialSlide = currentSlideIndex > -1 ? currentSlideIndex : 0;

  // const settings = {
  //   dots: false,
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   arrows: true,
  //   initialSlide: initialSlide,
  //   nextArrow: <NextArrow />,
  //   prevArrow: <PrevArrow />,
  //   afterChange: (event) => {
  //     props.history.push(`/success_stories/${storyTitles[event].slug}`);
  //   },
  //   responsive: [
  //     {
  //       breakpoint: 600,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //         initialSlide: initialSlide,
  //         arrows: false,
  //         dots: true,
  //         afterChange: (event) => {
  //           props.history.push(`/success_stories/${storyTitles[event].slug}`);
  //         },
  //       },
  //     },
  //     {
  //       breakpoint: 330,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //         initialSlide: initialSlide,
  //         arrows: false,
  //         dots: true,
  //       },
  //     },
  //   ],
  // };

  // const selectedStory = match.params.story ? match.params.story : "ffd";

  return (
    <>
      {/* <PinkDiv />
      <Row className="w-75 m-auto justify-content-around text-danger pt-2">
        <Col>
          <JoshCarousel items={carouseItems} settings={settings} />
        </Col>
      </Row>
      <StoryDetails {...props.stories[selectedStory]} /> */}
      <div className="josh-content">
        <div className="container">
          <div className="story-tile-wrapper">
            <div className="story-tile-list d-flex flex-1">
              <div className="story-tile-item d-flex align-items-center justify-content-center">
                <StoryTile
                  storyTitle={props.ffd.name}
                  storyDesc={props.ffd.description}
                  storyId="ffd"
                />
              </div>
              <div className="story-tile-item d-flex">
                <StoryTile
                  storyTitle={props.brandscope.name}
                  storyDesc={props.brandscope.description}
                  storyId="brandscope"
                />
                <StoryTile
                  storyTitle={props.star.name}
                  storyDesc={props.star.description}
                  storyId="star"
                />
              </div>
              <div className="story-tile-item d-flex align-items-center justify-content-center">
                <StoryTile
                  storyTitle={props.project.name}
                  storyDesc={props.project.description}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

SuccessStoriesLayout.defaultProps = {
  // storyTitles: [
  //   { name: "Freedom from Diabetes", slug: "ffd" },
  //   { name: "BrandScope", slug: "brandscope" },
  //   { name: "Star Network", slug: "star" },
  // ],

  ffd: {
    name: "Freedom from Diabetes",
    description:
      "The International Diabetes Federation projects that the number of diabetes patients in the South East Asian region will double by 2045. Currently, 8.8% of the Indian adult population suffers from diabetes. This is cause for extreme concern.</strong></p><p>Traditionally incurable, diabetes is a deeply rooted health concern making millions miserable. But when the best of tech and medicine come together, there&#39;s hope for radical improvement. Freedom From Diabetes (FFD), launched in 2013 by Dr. Pramod Tripathi has a singular aim: not just cure diabetes, but eliminate it completely. The program has 18,000 diabetes-free success stories to its credit and this number is only growing with each passing year. With a steadily increasing number of medical practitioners on board, FFD, headquartered in Pune, now has a network in more than 10 Indian cities.",
  },
  brandscope: {
    name: "Brandscope",
    description:
      "The International Diabetes Federation projects that the number of diabetes patients in the South East Asian region will double by 2045. Currently, 8.8% of the Indian adult population suffers from diabetes. This is cause for extreme concern.</strong></p><p>Traditionally incurable, diabetes is a deeply rooted health concern making millions miserable. But when the best of tech and medicine come together, there&#39;s hope for radical improvement. Freedom From Diabetes (FFD), launched in 2013 by Dr. Pramod Tripathi has a singular aim: not just cure diabetes, but eliminate it completely. The program has 18,000 diabetes-free success stories to its credit and this number is only growing with each passing year. With a steadily increasing number of medical practitioners on board, FFD, headquartered in Pune, now has a network in more than 10 Indian cities.",
  },
  star: {
    name: "Star Network",
    description:
      "The International Diabetes Federation projects that the number of diabetes patients in the South East Asian region will double by 2045. Currently, 8.8% of the Indian adult population suffers from diabetes. This is cause for extreme concern.</strong></p><p>Traditionally incurable, diabetes is a deeply rooted health concern making millions miserable. But when the best of tech and medicine come together, there&#39;s hope for radical improvement. Freedom From Diabetes (FFD), launched in 2013 by Dr. Pramod Tripathi has a singular aim: not just cure diabetes, but eliminate it completely. The program has 18,000 diabetes-free success stories to its credit and this number is only growing with each passing year. With a steadily increasing number of medical practitioners on board, FFD, headquartered in Pune, now has a network in more than 10 Indian cities.",
  },
  project: {
    name: "Project 4",
    description:
      "The International Diabetes Federation projects that the number of diabetes patients in the South East Asian region will double by 2045. Currently, 8.8% of the Indian adult population suffers from diabetes. This is cause for extreme concern.</strong></p><p>Traditionally incurable, diabetes is a deeply rooted health concern making millions miserable. But when the best of tech and medicine come together, there&#39;s hope for radical improvement. Freedom From Diabetes (FFD), launched in 2013 by Dr. Pramod Tripathi has a singular aim: not just cure diabetes, but eliminate it completely. The program has 18,000 diabetes-free success stories to its credit and this number is only growing with each passing year. With a steadily increasing number of medical practitioners on board, FFD, headquartered in Pune, now has a network in more than 10 Indian cities.",
  },

  stories: stories,
};

export default SuccessStoriesLayout;
