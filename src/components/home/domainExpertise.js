import React, { Fragment } from 'react'
import { Row, Col } from 'reactstrap';
import { Heading1, ParallaxImg, DomainText } from "./homeStyledComponents.js";
import domainBg from "../../assetes/images/domain.svg";
import previousSvg from "../../assetes/images/previous.svg";
import nextSvg from "../../assetes/images/next.svg"
import redArrowSvg from "../../assetes/images/arrow-red.svg"
import JoshCarousel from './carousel.js';
import healthSvg from "../../assetes/images/home/health.svg"
import insuranceSvg from "../../assetes/images/home/insurance.svg"
import financeSvg from "../../assetes/images/home/finance.svg"
import sportSvg from "../../assetes/images/home/sport.svg"
import mediaSvg from "../../assetes/images/home/media.svg"
import manufacturingSvg from "../../assetes/images/home/manufacturing.svg"

const DomainExpertise = (props) => {
  const { domainsData, industriesData } = props;
  const carouselItems = domainsData.map(domain => {
    return <img src={require(`../../assetes/images/technologies/${domain.logo}`)} />
  })

  const PreviousArrow = (props) => {
    const { className, onClick } = props;
    return (
      <img
        src={previousSvg}
        className={className}
        onClick={onClick}
      />
    );
  }

  const NextArrow = (props) => {
    const { className, onClick } = props;
    return (
      <img
        src={previousSvg}
        className={className}
        onClick={onClick}
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
    nextArrow: <PreviousArrow />,
    prevArrow: <NextArrow />,
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
      <section id="clientsSlide" className="section-home ">
        <Heading1>Domain Expertise</Heading1>
        <Row>
          <Col sm={2} md={3} />
          <Col sm={8} md={6}>
            <Row>
              {industriesData.map(industry => {
                return <Col sm={6} md={4} xs={6} className="pb-14">
                  <ParallaxImg logo={domainBg} height="120px">
                    <div className="text-center pt-3">
                      <img src={require(`../../assetes/images/home/${industry.logo}`)}/> <br />
                      <DomainText>{industry.name}</DomainText>
                      <img src={redArrowSvg} />
                    </div>
                  </ParallaxImg>
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
      name: "java",
      logo: "java.png"
    },
    {
      id: 6,
      name: "angular",
      logo: "angular.png"
    },
    {
      id: 7,
      name: "react",
      logo: "angular.png"
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
