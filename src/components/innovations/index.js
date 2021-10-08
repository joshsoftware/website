import React from "react";
import JoshCarousel from "../home/carousel";
import { Row, Col } from "reactstrap";
import Image from "react-image-webp";
import * as routes from "../../routeConstants.js";
import InnovationItem from "../../shared-components/innovationItem/innovationItem";
import "./innovations.css";
import MainBanner from "../../shared-components/mainBanner/mainbanner";
// import CtaButton from "../../shared-components/ctaButton/ctaButton";
export default function Innovation({ productList }) {
  const linkListItem = [
    {
      linkTitle: "Success Stories",
      link: routes.SUCCESS_STORIES_URL,
      linkClassName: "-success-story",
    },
    {
      linkTitle: "Technology",
      link: routes.TECHNOLOGIES_URL,
      linkClassName: "-technology",
    },
  ];
  // const NextArrow = (props) => {
  //   const { onClick } = props;
  //   return (
  //     <div onClick={onClick} className="carousel-control-next cursor-pointer">
  //       <span aria-hidden="true" className="carousel-control-next-icon"></span>
  //       <span className="sr-only">Previous</span>
  //     </div>
  //   );
  // };

  // const PrevArrow = (props) => {
  //   const { onClick } = props;
  //   return (
  //     <div onClick={onClick} className="carousel-control-prev cursor-pointer">
  //       <span aria-hidden="true" className="carousel-control-prev-icon"></span>
  //       <span className="sr-only">Next</span>
  //     </div>
  //   );
  // };
  // const settings = {
  //   dots: true,
  //   // dotsClass: "d-none",
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   speed: 2000,
  //   autoplaySpeed: 5000,
  //   arrows: true,
  //   nextArrow: <NextArrow />,
  //   prevArrow: <PrevArrow />,
  //   customPaging: () => <div className="rounded-circle orange-color" />,
  // };

  // const Items = [
  //   <div className="carousel-item active">
  //     <Image
  //       src={require("../../assets/images/innovation-cc.png")}
  //       webp={require("../../assets/images/innovation-cc.png.webp")}
  //       alt="First slide"
  //       className="img-fluid img-desktop"
  //     />
  //     <Image
  //       src={require("../../assets/images/innovation-cc-mobile.png")}
  //       webp={require("../../assets/images/innovation-cc-mobile.png.webp")}
  //       alt="First slide"
  //       className="img-fluid img-mobile"
  //     />
  //     <div className="info-wrap">
  //       <p>
  //         CodeCuriosity is a platform that encourages contributions to open
  //         source. Everyone is rewarded for their efforts, no matter how big or
  //         small they are. Our aim is to make open source contribution a habit!
  //       </p>
  //       <p>
  //         We call this our anti-startup. “How to lose money consistently and be
  //         proud of it!” :D
  //       </p>
  //     </div>
  //   </div>,
  //   <div className="carousel-item active">
  //     <Image
  //       webp={require("../../assets/images/innovation-kimaya.png.webp")}
  //       src={require("../../assets/images/innovation-kimaya.png")}
  //       alt="Second slide"
  //       className="img-fluid img-desktop"
  //     />
  //     <Image
  //       webp={require("../../assets/images/innovation-kimaya-mobile.png.webp")}
  //       src={require("../../assets/images/innovation-kimaya-mobile.png")}
  //       alt="Second slide"
  //       className="img-fluid img-mobile"
  //     />
  //     <div className="info-wrap">
  //       <p>
  //         Kimaya-TPN is a cutting-edge, pilot-tested application, built with the
  //         aim of making nutritional calculations fully automated, error free and
  //         fast. Kimaya-TPN is being used by KEM-NICU &amp; alike, to do
  //         calculations using the Hyperalimentation Worksheet for preparing TPN
  //       </p>
  //     </div>
  //   </div>,
  //   <div className="carousel-item active">
  //     <Image
  //       webp={require("../../assets/images/innovation-hunger.png.webp")}
  //       src={require("../../assets/images/innovation-hunger.png")}
  //       alt="third slide"
  //       className="img-fluid img-desktop"
  //     />
  //     <Image
  //       webp={require("../../assets/images/innovation-hunger-mobile.png.webp")}
  //       src={require("../../assets/images/innovation-hunger-mobile.png")}
  //       alt="third slide"
  //       className="img-fluid img-mobile"
  //     />
  //     <div className="info-wrap">
  //       <p>
  //         Hunger Terminal is an application developed in order to reduce scrub
  //         food wastage where company caters food for its employees.
  //       </p>
  //     </div>
  //   </div>,
  // ];
  return (
    // <section className="section-innovation section-content">
    //   <div className="container">
    //     <h1 className="display-4 p-5">Innovation</h1>
    //     <Row
    //       className="justify-content-around m-auto w-75"
    //       id="carouselInnovation"
    //     >
    //       <Col>
    //         <JoshCarousel items={Items} settings={settings} />
    //       </Col>
    //     </Row>
    //   </div>
    // </section>

    <div className="josh-content">
      <section className="main-section">
        <MainBanner
          bannerClassName="innovation"
          pageCaption="Innovations"
          startTagLine="The"
          tagText="Best"
          endTagLine="place of"
        />
        <div className="innovation-details-section">
          {productList.map((productListItems) => (
            <InnovationItem
              productLogo={productListItems.productLogo}
              productDesc={productListItems.productDesc}
              productFeatures={productListItems.features}
            />
          ))}
        </div>

        {/* <CtaButton linkListItem={linkListItem} /> */}
      </section>
    </div>
  );
}

