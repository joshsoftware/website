import React, { Fragment } from 'react'
import TechnologiesBanner from './technologiesBanner';
import TechnologiesList from './technologiesList';

const Technologies = () => {
  return (
    <Fragment>
      <TechnologiesBanner />
      <TechnologiesList />
    </Fragment>
  )
}

export default Technologies;
