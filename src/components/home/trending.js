import React from 'react';
import { Row, Col } from 'reactstrap';

// import gautamPhoto from '../../assets/images/home/gautam_photo.png';
import whatsNewLogo from "../../assets/images/home/whats_new.svg";
import whatsTrendingMb from "../../assets/images/home/whats_trending_mb.svg";
import JoshCarousel from './carousel';

const Trending = (props) => {
  const { setOpenTrending, items } = props;

  // const carouselItems = items.map((cItem) => {
  //   return <div className="row">
  //     <div className="col-md-4 col-xs-12 col-sm-1 d-lg-none d-md-none pr-0">
  //       <div className="float-right img-container" onClick={setOpenTrending}>
  //         <img src={whatsTrendingMb} />
  //         <span className="img-centered-text">Back</span>
  //       </div>
  //     </div>
  //     <div className="col-md-4 col-xs-1 col-sm-1" />
  //     <div className="col-md-4 col-xs-10 col-sm-10 margin-align text-center">
  //       <img src={require(`../../assets/images/home/${cItem.image}`)}
  //         className="img-thumbnail p-3" />
  //       <div className="text-center">
  //         <p className="trending-title"> {cItem.name}</p>
  //         <p>{cItem.title}</p>
  //         <p>{cItem.subTitle}</p>
  //       </div>
  //     </div>
  //     <div className="col-md-4 col-xs-1 col-sm-1 float-right d-xs-none pr-0">
  //       <div className="float-right img-container" onClick={setOpenTrending}>
  //         <img src={whatsNewLogo} />
  //         <span className="img-centered-text">Back</span>
  //       </div>
  //     </div>
  //   </div>
  // })

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
    // <h1 className="text-white">HELLO World</h1>
    // <img src={require(`../../assets/images/home/${cItem.image}`)}
    //     className="img-thumbnail" />

    <Row>
      <Col xs={12} md={12} lg={12} className="img-container mh-100 p-3" style={{ height: 600 }}>
        <div className="float-right img-container top-right" onClick={setOpenTrending}>
          <img src={whatsTrendingMb} />
          <span className="img-centered-text">Back</span>
        </div>
        {/* {
            carouselItems
          } */}
        <div className="img-centered-text">
          <div className="text-center pt-4 float-center">
            <img src={require(`../../assets/images/home/${cItem.image}`)}
              className="img-thumbnail" />

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

  console.log(carouselItems)
  return (
    <div style={{ height: 'auto' }}>

      <JoshCarousel className="img-centered-text" items={carouselItems} settings={settings} ></JoshCarousel>
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

