import React from "react";
import Image from "react-image-webp";
import Slider from "react-slick";
import * as routes from "../../routeConstants.js";
import "./about-us.css";
import CtaButton from "../../shared-components/ctaButton/ctaButton";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const linkListItem = [
  {
    linkTitle: "Josh Leadership",
    link: routes.OUR_TEAM_URL,
    linkClassName: "-leadership",
  },
  {
    linkTitle: "Contact Us",
    link: routes.CONTACT_US_URL,
    linkClassName: "-contact-us",
  },
];

const settings = {
  dots: false,
  arrows: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        slidesToShow: 1.2,
        centerPadding: "20px",
      },
    },
  ],
};

const sliderSettings = {
  dots: true,
  arrows: false,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 2000,
  // centerPadding: "40px",
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        arrows: false,
        centerMode: true,
        slidesToShow: 4,
        centerPadding: "8px",
      },
    },
    {
      breakpoint: 992,
      settings: {
        arrows: false,
        centerMode: true,
        slidesToShow: 3.2,
        // centerPadding: "20px",
      },
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        slidesToShow: 1.2,
        // centerPadding: "40px",
      },
    },
  ],
};

const activityData = [
  {
    title: "Josh Talks",
    imgSrc: "josh-talk@2x.jpeg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut laboreLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut laboreLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore",
  },
  {
    title: "Dev Hacks",
    imgSrc: "dev-hacks@2x.jpeg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut laboreLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut laboreLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore",
  },
  {
    title: "Open Source",
    imgSrc: "open-source@2x.jpeg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut laboreLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut laboreLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore",
  },

  {
    title: "Life Coach",
    imgSrc: "life-coach@2x.jpeg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut laboreLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut laboreLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore",
  },
  {
    title: "Debates",
    imgSrc: "debates@2x.jpeg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut laboreLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut laboreLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore",
  },
];

const galleryItems = [
  {
    imgSrc: "galleria-sample@2x.jpeg",
  },
  {
    imgSrc: "galleria-sample@2x.jpeg",
  },
  {
    imgSrc: "galleria-sample@2x.jpeg",
  },
  {
    imgSrc: "galleria-sample@2x.jpeg",
  },
  {
    imgSrc: "galleria-sample@2x.jpeg",
  },
  {
    imgSrc: "galleria-sample@2x.jpeg",
  },
  {
    imgSrc: "galleria-sample@2x.jpeg",
  },
  {
    imgSrc: "galleria-sample@2x.jpeg",
  },
  {
    imgSrc: "galleria-sample@2x.jpeg",
  },
  {
    imgSrc: "galleria-sample@2x.jpeg",
  },
];
const AboutUs = () => {
  return (
    //
    <section className="josh-content">
      <div className="about-us-section">
        <div className="container">
          <div className="about-us-top-section">
            <h2 className="font-weight-bold text-center">About us</h2>
            <div className="tag-line-box text-center">
              <span className="mb-0">
                Our name stands for passion. And, passion for technology is who
                we are.
              </span>
            </div>

            <p>
              The success of Josh Software is a direct reflection of the
              magnificent team behind it! Their passion and enthusiasm have been
              the greatest driving factors and are responsible for every
              milestone of the brand. Here’s to every individual who has been
              part of this wonderful journey!
            </p>

            <div className="programs-slider-wrapper">
              <Slider {...settings}>
                {activityData.map((slide, i) => (
                  <div
                    key={i}
                    className="slider-item d-flex align-items-center justify-content-center flex-column text-center"
                  >
                    <h3 className="font-weight-bold mb-3 text-truncate overflow-hidden">
                      {slide.title}
                    </h3>
                    <img
                      src={require(`../../assets/images/revampImages/${slide.imgSrc}`)}
                      alt="program img"
                    />
                    <p className="mb-2 text-truncate-multi-line -four-line overflow-hidden">
                      {slide.description}
                    </p>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>

        <div className="gallery-slider-wrapper">
          <h2 className="text-center font-weight-bold">Galleria</h2>

          <Slider {...sliderSettings}>
            {galleryItems.map((slide, i) => (
              <div
                key={i}
                className="gallery-item d-flex align-items-center justify-content-center flex-column text-center"
              >
                <img
                  src={require(`../../assets/images/revampImages/${slide.imgSrc}`)}
                  alt="gallery img"
                />
              </div>
            ))}
          </Slider>
        </div>

        <CtaButton linkListItem={linkListItem} />
      </div>
    </section>
  );
};

export default AboutUs;
