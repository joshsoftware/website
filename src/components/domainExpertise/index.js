import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import DomainHeader from "./domainHeader.js";
import DomainWork from "./domainWork.js";
import ExpertiesJSON from "./experties.json"
import * as routes from '../../routeConstants';

const DomainExpertise = ({ match }) => {

  return (
    <>
      <Route path={`${routes.DOMAIN_EXPERTISE}/:domain`} component={DomainExpertiseLyaout} />
      <Redirect to={`${routes.DOMAIN_EXPERTISE}/health`} />
    </>
  )
}

const DomainExpertiseLyaout = ({ match }) => {
  const selectedDomain = match.params.domain ? match.params.domain : "health";

  return (
    <section className="w-100 section-home">
      <DomainHeader selectedDomain={selectedDomain} />
      <DomainWork domainExpertiseData={ExpertiesJSON[match.params.domain]} />
    </section>
  )
}

export default DomainExpertise;
