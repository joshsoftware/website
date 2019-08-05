import React from 'react'
import mainImg from '../../assetes/images/black-bulb-image.png';
import contactUsBtn from '../../assetes/images/conctact us_button.svg';
// import styles from 'styled-components';
import { ParallaxImg, BannerSubText, BannerText, ConctactUsRightText, ContactUSBtnText } from "./homeStyledComponents.js"


const HomePage = () => {
  return (
    <div style={{ backgroundColor: "#333333" }}>
      <div style={{ height: 67 }} />
      <div className="row">
        <div className="col-md-6">
          <ParallaxImg logo={mainImg} />
        </div>
        <div className="col-md-6">
          <BannerText> INNOVATION &amp; DISRUPTION </BannerText>
          <BannerSubText>Is the way <br />We change the Game</BannerSubText>

          <img src={contactUsBtn} />
          <ContactUSBtnText>Contact Us</ContactUSBtnText>
          <ConctactUsRightText> to change yours </ConctactUsRightText>
        </div>
      </div>
    </div>
  )
}

export default HomePage;
