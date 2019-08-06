import React, { Fragment } from 'react'
import HomePage from './homePage.js';
import { Clients } from './clients.js';
import Testimonials from './testimonials.js';
import Company from "./company.js";
import DomainExperties from './domainExperties.js'
import WhatWeDo from './whatWeDo.js';

const Home = () => {
  return (
    <Fragment>
      <HomePage />
      <DomainExperties />
      <WhatWeDo />
      <Clients />
      <Testimonials />
      <Company />
    </Fragment>
  )
}

export default Home;
