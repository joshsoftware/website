import React, { Fragment } from 'react'
import HomePage from './homePage.js';
import { Clients } from './clients.js';
import { Domains } from './domains.js';

const Home = () => {
  return (
    <Fragment>
      <HomePage />
      <Clients />
      <Domains />
    </Fragment>
  )
}

export default Home;
