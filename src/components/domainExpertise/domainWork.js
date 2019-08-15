import React from 'react'
import { Row, Col } from 'reactstrap';

import GOLogo from "../../assets/images/domainExpertise/go.png";
import ProjectDetails from './projectDetails';
import JoshCarousel from "../../components/home/carousel.js";
import nextSVG from "../../assets/images/domainExpertise/next.svg";
import previousSVG from "../../assets/images/domainExpertise/previous.svg";

const DomainWork = (props) => {
  const { domainExpertiseData } = props;

  const techLogoMap = {
    go: GOLogo
  }

  const NextArrow = (props) => {
    const { onClick } = props;
    return <div onClick={onClick} className="carousel-control-next cursor-pointer">
      <img src={nextSVG} alt="next" />
      <span className="sr-only">Previous</span></div>
  }

  const PrevArrow = (props) => {
    const { onClick } = props;
    return <div onClick={onClick} className="carousel-control-prev cursor-pointer">
      <img src={previousSVG} alt="next" />
      <span className="sr-only">Previous</span></div>
  }

  const settings = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    autoplaySpeed: 5000,
    arrows: true,
    customPaging: function (i) {
      return (
        <li data-target="#carouselInnovation" data-slide-to="0" className="active"></li>
      );
    },
  };

  const items = domainExpertiseData.map(project => <ProjectDetails techLogoMap={techLogoMap} key={project.title} {...project} />)

  return (
    <Row className="justify-content-center m-auto w-90 card">
      <Col>
        <div className="pt-5 pb-5">
          <JoshCarousel items={items} settings={settings} />
        </div>
      </Col>
    </Row>
  )
}

DomainWork.defaultProps = {
  domainExpertiseData: []
}

export default DomainWork;
