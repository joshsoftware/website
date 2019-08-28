import React, { Fragment } from 'react'
import Media from 'react-media';
import { Link } from 'react-router-dom';
import { Button, Row, Col } from "reactstrap";

import mainImg from '../../assets/images/home/black-bulb-image.png';
import logoM from '../../assets/images/home/bulb-image-mobile.png';

import { ParallaxImg, BannerSubText, BannerText, ConctactUsRightText } from "./homeStyledComponents.js"
import * as routeConstants from "../../routeConstants.js";
import whatsNewLogo from "../../assets/images/home/whats_new.svg";
import whatsTrendingMb from "../../assets/images/home/whats_trending_mb.svg";

const HomePage = (props) => {
  const { setOpenTrending } = props;

  return (
    <>
      <div style={{ backgroundColor: "#333333", }}>
        <div className="row">

          <div className="col-md-6 col-xs-12">
            <Media query="(max-width: 500px)">
              {matches =>
                matches ? (
                  <Row>
                    <Col xs={10}>
                      <ParallaxImg logo={logoM} height="411px" />
                    </Col>
                    <Col xs={2} className="pr-0">
                      <div onClick={setOpenTrending} className="float-right img-container cursor-pointer">
                        <img src={whatsTrendingMb} alt="What's Trending?" />
                        <span className="img-centered-text">What's <br /> Trending?</span>
                      </div>
                    </Col>

                  </Row>
                ) : (
                    <ParallaxImg logo={mainImg} height="721px" />
                  )
              }
            </Media>
          </div>
          <Media query="(max-width: 500px)">
            {matches =>
              matches ? (
                <div className="col-md-6 pl-4 banner-text-align">{BannerText1()}</div>
              ) : (
                  <div className="col-md-4 m-auto">{BannerText1()}</div>
                )
            }
          </Media>
          <div className="col-md-2 d-xs-none ">
            <div onClick={setOpenTrending} className="img-container cursor-pointer">
              <img src={whatsNewLogo} alt="What's Trending?" />
              <span className="img-centered-text">What's <br /> Trending?</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

const BR = <Media query="(max-width: 500px)">
  {matches =>
    matches ? (
      <br />
    ) : null
  }
</Media>

const BannerText1 = () => (
  <Fragment>

    <BannerText className="banner-text"> INNOVATION &amp; DISRUPTION </BannerText>
    <BannerSubText className="banner-subtext-padding">is the way {BR} We change the Game</BannerSubText>

    <div className="text-white" >
      <Link to={routeConstants.CONTACT_US_URL} className="text-decoration-none">
        <Button color="danger" className="text-white border-radius font-weight-bold">Contact Us</Button>
      </Link>
      <ConctactUsRightText> to change yours </ConctactUsRightText>
    </div>
  </Fragment>
)

export default HomePage;
