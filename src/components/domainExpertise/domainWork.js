import React from 'react'
import { Card, Row, Col } from 'reactstrap';
import { Link } from "react-router-dom";

import KimayaLogo from "../../assets/images/domainExpertise/kimaya.png";
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
    <Row className="justify-content-center m-auto w-90">
      <Col>
        <Card className="p-5">
          <JoshCarousel items={items} settings={settings} />
          {/* <Row className="justify-content-center m-auto w-90">
            <Col>
            </Col>
          </Row> */}
        </Card>
      </Col>
    </Row>
  )
}

DomainWork.defaultProps = {
  domainExpertiseData: [
    {
      title: "KimayaNICU",
      techStack: ["go"],
      logo: KimayaLogo,
      solution: "A consolidated, scalable, one-click web platform that generates timely statistical reports for players, managers and coaches over 17 regions and 234 countries. Ease of communication across the entire player-coach ecosystem also enhanced, as custom pathways are created as per player needs and messages can be broadcast by admins, coaches and managers",
      business: "A single platform that integrates player data, player profiles and coach profiles to track player progress and understand their strengths/weakness.",
      impact: "More than 2000 players, 60 team managers and 50 coaches reached Improved player performance, level of the overall teams upped, and increased eligibility for sports leagues"
    },

    {
      title: "KimayaNICU11",
      techStack: ["go"],
      logo: KimayaLogo,
      solution: "A consolidated, scalable, one-click web platform that generates timely statistical reports for players, managers and coaches over 17 regions and 234 countries. Ease of communication across the entire player-coach ecosystem also enhanced, as custom pathways are created as per player needs and messages can be broadcast by admins, coaches and managers",
      business: "A single platform that integrates player data, player profiles and coach profiles to track player progress and understand their strengths/weakness.",
      impact: "More than 2000 players, 60 team managers and 50 coaches reached Improved player performance, level of the overall teams upped, and increased eligibility for sports leagues"
    }
  ]
}

export default DomainWork;
