import React from 'react';
import { Row, Col } from 'reactstrap';
import Santa from '../../assets/images/home/santa.png';
import SantaMob from '../../assets/images/home/santa_mb.png';
import ContactUsBtn from '../../assets/images/home/contact_us_btn.png';
import ContactUsBtnMob from '../../assets/images/home/contact_us_btn_mb.png';
import Media from 'react-media';

const TagLines = () => {
  return (
    <Row className="justify-content-center">
      <Col>
        <p className="text-center disruption-margin">
          Disruption is not the future, it is the present. In an ever evolving technological landscape, it is
          <br/>
          imperative for innovation to win over the mundane, and that's exactly what we aim to achieve.
        </p>
      </Col>
    </Row>
  )
};

const HomePageBanner = () => {
  return (
    <Media query="(max-width: 500px)">
      {matches =>
        matches ? (
          <section className="bg-light-gray justify-content-center">
            <div className="banner-wrapper-mb">
                <h2 className="banner-heading-font-weight-bold text-white text-center">
                  INNOVATION & DISRUPTION
                </h2>
                <h5 className="banner-secondary-heading-font-weight-bold text-white">
                  is the way We change the Game
                </h5>
                <a href="/contact_us">
                  <img src={ContactUsBtnMob} alt="contact-us" />
                </a>
                <h6 className="text-white banner-normal-text">
                    to change yours
                </h6>
            </div>
            <div className="text-center banner-text">
              <img src={SantaMob} alt="santa-mobile" style={{ transform: `rotate(-10deg)` }}/>
            </div>
            <TagLines />
          </section>
        ) : (
          <section className="bg-light-gray justify-content-center">
            <div className="banner-wrapper">
                <h2 className="banner-heading-font-weight-bold text-white">
                  INNOVATION & DISRUPTION
                </h2>
                <h5 className="banner-secondary-heading-font-weight-bold text-white">
                  is the way We change the Game
                </h5>
                <a href="/contact_us">
                  <img src={ContactUsBtn} alt="contact-us" />
                </a>
                <h6 className="text-white banner-normal-text">
                    to change yours
                </h6>
            </div>
            <div className="text-center">
              <img src={Santa} alt="santa" style={{ transform: `rotate(-10deg)` }}/>
            </div>
            <TagLines />
          </section>
        )
      }
      </Media>
  );
}

export default HomePageBanner;
