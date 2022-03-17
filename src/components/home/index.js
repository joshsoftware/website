import React from "react";

import HomePageBanner from "./HomePageBanner.js";
import { Clients } from "./clients.js";
// import Testimonials from './testimonials.js';
// import Company from "./company.js";
// import DomainExpertise from './domainExpertise.js';
import DomainExpertiseNew from "./domainExpertiseNew.js";
import Technologies from "./technolgies.js";
// import WhatWeDo from './whatWeDo.js';
import WhatWeDoNew from "./whatWeDoNew.js";
// import Innovations from './innovations.js';
import InnovationsNew from "./innovationsNew.js";
// import SuccessStories from './successStories.js';
import SuccessStoriesNew from "./successStoriesNew.js";
import ContactUs from "./contactUs.js";
import HomepageTestimonials from "./homepageTestimonials.js";
import { ImageCard } from "../../shared-components/index.js";
import innovationImg from "../../assets/images/revampImages/our-innovation.png";
import successStoryImg from "../../assets/images/revampImages/our-success-stories.png";
import AboutUs from "./aboutUs.js";
import Review from "./review.js";
const Home = () => {
  return (
    <>
      <main id="page-wrap">
        <HomePageBanner />
        {/* <DomainExpertise /> */}
        <DomainExpertiseNew />
        <Technologies />
        {/* <WhatWeDo /> */}
        <WhatWeDoNew />
        {/* <Innovations /> */}
        {/* <InnovationsNew /> */}
        <ImageCard
          cardTitle="Our Innovations"
          cardDescription="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore sed do eiusmod tempor incididunt ut labore sed do eiusmod tempor incididunt ut labore"
          cardImg={innovationImg}
        />
        <Clients />
        {/* <Testimonials /> */}
        <HomepageTestimonials />
        {/* <SuccessStories /> */}
        {/* <SuccessStoriesNew /> */}
        <Review />
        <ImageCard
          cardTitle="Our Success Stories"
          cardDescription="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore sed do eiusmod tempor incididunt ut labore sed do eiusmod tempor incididunt ut labore"
          cardImg={successStoryImg}
        />
        <AboutUs />
        {/* <Company /> */}
        <ContactUs />
      </main>
    </>
  );
};

export default Home;
