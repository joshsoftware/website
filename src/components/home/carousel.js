import React, { Component } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Circle } from "./homeStyledComponents.js";

export default class JoshCarousel extends Component {
  render() {
    const { items, settings } = this.props;

    return (
      <Slider {...settings} className="testst">
        {
          items.map((item, index) => {
            return <div key={index}>{item}</div>
          })
        }
      </Slider>
    );
  }
}

JoshCarousel.defaultProps = {
  settings: {
    dots: true,
    centerMode: true,
    infinite: true,
    speed: 500,
    centerPadding: "10px",
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    dotsClass: "slick-dots slick-thumb custom-dots",
    // variableWidth: true,
    customPaging: function (i) {
      return (
        <Circle />
      );
    },
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }
}