import React from 'react';
import { Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

import JoshCarousel from '../home/carousel';
import * as routes from "../../routeConstants.js";

const DomainHeader = (props) => {
  const { domains, selectedDomain, imagesPath, baseRoute, changeImageOnSelect, imageSize } = props;

  const items = domains.map(domain => {
    const domainImg = domain.title.toLowerCase() === selectedDomain && changeImageOnSelect ? `${domain.logo}_Red.${domain.fileType}` : `${domain.logo}.${domain.fileType}`
    const textClass = domain.title.toLowerCase() === selectedDomain ? "text-orange" : "text-black"
    return <Link to={`${baseRoute}/${domain.title.toLowerCase()}`}>
      <div className=" pt-3 pb-3 border-left border-white border-right cursor-pointer">
        <div className="text-center">
          <img src={require(`../../assets/images/${imagesPath}/${domainImg}`)} alt={domain.title} className="img-fluid m-auto" height={imageSize} width={imageSize}/>
        </div>
        <div className={textClass}>{domain.title}</div>
      </div>
    </Link>
  })

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 7,
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
    <>
      <div style={{ height: 67 }} />
      <Row className="justify-content-around text-center mx-auto w-80">
        <Col md={2} />
        <Col md={8}>
          <JoshCarousel items={items} settings={settings}></JoshCarousel>
        </Col>
        <Col md={2} />
      </Row>
    </>
  )
}

DomainHeader.defaultProps = {
  imagesPath: 'domainExpertise',
  baseRoute: routes.DOMAIN_EXPERTISE,
  imageSize: null,
  changeImageOnSelect: true,
  domains: [
    {
      title: "Health",
      logo: 'Health',
      fileType: "png"
    },
    {
      title: "Sports",
      logo: "Sports",
      fileType: "png"
    },
    {
      "title": "Marketing & Sales",
      logo: "sales",
      fileType: "png"
    },
    {
      title: "Media",
      logo: "Media",
      fileType: "png"
    },
    {
      title: "Education",
      logo: "education",
      fileType: "png"
    },
    {
      title: "Insurance",
      logo: 'insurance',
      fileType: "png"
    },
    {
      title: "Travel",
      logo: 'travel',
      fileType: "svg"
    }

  ]
}

export default DomainHeader;
