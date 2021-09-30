import React from "react";
import { Route, Redirect, Link } from "react-router-dom";

import DomainHeader from "./domainHeader.js";
import DomainWork from "./domainWork.js";
import ExpertiesJSON from "./experties.json";
import MainBanner from "../../shared-components/mainBanner/mainbanner";
import Header from "../domainExpertise/domainHeader.js";
import CtaButton from "../../shared-components/ctaButton/ctaButton.js";
import * as routes from "../../routeConstants";
import RssFeeds from "./rssFeeds.js";
import TechnologySlider from "../../shared-components/technologySlider/technologySlider.js";
import "./domainExpertise.css";

const linkListItem = [
  {
    linkTitle: "Success Stories",
    link: routes.SUCCESS_STORIES_URL,
    linkClassName: "-success-story",
  },
  {
    linkTitle: "Innovations",
    link: routes.INNOVATIONS,
    linkClassName: "-innovation",
  },
];

const DomainExpertise = (props) => {
  return (
    <>
      <Route
        path={`${routes.DOMAIN_EXPERTISE}/:domain`}
        component={DomainExpertiseLyaout}
      />
      {props.location.pathname === routes.DOMAIN_EXPERTISE && (
        <Redirect
          to={`${routes.DOMAIN_EXPERTISE}/health`}
          from={routes.DOMAIN_EXPERTISE}
        />
      )}
    </>
  );
};

const DomainExpertiseLyaout = ({ match }) => {
  const selectedDomain = match.params.domain ? match.params.domain : "health";

  return (
    <div className="josh-content">
      <section className="main-banner-section position-relative">
        <MainBanner
          bannerClassName="industry"
          pageCaption="Industries"
          startTagLine="We"
          tagText="SERVES"
          endTagLine="our best for range of"
        />
        <Header selectedDomain={selectedDomain} />
      </section>
      <section className="main-section">
        {ExpertiesJSON[match.params.domain] &&
          ExpertiesJSON[match.params.domain].length !== 0 && (
            <DomainWork
              domainExpertiseData={ExpertiesJSON[match.params.domain]}
            />
          )}

        <div className="technology-slider-wrapper py-5">
          <h3 className="font-weight-bold text-center">Technologies</h3>
          <div className="d-flex align-items-center justify-content-center technology-link-wrap">
            <p className="mb-0">Check our work in different technologies</p>
            <Link
              to={`${routes.TECHNOLOGIES_URL}`}
              className="text-decoration-none"
            >
              <i className="icon-arrow-right" />
            </Link>
          </div>
          <TechnologySlider />
        </div>
        <CtaButton linkListItem={linkListItem} />
      </section>
    </div>
    // <section className="w-100 section-home">
    //   <DomainHeader selectedDomain={selectedDomain} />
    //   {ExpertiesJSON[match.params.domain] &&
    //     ExpertiesJSON[match.params.domain].length !== 0 && (
    //       <DomainWork
    //         domainExpertiseData={ExpertiesJSON[match.params.domain]}
    //       />
    //     )}
    //   {ExpertiesJSON.rssFeeds[selectedDomain] && (
    //     <RssFeeds rssTag={ExpertiesJSON.rssFeeds[selectedDomain]} />
    //   )}
    // </section>
  );
};

export default DomainExpertise;
