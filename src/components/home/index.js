import React from 'react'

import HomePageCarousal from './homePageCarousal.js';
import { Clients } from './clients.js';
import Testimonials from './testimonials.js';
import Company from "./company.js";
import DomainExpertise from './domainExpertise.js'
import WhatWeDo from './whatWeDo.js';
import Innovations from './innovations.js'
import SuccessStories from './successStories.js';
import ContactUs from './contactUs.js'

const Home = () => {
  const snowflakes = []

  for (var i = 0; i < 100; i++) {
    snowflakes.push(<div className="snowflake" key={i}></div>)
  }

  return (
    <>
      <div className="main-container" />
      <main id="page-wrap">
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
