import React, { Component } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class JoshCarousel extends Component {
  render() {
    const { items, settings } = this.props;

    return (
      <Slider {...settings}>
        {
          items.map(item => {
            return item
          })
        }
      </Slider>
    );
  }
}