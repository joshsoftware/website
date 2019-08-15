import React from 'react';

import DomainHeader from "./domainHeader.js";
import DomainWork from "./domainWork.js";
import ExpertiesJSON from "./experties.json"

const DomainExpertise = ({ match }) => {
  return (
    <section className="w-100 section-home">
      <DomainHeader selectedDomain={match.params.domain} />
      <DomainWork domainExpertiseData={ExpertiesJSON[match.params.domain]} />
      {/* <DomainUpdates />  */}
    </section>
  )
}

export default DomainExpertise;
