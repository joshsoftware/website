import React, { Fragment } from 'react'
import { Row, Col } from 'reactstrap';
import { Link } from "react-router-dom";

import { Heading1 } from "./homeStyledComponents.js";
import previousSvg from "../../assets/images/previous.svg";
import nextSvg from "../../assets/images/next.svg";
import JoshCarousel from './carousel.js';
import Svg from "./svg.js";

import * as routes from "../../routeConstants.js";
import { TECHNOLOGIES_USED } from "../../globalConstants"

const DomainExpertise = (props) => {
  const { domainsData, industriesData } = props;
  const carouselItems = domainsData.map(domain => {
    return <Link to={`${routes.TECHNOLOGIES_URL}#${domain.name.toUpperCase()}`} className="text-decoration-none">
      <img className="img-fluid" src={require(`../../assets/images/technologies/${domain.logo}`)} alt={domain.name} key={domain.name} />
    </Link>
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
      <section className="gray-back d-flex justify-content-center">
        <Row className="d-xs-none w-55">
          <Col>
            <p className="text-center disruption-margin">Disruption is not the future, it is the present. In an ever evolving technological landscape, it is imperative for innovation to win over the mundane, and that's exactly what we aim to achieve.
            </p>
          </Col>
        </Row>
        <Row className="justify-content-center d-md-none m-auto w-100 p-md-3">
          <Col>
            <p className="text-center disruption-margin">Disruption is not the future, it is the present. In an ever evolving technological landscape, it is imperative for innovation to win over the mundane, and that's exactly what we aim to achieve.
          </p>
          </Col>
        </Row>
      </section>
      <section id="clientsSlide" className="section-home pb-5">
        <Heading1>Domain Expertise</Heading1>
        <Row className="justify-content-around m-auto">
          <Col sm={2} md={3} />
          <Col sm={8} md={6}>
            <Row>
              {industriesData.map(industry => {
                return <Col sm={6} md={4} xs={6} className="pb-14" key={industry.name}>
                  <Link to={`${routes.DOMAIN_EXPERTISE}/${industry.name.toLowerCase()}`} className="text-decoration-none">

                    <Svg src={require(`../../assets/images/home/${industry.bgImg}`)} />
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
      name: TECHNOLOGIES_USED.ruby,
      logo: "ruby.png"
    },
    {
      id: 3,
      name: TECHNOLOGIES_USED.go,
      logo: "go.png"
    },
    {
      id: 5,
      name: TECHNOLOGIES_USED.react,
      logo: "react.png"
    },
    {
      id: 1,
      name: TECHNOLOGIES_USED.ios,
      logo: "ios.png"
    },
    {
      id: 2,
      name: TECHNOLOGIES_USED.android,
      logo: "android.png"
    },
    {
      id: 6,
      name: TECHNOLOGIES_USED.angular,
      logo: "angular.png"
    },
    {
      id: 7,
      name: TECHNOLOGIES_USED.java,
      logo: "java.png"
    },
    {
      id: 7,
      name: TECHNOLOGIES_USED.python,
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
