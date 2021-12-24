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
import imgNewYear from "../../assets/images/new-year-animation-2022.gif";

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
        <InnovationsNew />
        <Clients />
        {/* <Testimonials /> */}
        <HomepageTestimonials />
        {/* <SuccessStories /> */}
        <SuccessStoriesNew />
        {/* <Company /> */}
        <ContactUs />
      </main>
      <div className="snowflakes" aria-hidden="true">
        <div className="snowflake">❅</div>
        <div className="snowflake">❆</div>
        <div className="snowflake">❅</div>
        <div className="snowflake">❆</div>
        <div className="snowflake">❅</div>
        <div className="snowflake">❆</div>
        <div className="snowflake">❅</div>
        <div className="snowflake">❆</div>
        <div className="snowflake">❅</div>
        <div className="snowflake">❆</div>
        <div className="snowflake">❅</div>
        <div className="snowflake">❆</div>
      </div>
      <img src={imgNewYear} alt="new year" className="img-new-year" />
    </>
  );
};

export default Home;
