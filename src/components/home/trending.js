import React from 'react';
import { Row, Col } from 'reactstrap';
import Media from "react-media";

import JoshCarousel from './carousel';
import NextImg from "../../assets/images/home/Next.png";
import PreviousImg from "../../assets/images/home/previous.png";

const Trending = (props) => {
  const { setOpenTrending, items } = props;

  const PreviousArrow = (props) => {
    const { className, onClick } = props;
    return (
      <img
        src={PreviousImg}
        className={`${className} carousel-arrow`}
        onClick={onClick}
        alt="Previous"
      />
    );
  }

  const NextArrow = (props) => {
    const { className, onClick } = props;
    return (
      <img
        src={NextImg}
        className={`${className} carousel-arrow`}
        onClick={onClick}
        alt="Next"
      />
    );
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    adaptiveHeight: true,
    nextArrow: <NextArrow />,
    prevArrow: <PreviousArrow />,
    customPaging: () => <div className="rounded-circle orange-color" />,
    dotsClass: "slick-dots bottom-50",
    responsive: [
      {
        breakpoint: 600,
        settings: {
          arrows: false
        }
      },
    ]
  };

  const carouselItems = items.map(cItem => (
    <Media query="(max-width: 500px)" key={cItem.name}>
      {matches =>
        matches ? <img src={require(`../../assets/images/home/${cItem.image}_mb.png`)}
          className="img-responsive mt-2" alt="what's new?" />
          : <Row className="justify-content-around m-auto w-100 d-flex">
            <Col>
              <img src={require(`../../assets/images/home/${cItem.image}.png`)}
                className=" img-responsive mt-5" alt="what's new?" />
            </Col>
          </Row>
      }
    </Media>
  ));


  const WebView = (
    <>
      <Row className="float-right justify-content-around m-auto pt-3 pl-5">
        <Col>
          <img src={require(`../../assets/images/home/Close.png`)}
            className="img-responsive cursor-pointer "
            onClick={setOpenTrending}
            alt="Close" />
        </Col>
      </Row>
      <Row className="justify-content-around m-auto w-75" >
        <Col>
          <JoshCarousel
            className="img-centered-text"
            items={carouselItems}
            settings={settings} />
        </Col>
      </Row >
    </>
  )

  const MobileView = (
    <>
      <Row className="float-right justify-content-around m-auto pt-3 pl-5">
        <Col>
          <img src={require(`../../assets/images/home/Close.png`)}
            className="img-responsive cursor-pointer size-30"
            onClick={setOpenTrending}
            alt="Close" />
        </Col>
      </Row>
      <Row className="justify-content-center m-auto w-100  d-flex" >
        <Col>
          <JoshCarousel
            className="img-centered-text"
            items={carouselItems}
            settings={settings} />
        </Col>
      </Row >
    </>
  )
  return (
    <Media query="(max-width: 500px)">
      {matches => matches ? MobileView : WebView}
    </Media>

  )
}



Trending.defaultProps = {
  items: [
    {
      image: "deccan",
      name: "Gautam Rege",
      title: "Speaker at Go-pher Conference",
      subTitle: "Sample Text, U.K."
    },
    {
      image: "droid_jam",
      name: "Shweta Kale",
      title: "Speaker at Go-pher Conference",
      subTitle: "Sample Text, U.K."
    },
    {
      image: "conference",
      name: "Shweta Kale",
      title: "Speaker at Go-pher Conference",
      subTitle: "Sample Text, U.K."
    }
  ]
}

export default Trending;