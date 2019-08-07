import React from 'react'
import Media from 'react-media';
import { Link } from 'react-router-dom';

import mainImg from '../../assetes/images/black-bulb-image.png';
import logoM from '../../assetes/images/bulb-image-mobile.png';
import contactUsBtn from '../../assetes/images/conctact us_button.svg';
import { ParallaxImg, BannerSubText, BannerText, ConctactUsRightText, ContactUSBtnText } from "./homeStyledComponents.js"
import * as routeConstants from "../../routeConstants.js";

const HomePage = () => {
  return (
    <div style={{ backgroundColor: "#333333" }}>
      <div style={{ height: 67 }} />
      <div className="row">
        <div className="col-md-6">
          <Media query="(max-width: 900px)">
            {matches =>
              matches ? (
                <ParallaxImg logo={logoM} height="411px" />
              ) : (
                  <ParallaxImg logo={mainImg} height="721px" />
                )
            }
          </Media>
        </div>
        <div className="col-md-6 m-auto">
          <BannerText> INNOVATION &amp; DISRUPTION </BannerText>
          <BannerSubText>is the way We change the Game</BannerSubText>

          <Link to={routeConstants.CONTACT_US_URL}>
            <img src={contactUsBtn} />
          </Link>
          <ContactUSBtnText >
            <Link to={routeConstants.CONTACT_US_URL} className="text-decoration-none">
              <span className="mr-3 text-white">Contact Us</span>
            </Link>
            <ConctactUsRightText> to change yours </ConctactUsRightText>
          </ContactUSBtnText>
        </div>
      </div>
    </div>
  )
}

export default HomePage;
