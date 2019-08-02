import React, { Fragment } from 'react'
import HomePage from './homePage.js';
import { Clients } from './clients.js';

const Home = () => {
  return (
    <Fragment>
      <HomePage />
      <Clients />
    </Fragment>
  )
}

export default Home;
