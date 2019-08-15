import React from 'react';
import { Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

import JoshCarousel from '../home/carousel';
import * as routes from "../../routeConstants.js";

const DomainHeader = (props) => {
  const { domains, selectedDomain } = props;

  const items = domains.map(domain => {
    const domainImg = domain.title.toLowerCase() === selectedDomain ? `${domain.logo}_Red.png` : `${domain.logo}.png`
    const textClass = domain.title.toLowerCase() === selectedDomain ? "text-orange" : "text-black"
    return <Link to={`${routes.DOMAIN_EXPERTISE}/${domain.title.toLowerCase()}`}>
      <div className=" pt-3 pb-3 border-left border-white border-right cursor-pointer">
        <div className="text-center">
          <img src={require(`../../assets/images/domainExpertise/${domainImg}`)} alt={domain.title} className="img-responsive m-auto" />
        </div>
        <div className={textClass}>{domain.title}</div>
      </div>
    </Link>
  })

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    arrows: false,
    adaptiveHeight: true,
    responsive: [{
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        arrows: false,
        dots: true
      }
    },
    {
      breakpoint: 330,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        arrows: false,
        dots: true

      }
    }]
  };

  return (
    <Row className="justify-content-around text-center mx-auto w-80">
      <Col md={2} />
      <Col md={8}>
        <JoshCarousel items={items} settings={settings}></JoshCarousel>
      </Col>
      <Col md={2} />
    </Row>
  )
}

DomainHeader.defaultProps = {
  domains: [
    {
      title: "Health",
      logo: 'Health'
    },
    {
      title: "Media",
      logo: "Media"
    },
    {
      title: "Fianance",
      logo: "Fianance"
    },
    {
      title: "Manufacturing",
      logo: 'Manufacturing'
    },
    {
      title: "Sports",
      logo: "Sports"
    },
    {
      title: "More",
      logo: "more"
    }
  ]
}

export default DomainHeader;
