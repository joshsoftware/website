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

  const carouselItems = items.map((item) => (
    <Link
      // to={`/technologies/${item.urlParam}`}
      to={`${routes.TECHNOLOGIES_URL}/${item.urlParam}`}
      className="d-flex align-items-center justify-content-center text-decoration-none"
    >
      <div className="technology-slider-item">
        <img
          src={require(`../../assets/images/revampImages/${item.logo}`)}
          alt={item.altText}
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
      urlParam: "android",
    },
    {
      logo: "ruby-with-circle@2x.png",
      altText: "ruby logo",
      urlParam: "ruby-on-rails",
    },
    {
      logo: "angular-with-circle@2x.png",
      altText: "angular logo",
      urlParam: "angular",
    },
    {
      logo: "ios-with-circle@2x.png",
      altText: "ios logo",
      urlParam: "ios",
    },
    {
      logo: "go-with-circle@2x.png",
      altText: "go logo",
      urlParam: "go",
    },
    {
      logo: "rails-with-circle@2x.png",
      altText: "rails logo",
      urlParam: "ruby-on-rails",
    },
    {
      logo: "react-with-circle@2x.png",
      altText: "react logo",
      urlParam: "react",
    },
  ],
};
export default TechnologySlider;
