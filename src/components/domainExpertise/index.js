import React from 'react'
import DomainHeader from "./domainHeader.js";
import DomainWork from "./domainWork.js";

const DomainExpertise = () => {
  return (
    <section className="w-100 section-home">
      <DomainHeader />
      <DomainWork />
      {/* <DomainUpdates />  */}
    </section>
  )
}

export default DomainExpertise;