Innovation.defaultProps = {
  productList: [
    {
      productLogo: "kimaya-logo-with-bg.png",
      productDesc:
        "Kimaya-TPN is a cutting-edge, pilot-tested application, built with the aim of making nutritional calculations fully automated, error free and fast. Kimaya-TPN is being used by KEM-NICU & alike, to do calculations using the Hyperalimentation Worksheet for preparing TPN",
      features: [
        {
          img: "baby-image@2x.png",
          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do",
        },
        {
          img: "manual-test-img@2x.png",
          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do",
        },
        {
          img: "kimaya-test-img@2x.png",
          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do",
        },
        {
          img: "tpn-img.@2x.png",
          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do",
        },
      ],
    },
    {
      productLogo: "kimaya-logo-with-bg.png",
      productDesc:
        "CodeCuriosity is a platform that encourages contributions to open source. Everyone is rewarded for their efforts, no matter how big or small they are. Our aim is to make open source contribution a habit!",
      features: [
        {
          img: "baby-image@2x.png",
          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do",
        },
        {
          img: "manual-test-img@2x.png",
          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do",
        },
        {
          img: "kimaya-test-img@2x.png",
          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do",
        },
        {
          img: "tpn-img.@2x.png",
          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do",
        },
      ],
    },
    {
      productLogo: "kimaya-logo-with-bg.png",
      productDesc:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore",
      features: [
        {
          img: "baby-image@2x.png",
          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do",
        },
        {
          img: "manual-test-img@2x.png",
          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do",
        },
        {
          img: "kimaya-test-img@2x.png",
          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do",
        },
        {
          img: "tpn-img.@2x.png",
          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do",
        },
      ],
    },
    {
      productLogo: "kimaya-logo-with-bg.png",
      productDesc:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore",
      features: [
        {
          img: "baby-image@2x.png",
          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do",
        },
        {
          img: "manual-test-img@2x.png",
          desc: "Lorem ipsum d98928294328olor sit amet, consectetur adipisicing elit, sed do",
        },
        {
          img: "kimaya-test-img@2x.png",
          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do",
        },
        {
          img: "tpn-img.@2x.png",
          desc: "Lorem ipsum d98928294328olor sit amet, consectetur adipisicing elit, sed do",
        },
      ],
    },
  ],
};
