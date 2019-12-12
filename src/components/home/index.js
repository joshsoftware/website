import React, { useState } from 'react'
import BurgerMenu from 'react-burger-menu';

import HomePageCarousal from './homePageCarousal.js';
import { Clients } from './clients.js';
import Testimonials from './testimonials.js';
import Company from "./company.js";
import DomainExpertise from './domainExpertise.js'
import WhatWeDo from './whatWeDo.js';
import Innovations from './innovations.js'
import SuccessStories from './successStories.js';
import ContactUs from './contactUs.js'

import Trending from './trending.js';

const Home = () => {
  const [openTrending, setOpenTrending] = useState(false);
  const Menu = BurgerMenu["slide"];

  const toggleOpenTrending = () => setOpenTrending(!openTrending)

  const snowflakes = []

  for (var i = 0; i < 100; i++) {
    snowflakes.push(<div className="snowflake" key={i}></div>)
  }

  return (
    <>
      <div className="main-container" />
      <Menu pageWrapId={"page-wrap"} outerContainerId={"root"} right isOpen={openTrending} width="100%" disableCloseOnEsc>
        {/* <div style={{ height: 67 }} /> */}
        <Trending setOpenTrending={toggleOpenTrending} />
      </Menu>
      <main id="page-wrap" style={openTrending ? { filter: `blur(120px)` } : {}}>
      <div className="snowfall">
        {snowflakes}
      </div>
        <HomePageCarousal />
        <DomainExpertise />
        <WhatWeDo />
        <Innovations />
        <Clients />
        <Testimonials />
        <SuccessStories />
        <Company />
        <ContactUs />
      </main>
    </>
  )
}

export default Home;
