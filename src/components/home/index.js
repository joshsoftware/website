import React from 'react'

import HomePageBanner from './HomePageBanner.js';
import { Clients } from './clients.js';
import Testimonials from './testimonials.js';
import Company from "./company.js";
import DomainExpertise from './domainExpertise.js';
import DomainExpertiseNew from './domainExpertiseNew.js'
import WhatWeDo from './whatWeDo.js';
import WhatWeDoNew from './whatWeDoNew.js';
import Innovations from './innovations.js'
import SuccessStories from './successStories.js';
import SuccessStoriesNew from './successStoriesNew.js';
import ContactUs from './contactUs.js';
import HomepageTestimonials from './homepageTestimonials.js'

const Home = () => {

  return (
    <>
      <main id="page-wrap">
        <HomePageBanner />
        {/* <DomainExpertise /> */}
        <DomainExpertiseNew />
        {/* <WhatWeDo /> */}
        <WhatWeDoNew />
        {/* <Innovations /> */}
        <Clients />
        {/* <Testimonials /> */}
        <HomepageTestimonials />
        {/* <SuccessStories /> */}
        <SuccessStoriesNew />
        {/* <Company /> */}
        <ContactUs />
      </main>
    </>
  )
}

export default Home;
