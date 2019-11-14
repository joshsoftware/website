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
          className="img-fluid mt-2" alt="what's new?" />
          : <Row className="justify-content-around m-auto w-75 d-flex">
            <Col>
              <img src={require(`../../assets/images/home/${cItem.image}.png`)}
                className=" img-fluid mt-5" alt="what's new?" />
            </Col>
          </Row>
      }
    </Media>
  ));


  const WebView = (
    <>
      <Row className="justify-content-around m-auto mt-1">
        <Col sm={12}>
          <JoshCarousel
            className="img-centered-text"
            items={carouselItems}
            settings={settings} />
        </Col>
      </Row >
      <img src={require(`../../assets/images/home/Close.png`)}
        className="img-fluid cursor-pointer close-button"
        onClick={setOpenTrending}
        alt="Close" />
    </>
  )

  const MobileView = (
    <>
      <Row className="float-right justify-content-around m-auto pt-3 pl-5">
        <Col>
          <img src={require(`../../assets/images/home/Close.png`)}
            className="img-fluid cursor-pointer size-30"
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
      image: "go_girls_19_success",
      name: "Golang Girls 2019 Success",
      title: "Golang Girls 2019 Success",
      subTitle: "Golang Girls 2019 Success",
    },
    {
      image: "anniversary",
      name: "Anniversary",
      title: "12 th Anniversary",
      subTitle: "anniversary"
    },
    {
      image: "gautam-talk",
      name: "Gautam's talk",
      title: "Impossible Go",
      subTitle: "gautam's talk"
    },
    {
      image: "shweta-talk",
      name: "Shweta's talk",
      title: "Going long way with Rails",
      subTitle: "shweta's talk"
    },
    {
      image: "deccan",
      name: "Deccan Ruby Conf",
      title: "Lightening Talk and Gold Sponsors",
      subTitle: "Lightening Talk."
    },
    {
      image: "droid-jam",
      name: "Droid Jam 2019",
      title: "Gold Sponsors",
      subTitle: "Past event."
    },
  ]
}

export default Trending;
