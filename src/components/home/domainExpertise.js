import React, { Fragment } from 'react'
import { Row, Col } from 'reactstrap';
import { Link } from "react-router-dom";

import { Heading1, ParallaxImg, DomainText } from "./homeStyledComponents.js";
// import domainBg from "../../assets/images/domain.svg";
import previousSvg from "../../assets/images/previous.svg";
import nextSvg from "../../assets/images/next.svg";
import redArrowSvg from "../../assets/images/arrow-red.svg"
import JoshCarousel from './carousel.js';

import * as routes from "../../routeConstants.js";

const DomainExpertise = (props) => {
  const { domainsData, industriesData } = props;
  const carouselItems = domainsData.map(domain => {
    return <img src={require(`../../assets/images/technologies/${domain.logo}`)} alt={domain.name} key={domain.name} />
  })

  const PreviousArrow = (props) => {
    const { className, onClick } = props;
    return (
      <img
        src={previousSvg}
        className={className}
        onClick={onClick}
        alt="Previous"
      />
    );
  }

  const NextArrow = (props) => {
    const { className, onClick } = props;
    return (
      <img
        src={nextSvg}
        className={className}
        onClick={onClick}
        alt="Next"
      />
    );
  }

  const carouselSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    centerPadding: "10px",
    adaptiveHeight: true,
    nextArrow: <NextArrow />,
    prevArrow: <PreviousArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 6,
          infinite: true,
          dots: true,
          variableWidth: true,
          arrows: true,
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 6,
          infinite: true,
          dots: true,
          arrows: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          dots: true
        }
      }
    ]
  }

  return (
    <Fragment>
      <section id="clientsSlide" className="section-home pb-5">
        <Row className="justify-content-center m-auto d-xs-none w-50 p-md-3">
          <Col>
            <p className="text-center">Disruption is not the future, it is the present. In an ever evolving technological landscape, it is imperative for innovation to win over the mundane, and that's exactly what we aim to achieve.
          </p>
          </Col>
        </Row>
        <Row className="justify-content-center d-md-none m-auto w-100 p-md-3">
          <Col>
            <p className="text-center">Disruption is not the future, it is the present. In an ever evolving technological landscape, it is imperative for innovation to win over the mundane, and that's exactly what we aim to achieve.
          </p>
          </Col>
        </Row>
        <Heading1>Domain Expertise</Heading1>
        <Row>
          <Col sm={2} md={3} />
          <Col sm={8} md={6}>
            <Row>
              {industriesData.map(industry => {
                return <Col sm={6} md={4} xs={6} className="pb-14" key={industry.name}>
                  <Link to={`${routes.DOMAIN_EXPERTISE}/${industry.name.toLowerCase()}`} className="text-decoration-none">
                    <ParallaxImg logo={require(`../../assets/images/home/${industry.name.toLowerCase()}Bg.svg`)} height="120px">
                      <div className="text-center pt-3">
                        <img src={require(`../../assets/images/home/${industry.logo}`)} alt={industry.name} /> <br />
                        <DomainText>{industry.name}</DomainText>
                        <img src={redArrowSvg} alt={industry.name} />
                      </div>
                    </ParallaxImg>
                  </Link>
                </Col>
              })}
            </Row>
          </Col>
          <Col sm={2} md={3} />
        </Row>
      </section>
      <Row className="height-100">
        <Col md={2} />
        <Col md={8} xs="12" sm={12} >
          <JoshCarousel items={carouselItems} settings={carouselSettings} />
        </Col>
        <Col md={2} />
      </Row>
    </Fragment>
  )
}

DomainExpertise.defaultProps = {
  domainsData: [
    {
      id: 1,
      name: "ios",
      logo: "ios.png"
    },
    {
      id: 2,
      name: "android",
      logo: "android.png"
    },
    {
      id: 3,
      name: "go",
      logo: "go.png"
    },
    {
      id: 4,
      name: "ruby",
      logo: "ruby.png"
    },
    {
      id: 5,
      name: "React",
      logo: "react.png"
    },
    {
      id: 6,
      name: "angular",
      logo: "angular.png"
    },
    {
      id: 7,
      name: "java",
      logo: "java.png"
    },
    {
      id: 7,
      name: "Python",
      logo: "java.png"
    }
  ],

  industriesData: [
    {
      id: '1',
      name: 'HEALTH',
      logo: 'health.svg'
    },
    {
      id: '2',
      name: 'MEDIA',
      logo: 'media.svg'
    },
    {
      id: '3',
      name: 'FINANCE',
      logo: 'finance.svg'
    },
    {
      id: '4',
      name: 'SPORTS',
      logo: 'sport.svg'
    },
    {
      id: '5',
      name: 'INSURANCE',
      logo: 'insurance.svg'
    },
    {
      id: '6',
      name: 'MANUFACTURING',
      logo: 'manufacturing.svg'
    },
  ]
}

export default DomainExpertise;