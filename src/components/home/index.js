import React, { Fragment } from 'react'
import HomePage from './homePage.js';
import { Clients } from './clients.js';
import Testimonials from './testimonials.js';

const Home = () => {
  return (
    <Fragment>
      <HomePage />
      <Clients />
      <Testimonials />
    </Fragment>
  )
}

export default Home;
