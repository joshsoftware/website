import React from "react";
import JoshCarousel from "../../components/home/carousel";
import DefaultButton from "../defaultButton/defaultButton";
import "./industryTypeItem.css";

const IndustryTypeItem = (props) => {
  const { industryItem } = props;

  const items = industryItem.map((industryItem) => {
    return (
      <>
        <div className="domain-item-wrap d-flex flex-column position-relative">
          <img
            src={require(`../../assets/images/revampImages/${industryItem.imgPath}`)}
            alt="industry type img"
          />
          <DefaultButton buttonText="view" className="position-absolute" />
          <span className="text-capitalize overflow-hidden text-truncate">
            {industryItem.industryTitle}
          </span>
        </div>
      </>
    );
  });

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3.1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    centerMode: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          arrows: false,
          centerMode: true,
          slidesToShow: 3.1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          arrows: false,
          centerMode: true,
          slidesToShow: 2.1,
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
      <div className="industry-slider">
        <div>
          <JoshCarousel items={items} settings={settings}></JoshCarousel>
        </div>
      </div>
    </>
  );
};
export default IndustryTypeItem;
