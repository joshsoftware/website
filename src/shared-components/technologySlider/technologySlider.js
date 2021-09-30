import React from "react";
import JoshCarousel from "../../components/home/carousel";
import { Link } from "react-router-dom";
import * as routes from "../../routeConstants.js";
import "./technologySlider.css";

const TechnologySlider = (props) => {
  const { items } = props;

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 4,
        },
      },
    ],
  };

  const carouselItems = items.map((Item) => (
    <Link
      to="/"
      className="d-flex align-items-center justify-content-center text-decoration-none"
    >
      <div className="technology-slider-item">
        <img
          src={require(`../../assets/images/revampImages/${Item.logo}`)}
          alt={Item.altText}
        />
      </div>
    </Link>
  ));

  return (
    <div className="technology-slider w-100">
      <JoshCarousel items={carouselItems} settings={settings}></JoshCarousel>
    </div>
  );
};

TechnologySlider.defaultProps = {
  items: [
    {
      logo: "android-with-circle@2x.png",
      altText: "android logo",
    },
    {
      logo: "ruby-with-circle@2x.png",
      altText: "ruby logo",
    },
    {
      logo: "angular-with-circle@2x.png",
      altText: "angular logo",
    },
    {
      logo: "ios-with-circle@2x.png",
      altText: "ios logo",
    },
    {
      logo: "go-with-circle@2x.png",
      altText: "go logo",
    },
    {
      logo: "rails-with-circle@2x.png",
      altText: "rails logo",
    },
    {
      logo: "react-with-circle@2x.png",
      altText: "react logo",
    },
    {
      logo: "ruby-with-circle@2x.png",
      altText: "ruby logo",
    },
  ],
};
export default TechnologySlider;
