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

  return (
    <>
      <div className="main-container" />
      <main id="page-wrap">
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
