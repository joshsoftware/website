import React from "react";
import { Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import Image from "react-image-webp";
import { isWebpSupported } from "react-image-webp/dist/utils";
import nextSVG from "../../assets/images/domainExpertise/next.svg";
import previousSVG from "../../assets/images/domainExpertise/previous.svg";
import JoshCarousel from "../home/carousel";
import * as routes from "../../routeConstants.js";
import "./domain-header.css";

const DomainHeader = (props) => {
  const {
    domains,
    selectedDomain,
    imagesPath,
    baseRoute,
    changeImageOnSelect,
    imageSize,
  } = props;

  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <div onClick={onClick} className="carousel-control-next cursor-pointer">
        <i className="icon-thick-right-arrow" />
        <span className="sr-only">Previous</span>
      </div>
    );
  };

  const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div onClick={onClick} className="carousel-control-prev cursor-pointer">
        <i className="icon-thick-left-arrow" />
        <span className="sr-only">Previous</span>
      </div>
    );
  };
  const items = domains.map((domain) => {
    const imgExt =
      isWebpSupported() && domain.fileType !== "svg"
        ? `${domain.fileType}.webp`
        : domain.fileType;
    const domainImg =
      domain.urlParameter === selectedDomain && changeImageOnSelect
        ? `${domain.logo}_Red.${imgExt}`
        : `${domain.logo}.${imgExt}`;
    const textClass =
      domain.urlParameter === selectedDomain ? "active-slider" : "";
    return (
      <Link
        to={`${baseRoute}/${domain.urlParameter}`}
        className={`d-flex align-items-center justify-content-center text-decoration-none position-relative ${textClass}`}
      >
        {/* <div className=" pt-3 pb-3 border-left border-white border-right cursor-pointer">
          <div className="text-center">
            <Image
              src={require(`../../assets/images/${imagesPath}/${domainImg}`)}
              webp={require(`../../assets/images/${imagesPath}/${domainImg}`)}
              alt={domain.title}
              className="img-fluid m-auto"
              height={imageSize}
              width={imageSize}
            />
          </div>
          <div className={textClass}>{domain.title}</div>
        </div> */}
        <span className="cursor-pointer d-flex align-items-center strip-slider-item justify-content-center">
          <img
            className="slider-item-logo"
            alt={domain.title}
            src={require(`../../assets/images/revampImages/${domain.logo}`)}
          />
          <span className="title font-weight-bold text-uppercase">
            {domain.title}
          </span>
        </span>
      </Link>
    );
  });

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    variableWidth: true,
    centerMode: true,
  };

  return (
    <>
      {/* <div style={{ height: 67 }} />
      <Row className="justify-content-around text-center mx-auto w-80">
        <Col md={2} />
        <Col md={8}>
          <JoshCarousel items={items} settings={settings}></JoshCarousel>
        </Col>
        <Col md={2} />

      </Row> */}

      <div className="strip-slider position-absolute w-100">
        <JoshCarousel items={items} settings={settings}></JoshCarousel>
      </div>
    </>
  );
};

DomainHeader.defaultProps = {
  imagesPath: "domainExpertise",
  baseRoute: routes.DOMAIN_EXPERTISE,
  imageSize: null,
  changeImageOnSelect: true,
  domains: [
    // {
    //   title: "All",
    //   urlParameter: "all",
    // },
    {
      title: "Health",
      logo: "health-icon@2x.png",
      // fileType: "png",
      urlParameter: "health",
    },
    {
      title: "Sports",
      logo: "sports-icon@2x.png",
      // fileType: "png",
      urlParameter: "sports",
    },
    {
      title: "Marketing & Sales",
      logo: "sales-icon@2x.png",
      // fileType: "png",
      urlParameter: "marketing-sales",
    },
    {
      title: "Media",
      logo: "media-icon@2x.png",
      // fileType: "png",
      urlParameter: "media",
    },
    {
      title: "Education",
      logo: "education-icon@2x.png",
      // fileType: "png",
      urlParameter: "education",
    },
    {
      title: "Insurance",
      logo: "insurance-icon@2x.png",
      // fileType: "png",
      urlParameter: "insurance",
    },
    {
      title: "Travel",
      logo: "travel-icon@2x.png",
      // fileType: "svg",
      urlParameter: "travel",
    },
    {
      title: "Education",
      logo: "education-icon@2x.png",
      // fileType: "png",
      urlParameter: "education",
    },
  ],
};

export default DomainHeader;
