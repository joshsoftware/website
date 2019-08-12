import React from 'react';
import { Row, Col } from 'reactstrap';

import whatsTrendingMb from "../../assets/images/home/whats_trending_mb.svg";
import JoshCarousel from './carousel';

const Trending = (props) => {
  const { setOpenTrending, items } = props;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    adaptiveHeight: true,
    centerMode: true,
    centerPadding: "-20px",
    customPaging: () => <div className="rounded-circle orange-color" />,
    dotsClass: "slick-dots bottom-30"
  };

  const carouselItems = items.map(cItem => (
    <Row>
      <Col xs={12} md={12} lg={12} className="img-container mh-100 p-3" style={{ height: 600 }}>
        <div className="float-right img-container top-right" onClick={setOpenTrending}>
          <img src={whatsTrendingMb} alt="what's new?" />
          <span className="img-centered-text">Back</span>
        </div>
        <div className="img-centered-text">
          <div className="text-center pt-4 float-center">
            <img src={require(`../../assets/images/home/${cItem.image}`)}
              className="img-thumbnail" alt="what's new?" />

          </div>
          <div className="text-center pt-4">
            <p className="trending-title text-uppercase font-weight-bold"> {cItem.name}</p>
            <p className="trending-subtitle">{cItem.title}</p>
            <p className="trending-subtitle">{cItem.subTitle}</p>
          </div>
        </div>
      </Col>
    </Row>
  ));

  return (
    <div style={{ height: 'auto' }}>
      <JoshCarousel
        className="img-centered-text"
        items={carouselItems}
        settings={settings} />
    </div>
  )
}

Trending.defaultProps = {
  items: [
    {
      image: "gautam_photo.png",
      name: "Gautam Rege",
      title: "Speaker at Go-pher Conference",
      subTitle: "Sample Text, U.K."
    },
    {
      image: "gautam_photo.png",
      name: "Shweta Kale",
      title: "Speaker at Go-pher Conference",
      subTitle: "Sample Text, U.K."
    }
  ]
}

export default Trending;

