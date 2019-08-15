import React from 'react'
import JoshCarousel from '../home/carousel';
import { Row, Col } from "reactstrap";

export default function Innovation() {

  const NextArrow = (props) => {
    const { onClick } = props;
    return <div onClick={onClick} className="carousel-control-prev cursor-pointer">
      <span aria-hidden="true" className="carousel-control-prev-icon"></span>
      <span className="sr-only">Previous</span></div>
  }

  const PrevArrow = (props) => {
    const { onClick } = props;
    return <div onClick={onClick} className="carousel-control-next cursor-pointer">
      <span aria-hidden="true" className="carousel-control-next-icon"></span>
      <span className="sr-only">Next</span></div>
  }
  const settings = {
    dots: true,
    // dotsClass: "d-none",
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 5000,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    // customPaging: function (i) {
    //   return (
    //     <div data-target="#carouselInnovation" data-slide-to="0" className="active"></div>
    //   );
    // },
  };


  const Items = (
    [
      <div className="carousel-item active">
        <img src="http://new.joshsoftware.com:8080/images/innovation-cc.png" alt="First slide" className="img-fluid img-desktop" />
        <img src="http://new.joshsoftware.com:8080/images/innovation-cc-mobile.png" alt="First slide" className="img-fluid img-mobile" />
        <div className="info-wrap">
          <p>CodeCuriosity is a platform that encourages contributions to open source. Everyone is rewarded for their efforts, no matter how big or small they are. Our aim is to make open source contribution a habit!</p>
          <p>We call this our anti-startup. “How to lose money consistently and be proud of it!” :D</p>
        </div>
      </div>,

      <div className="carousel-item">
        <img src="http://new.joshsoftware.com:8080/images/innovation-kimaya.png" alt="Second slide" className="img-fluid img-desktop" />
        <img src="http://new.joshsoftware.com:8080/images/innovation-kimaya-mobile.png" alt="Second slide" className="img-fluid img-mobile" />
        <div className="info-wrap">
          <p>Kimaya-TPN is a cutting-edge, pilot-tested application, built with the aim of making nutritional calculations fully automated, error free and fast. Kimaya-TPN is being used by KEM-NICU &amp; alike, to do calculations using the Hyperalimentation Worksheet for preparing TPN</p>
        </div>
      </div>,
      <div className="carousel-item">
        <img src="http://new.joshsoftware.com:8080/images/innovation-hunger.png" alt="Second slide" className="img-fluid img-desktop" />
        <img src="http://new.joshsoftware.com:8080/images/innovation-hunger-mobile.png" alt="Second slide" className="img-fluid img-mobile" />
        <div className="info-wrap">
          <p>Hunger Terminal is an application developed in order to reduce scrub food wastage where company caters food for its employees.</p>
        </div>
      </div>
    ]
  );
  return (
    <section className="section-innovation section-content">
      <div className="container">
        <h1 className="display-4 p-5">Innovation</h1>
        <Row className="justify-content-around m-auto w-75" id="carouselInnovation">
          <Col>

            <JoshCarousel items={Items} settings={settings} />
          </Col>
        </Row>
      </div>
    </section>
  )
}
