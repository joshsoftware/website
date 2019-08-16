import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import DomainHeader from "./domainHeader.js";
import DomainWork from "./domainWork.js";
import ExpertiesJSON from "./experties.json"
import * as routes from '../../routeConstants';
import RssFeeds from './rssFeeds.js';

const DomainExpertise = (props) => {
  return (
    <>
      <Route path={`${routes.DOMAIN_EXPERTISE}/:domain`} component={DomainExpertiseLyaout} />
      {props.location.pathname === routes.DOMAIN_EXPERTISE && <Redirect to={`${routes.DOMAIN_EXPERTISE}/health`} from={routes.DOMAIN_EXPERTISE} />}
    </>
  )
}

const DomainExpertiseLyaout = ({ match }) => {
  const selectedDomain = match.params.domain ? match.params.domain : "health";

  return (
    <section className="w-100 section-home">
      <DomainHeader selectedDomain={selectedDomain} />
      {ExpertiesJSON[match.params.domain].length !== 0 && <DomainWork domainExpertiseData={ExpertiesJSON[match.params.domain]} />}
      {ExpertiesJSON.rssFeeds[selectedDomain] && <RssFeeds rssTag={ExpertiesJSON.rssFeeds[selectedDomain]} />}
    </section>
  )
}

export default DomainExpertise;
