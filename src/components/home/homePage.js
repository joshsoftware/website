import React from 'react'
import mainImg from '../../assetes/images/main-page.png';
import contactUsBtn from '../../assetes/images/conctact us_button.svg';
import styles from 'styled-components';

const BannerText = styles.span`
  font-size: 30px;
  position: absolute;
  top: 400px;
  left: 0;
  padding-left: 19px;
  font-family: bold;
  line-height: 38px;
`

const BannerSubText = styles.div`
  min-width: 230px; 
  min-height: 55px;
  padding-left: 19px;
  padding-top: 9px;
  text-align: left;
  font-size: 24px;
  color: #FFFFFF;
`

const ContactUSBtnText = styles.span`
  color: white;
  position: absolute;
  left: 27px;
  top: 573px;
`

const ConctactUsRightText = styles.span`
  font-weight: bold;
  color: #FFFFFF;
`

const ParallaxImg = styles.img`
  background-image: ${(props) => `url(${props.logo})`} ;
  background-attachment: fixed;
  width: 100%;
  object-fit: cover;
  background-size: contain;
  background-position: 50% 26%;
  height: 411px;
  background-repeat: no-repeat;
`
const HomePage = () => {
  return (
    <div style={{ backgroundColor: "#333333" }}>
      <div style={{ height: 67 }} />
      <ParallaxImg logo={mainImg} />
      <BannerText> INNOVATION &amp; DISRUPTION </BannerText>
      <BannerSubText>Is the way <br />We change the Game</BannerSubText>

      <img src={contactUsBtn} />
      <ContactUSBtnText>Contact Us</ContactUSBtnText>
      <ConctactUsRightText> to change yours </ConctactUsRightText>
    </div>
  )
}

export default HomePage;
