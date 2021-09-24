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
        <div className="cursor-pointer d-flex align-items-center justify-content-center strip-slider-item">
          <img
            className="slider-item-logo"
            alt={domain.title}
            src={require(`../../assets/images/revampImages/${domain.logo}`)}
          />
          <div className="title font-weight-bold">{domain.title}</div>
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
      title: "Travel",
      logo: "travel-icon@2x.png",
      // fileType: "svg",
      urlParameter: "travel",
    },
  ],
};

export default DomainHeader;
