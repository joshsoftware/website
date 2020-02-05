import React from 'react'
import { Row, Col } from 'reactstrap';
import Media from "react-media";
import JoshCarousel from "./carousel.js";
import nextSVG from "../../assets/images/domainExpertise/next.svg";
import previousSVG from "../../assets/images/domainExpertise/previous.svg";
import Image from 'react-image-webp';

const HomePageCarousal = (props) => {
  const { carousalItems } = props;

  const NextArrow = (props) => {
    const { onClick } = props;
    return <div onClick={onClick} className="carousel-control-next cursor-pointer bottom-94p">
      <img src={nextSVG} alt="next" className="pl-md-5" />
      <span className="sr-only">Previous</span></div>
  }

  const PrevArrow = (props) => {
    const { onClick } = props;
    return <div onClick={onClick} className="carousel-control-prev cursor-pointer bottom-94p">
      <img src={previousSVG} alt="next" className="pr-md-5" />
      <span className="sr-only">Previous</span></div>
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    adaptiveHeight: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
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

  const homePageCarouselItems = carousalItems.map(cItem => (
    <Media query="(max-width: 500px)" key={cItem.name}>
      {matches =>
        matches ? <Image src={require(`../../assets/images/home/${cItem.image}_mb.png`)}
        webp={require(`../../assets/images/home/${cItem.image}_mb.png.webp`)}
        className="img-fluid mt-5" alt={cItem.title} />
          : <Row className="justify-content-around m-auto w-75 d-flex" style={{paddingTop: '3%'}}>
              <Image
                src={require(`../../assets/images/home/${cItem.image}.png`)}
                webp={require(`../../assets/images/home/${cItem.image}.png.webp`)}
                alt={cItem.title} />
          </Row>
      }
    </Media>
  ));

  return (
    <Row className="justify-content-center m-auto card">
      <Col>
        <div className="pb-5">
          <JoshCarousel items={homePageCarouselItems} settings={settings} />
        </div>
      </Col>
    </Row>
  )
}

HomePageCarousal.defaultProps = {
  carousalItems: [
      {
        image: "rails_girl_success",
        name: "rails girls success",
        title: "Rails Girls 2020 Success",
        subTitle: "Past event."
      },
      {
        image: "shweta_capetown",
        name: "Shweta capetown talk",
        title: "Shweta capetown Talk",
        subTitle: ""
      },
      {
        image: "gopher_guide",
        name: "Gopher Guide",
        title: "Gopher Guide",
        subTitle: "Past event."
      },
    ]
}


export default HomePageCarousal;
