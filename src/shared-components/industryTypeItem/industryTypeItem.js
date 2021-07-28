import React from "react";
import JoshCarousel from "../../components/home/carousel";
import DefaultButton from "../defaultButton/defaultButton";
import Image from "react-image-webp";
import "./industryTypeItem.css";

const IndustryTypeItem = (props) => {
  const { industryItem } = props;

  const items = industryItem.map((industryItem, imagesPath) => {
    return (
      <>
        <div className="domain-item-wrap">
          <Image src={industryItem.imgPath} alt="industry type img" />
          <DefaultButton buttonText="view" />
          <span>{industryItem.industryTitle}</span>
        </div>
      </>
    );
  });

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 7,
    arrows: false,
    adaptiveHeight: true,
    dots: true,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 0,
          arrows: false,
          dots: true,
        },
      },
      {
        breakpoint: 330,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 0,
          arrows: false,
          dots: true,
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
