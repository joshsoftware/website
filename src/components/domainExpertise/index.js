import React from "react";
import { Route, Redirect, Link } from "react-router-dom";
import _ from "lodash/array";
import DomainHeader from "./domainHeader.js";
import DomainWork from "./domainWork.js";
import ExpertiesJSON from "./experties.json";
import MainBanner from "../../shared-components/mainBanner/mainbanner";
import Header from "../domainExpertise/domainHeader.js";
import CtaButton from "../../shared-components/ctaButton/ctaButton.js";
import * as routes from "../../routeConstants";
import RssFeeds from "./rssFeeds.js";
import TechnologySlider from "../../shared-components/technologySlider/technologySlider.js";
import Tile from "../../shared-components/tile/tile.js";
import SolutionSVG from "../../assets/images/domainExpertise/Solution.svg";
import ImpactSVG from "../../assets/images/domainExpertise/Impact.svg";
import "./domainExpertise.css";
import GroupedProjectsTiles from "../../shared-components/groupedProjectsTiles.js";

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
        component={DomainExpertiseLayout}
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

const DomainExpertiseLayout = ({ match }) => {
  const selectedDomain = match.params.domain ? match.params.domain : "health";
  let groupedIndustryProjects = {};
  if (match.params.domain === "all") {
    groupedIndustryProjects = _.chunk(Object.values(ExpertiesJSON).flat(), 3);
  } else {
    groupedIndustryProjects = _.chunk(ExpertiesJSON[match.params.domain], 3);
  }
  console.log(groupedIndustryProjects);
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
        <div className="container">
          <div className="tiles-wrapper d-flex flex-column align-items-center">
            <GroupedProjectsTiles groupedItems={groupedIndustryProjects} />
          </div>
        </div>
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
