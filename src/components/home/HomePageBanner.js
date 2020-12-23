import React from 'react';
import { Row, Col } from 'reactstrap';
import Banner from '../../assets/images/home/banner.png';
import BannerMob from '../../assets/images/home/banner_mb.png';
import Santa from '../../assets/images/home/santa.png';
import Media from 'react-media';

const HomePageBanner = () => {
  return (
    <Media query="(max-width: 500px)">
      {matches =>
        matches ? (
          <section className="bg-light-gray justify-content-center">
            <img src={BannerMob} alt="banner-mobile" />

            <div className="text-center">
              <img src={Santa} alt="santa-mobile" />
            </div>

            <Row className="justify-content-center m-auto p-md-3">
              <Col>
                <p className="text-center disruption-margin">
                  Disruption is not the future, it is the present. In an ever evolving technological landscape, it is
                  <br/>
                  imperative for innovation to win over the mundane, and that's exactly what we aim to achieve.
                </p>
              </Col>
            </Row>
          </section>
        ) : (
          <section className="bg-light-gray justify-content-center">
            <img src={Banner} alt="banner" />
            <div className="text-center">
                <h2 className="font-weight-bold text-white">
                  INNOVATION & DISRUPTION
                </h2>
                <h5 className="text-white">
                  is the way We change the Game
                </h5>
                <a href="/contact_us" className="btn btn-danger rounded-pill btn-xs">
                  Contact us
                </a>
                <h6 className="text-white">
                    to change yours
                </h6>
            </div>
            <div className="text-center">
              <img src={Santa} alt="santa-mobile" />
            </div>
            <Row className="justify-content-center m-auto p-md-3">
              <Col>
                <p className="text-center disruption-margin">
                  Disruption is not the future, it is the present. In an ever evolving technological landscape, it is
                  <br/>
                  imperative for innovation to win over the mundane, and that's exactly what we aim to achieve.
                </p>
              </Col>
            </Row>
          </section>
        )
      }
      </Media>
  );
}

export default HomePageBanner;
