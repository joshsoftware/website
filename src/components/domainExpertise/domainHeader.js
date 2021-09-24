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
  const NextArrow = () => {
    const { onClick } = props;
    return (
      <div onClick={onClick} className="carousel-control-next cursor-pointer">
        <img src={nextSVG} alt="next" />
        <span className="sr-only">Previous</span>
      </div>
    );
  };

  const PrevArrow = () => {
    const { onClick } = props;
    return (
      <div onClick={onClick} className="carousel-control-prev cursor-pointer">
        <img src={previousSVG} alt="next" />
        <span className="sr-only">Previous</span>
      </div>
    );
  };
  const {
    domains,
    selectedDomain,
    imagesPath,
    baseRoute,
    changeImageOnSelect,
    imageSize,
  } = props;

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
      domain.urlParameter === selectedDomain ? "text-orange" : "text-black";
    return (
      <Link to={`${baseRoute}/${domain.urlParameter}`}>
        <div className="cursor-pointer d-flex align-items-center strip-slider-item">
          <Image
            src={require(`../../assets/images/${imagesPath}/${domainImg}`)}
            webp={require(`../../assets/images/${imagesPath}/${domainImg}`)}
            alt={domain.title}
            className="slider-item-logo"
            // height={imageSize}
            // width={imageSize}
          />
          <div className={`title font-weight-bold ${textClass}`}>
            {domain.title}
          </div>
        </div>
      </Link>
    );
  });

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 7,
    adaptiveHeight: true,

    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 330,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ],
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
    {
      title: "Health",
      logo: "Health",
      fileType: "png",
      urlParameter: "health",
    },
    {
      title: "Sports",
      logo: "Sports",
      fileType: "png",
      urlParameter: "sports",
    },
    {
      title: "Marketing & Sales",
      logo: "sales",
      fileType: "png",
      urlParameter: "marketing-sales",
    },
    {
      title: "Media",
      logo: "Media",
      fileType: "png",
      urlParameter: "media",
    },
    {
      title: "Education",
      logo: "education",
      fileType: "png",
      urlParameter: "education",
    },
    {
      title: "Insurance",
      logo: "insurance",
      fileType: "png",
      urlParameter: "insurance",
    },
    {
      title: "Travel",
      logo: "travel",
      fileType: "svg",
      urlParameter: "travel",
    },
  ],
};

export default DomainHeader;
