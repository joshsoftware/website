import React from 'react';

import { Row, Col } from "reactstrap";
import { Link } from 'react-router-dom';

import stories from "./stories.js";
import { PinkDiv } from './successStoriesStyledComponents';
import JoshCarousel from '../home/carousel';
import previousSvg from "../../assets/images/previous.svg";
import nextSvg from "../../assets/images/next.svg";
import StoryDetails from "./storyDetails.js";

const SuccessStoriesLayout = (props) => {
  const { match, storyTitles } = props;

  const carouseItems = storyTitles.map(item => {
    return (
      <div className="border-right border-muted text-center" key={item.name}>
        <Col>
          <Link to={`/success_stories/${item.slug}`} className="text-dark"> {item.name} </Link>
        </Col>
      </div>
    )
  })

  const NextArrow = (props) => {
    const { className, onClick } = props;
    return (
      <img
        src={nextSvg}
        className={className}
        onClick={onClick}
        alt="Next"
      />
    );
  }

  const PrevArrow = (props) => {
    const { className, onClick } = props;
    return (
      <img
        src={previousSvg}
        className={className}
        onClick={onClick}
        alt="Previous"
      />
    );
  }

  const currentSlideIndex = storyTitles.findIndex(story => story.slug == props.match.params.story)
  const initialSlide = currentSlideIndex > -1 ? currentSlideIndex : 0

  const settings = {
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    initialSlide: initialSlide,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    afterChange: (event) => {
      props.history.push(`/success_stories/${storyTitles[event].slug}`)
    },
    responsive: [{
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: initialSlide,
        arrows: false,
        dots: true,
        afterChange: (event) => {
          props.history.push(`/success_stories/${storyTitles[event].slug}`)
        },
      }
    },
    {
      breakpoint: 330,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: initialSlide,
        arrows: false,
        dots: true

      }
    }]
  }

  const selectedStory = match.params.story ? match.params.story : "ffd";

  return (
    <>
      <PinkDiv />
      <Row className="w-75 m-auto justify-content-around text-danger pt-2">
        <Col>
          <JoshCarousel items={carouseItems} settings={settings} />
        </Col>
      </Row>
      <StoryDetails {...props.stories[selectedStory]} />
    </>
  )
}

SuccessStoriesLayout.defaultProps = {
  storyTitles: [
    { name: "Freedom from Diabetes", slug: "ffd" },
    { name: "BrandScope", slug: "brandscope" },
    { name: "Star Network", slug: "star" }
  ],

  stories: stories
}

export default SuccessStoriesLayout;