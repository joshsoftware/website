import React, { Fragment } from 'react'
import { Row, Col } from 'reactstrap';
import { Link } from "react-router-dom";

import { Heading1, ParallaxImg, DomainText } from "./homeStyledComponents.js";
import previousSvg from "../../assets/images/previous.svg";
import nextSvg from "../../assets/images/next.svg";
import JoshCarousel from './carousel.js';

import * as routes from "../../routeConstants.js";

const DomainExpertise = (props) => {
  const { domainsData, industriesData } = props;
  const carouselItems = domainsData.map(domain => {
    return <img className="img-fluid" src={require(`../../assets/images/technologies/${domain.logo}`)} alt={domain.name} key={domain.name} />
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
    slidesToScroll: 6,
    centerPadding: "15px",
    adaptiveHeight: true,
    initialSlide: 0,
    dotsClass: "slick-dots slick-thumb bottom-50",
    prevArrow: <PreviousArrow />,
    nextArrow: <NextArrow />,
    customPaging: () => <div className="rounded-circle orange-color" />,
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
        <Row className="justify-content-center m-auto d-xs-none w-55 p-md-3">
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
        <Row className="justify-content-around m-auto">
          <Col sm={2} md={3} />
          <Col sm={8} md={6}>
            <Row>
              {industriesData.map(industry => {
                return <Col sm={6} md={4} xs={6} className="pb-14" key={industry.name}>
                  <Link to={`${routes.DOMAIN_EXPERTISE}/${industry.name.toLowerCase()}`} className="text-decoration-none">

                    <div className="img-container text-center pt-md-3">
                      <img className="img-fluid" src={require(`../../assets/images/home/${industry.bgImg}`)} className="img-fluid" />
                      <div className="img-centered-text">
                        <img className="img-fluid" src={require(`../../assets/images/home/${industry.logo}`)} alt={industry.name} /> <br />
                        <DomainText>{industry.name}</DomainText>
                      </div>
                    </div>

                  </Link>
                </Col>
              })}
            </Row>
          </Col>
          <Col sm={2} md={3} />
        </Row>
      </section>
      <Row className="justify-content-around m-auto">
        {/* <Col md={2} /> */}
        <Col md={8} xs={12} sm={12} >
          <JoshCarousel items={carouselItems} settings={carouselSettings} />
        </Col>
        {/* <Col md={2} /> */}
      </Row>
    </Fragment>
  )
}

DomainExpertise.defaultProps = {
  domainsData: [
    {
      id: 4,
      name: "ruby",
      logo: "ruby.png"
    },
    {
      id: 3,
      name: "go",
      logo: "go.png"
    },
    {
      id: 5,
      name: "React",
      logo: "react.png"
    },
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
      logo: "python.png"
    }
  ],

  industriesData: [
    {
      id: '1',
      name: 'HEALTH',
      logo: 'health.svg',
      bgImg: 'healthBg.svg'
    },
    {
      id: '2',
      name: 'MEDIA',
      logo: 'media.svg',
      bgImg: 'mediaBg.svg'
    },
    {
      id: '3',
      name: 'EDUCATION',
      logo: 'Education.png',
      bgImg: 'educationBg.svg'
    },
    {
      id: '4',
      name: 'SPORTS',
      logo: 'sport.svg',
      bgImg: 'sportsBg.svg'
    },
    {
      id: '5',
      name: 'INSURANCE',
      logo: 'insurance.svg',
      bgImg: 'insuranceBg.svg'
    },
    {
      id: '6',
      name: 'MARKETING & SALES',
      logo: 'Sales.png',
      bgImg: "salesBg.svg"
    },
  ]
}



export default DomainExpertise;
