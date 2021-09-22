import React from "react";
import JoshCarousel from "../../components/home/carousel";
import DefaultButton from "../defaultButton/defaultButton";
import Image from "react-image-webp";
import "./industryTypeItem.css";

const IndustryTypeItem = (props) => {
  const { industryItem } = props;

  const items = industryItem.map((industryItem) => {
    return (
      <>
        <div className="domain-item-wrap d-flex flex-column">
          <img
            src={require(`../../assets/images/revampImages/${industryItem.imgPath}`)}
            alt="industry type img"
          />
          <DefaultButton buttonText="view" />
          <span>{industryItem.industryTitle}</span>
        </div>
      </>
    );
  });

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3.2,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          arrows: false,
          centerMode: true,
          slidesToShow: 4,
          centerPadding: "8px",
        },
      },
      {
        breakpoint: 992,
        settings: {
          arrows: false,
          centerMode: true,
          slidesToShow: 3,
          centerPadding: "20px",
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          slidesToShow: 1.1,
        },
      },
    ],
  };

  return (
    <>
      <div>
        <JoshCarousel items={items} settings={settings}></JoshCarousel>
      </div>
    </>
  );
};

IndustryTypeItem.defaultProps = {
  // imagesPath: "revampImages",
};
export default IndustryTypeItem;
