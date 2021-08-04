import React from "react";
import { Row, Col } from "reactstrap";

import ProjectDetails from "./projectDetails";
import JoshCarousel from "../../components/home/carousel.js";
import nextSVG from "../../assets/images/domainExpertise/next.svg";
import previousSVG from "../../assets/images/domainExpertise/previous.svg";

const ProjectWork = (props) => {
  const { domainExpertiseData, selectedDomain } = props;

  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        onClick={onClick}
        className="carousel-control-next cursor-pointer bottom-94p"
      >
        <img src={nextSVG} alt="next" className="pl-md-5" />
        <span className="sr-only">Previous</span>
      </div>
    );
  };

  const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        onClick={onClick}
        className="carousel-control-prev cursor-pointer bottom-94p"
      >
        <img src={previousSVG} alt="next" className="pr-md-5" />
        <span className="sr-only">Previous</span>
      </div>
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    dotsClass: "slick-dots bottom-100",
  };

  const items = domainExpertiseData.map((project) => (
    <ProjectDetails
      key={project.title}
      {...project}
      selectedDomain={selectedDomain}
    />
  ));

  return (
    <Row className="justify-content-center m-auto w-90 card">
      <Col>
        <div className="pt-5 pb-5">
          <JoshCarousel items={items} settings={settings} />
        </div>
      </Col>
    </Row>
  );
};

ProjectWork.defaultProps = {
  selectedDomain: "rubyonrails",
  domainExpertiseData: [],
};

export default ProjectWork;
