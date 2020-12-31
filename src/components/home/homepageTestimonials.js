import React, { Component } from "react";
import { Heading1 } from "./homeStyledComponents.js";
import Slider from "react-slick";


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      cssEase: "linear"
    };
    return (
      <section id="clientsSlide" className="section-home d-flex align-items-center">
        <div className="container">
          <div className="homepage-slider">
            <Heading1>What We Do</Heading1>
            <Slider {...settings}>
              <div class="slider-item d-flex align-items-center justify-content-center flex-column text-center">
                <h3> Sample Name</h3>
                <p className="mb-2">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,</p>
                <h6>Company, Designation</h6>
              </div>
              <div class="slider-item d-flex align-items-center justify-content-center flex-column text-center">  
                <h3> Sample Name2</h3>
                <p className="mb-2">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,</p>
                <h6>Company, Designation</h6>
              </div>
              <div class="slider-item d-flex align-items-center justify-content-center flex-column text-center">  
                <h3> Sample Name3</h3>
                <p className="mb-2">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,</p>
                <h6>Company, Designation</h6>
              </div>
            </Slider>
          </div>
        </div>
      </section>
    );
  }
}