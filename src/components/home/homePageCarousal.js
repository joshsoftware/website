import React from 'react'
import { Row, Col } from 'reactstrap';
import Media from "react-media";
import JoshCarousel from "./carousel.js";
import santa from "../../assets/images/santa.png";
import nextSVG from "../../assets/images/domainExpertise/next.svg";
import previousSVG from "../../assets/images/domainExpertise/previous.svg";

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
        matches ? <img src={require(`../../assets/images/home/${cItem.image}_mb.png`)}
        className="img-fluid mt-5" alt={cItem.title} />
          : <Row className="justify-content-around m-auto w-75 d-flex" style={{paddingTop: '3%'}}>
              <img src={require(`../../assets/images/home/${cItem.image}.png`)} alt={cItem.title} />
          </Row>
      }
    </Media>
  ));

  return (
    <Row className="justify-content-center m-auto card cristmas-theme">
      <Col>
        <div className="pb-5">
          <JoshCarousel items={homePageCarouselItems} settings={settings} />
        </div>
      </Col>
      <img class="imageAnimation" style={{position: 'absolute', top:'100%', left:'0px' }} src={santa} alt='santa' width="190px"/>
    </Row>
  )
}

HomePageCarousal.defaultProps = {
  carousalItems: [
      {
        image: "anniversary",
        name: "Anniversary",
        title: "12 th Anniversary",
        subTitle: "anniversary"
      },
      {
        image: "go_girls_19_success",
        name: "Golang Girls 2019 Success",
        title: "Golang Girls 2019 Success",
        subTitle: "Golang Girls 2019 Success",
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
      {
        image: "gopher_guide",
        name: "Gopher Guide",
        title: "Gopher Guide",
        subTitle: "Past event."
      },
    ]
}


export default HomePageCarousal;
