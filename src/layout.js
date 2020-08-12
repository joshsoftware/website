import React, { useEffect, Suspense, lazy } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import * as routes from "./routeConstants";
import ReactGA from "react-ga";
import Home from "./components/home";
import OurTeam from "./components/team";

const AboutUs = lazy(() => import("./components/about_us"));
const ContactUs = lazy(() => import("./components/contact_us"));
const Services = lazy(() => import("./components/services"));
const Technologies = lazy(() => import("./components/technologies"));
const SuccessStory = lazy(() => import("./components/successStories"));
const DomainExpertise = lazy(() => import("./components/domainExpertise"));
const TestimonialsList = lazy(() =>
  import("./components/testimonials/index.js")
);
const Innovation = lazy(() => import("./components/innovations"));
const News = lazy(() => import("./components/news/index.js"));
const Talks = lazy(() => import("./components/talks/index.js"));
const Publications = lazy(() => import("./components/publications/index.js"));
const WhitePapers = lazy(() => import("./components/whitePapers/index.js"));
const OpenSource = lazy(() => import("./components/opensource/index.jsx"))

const Layout = ({ location }) => {
  useEffect(() => {
    ReactGA.pageview(location.pathname + location.search);
  }, [location]);
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path={routes.ABOUT_US_URL} component={AboutUs} />
        <Route exact path={routes.OUR_TEAM_URL} component={OurTeam} />
        <Route exact path={routes.CONTACT_US_URL} component={ContactUs} />
        <Route exact path={routes.SERVICES_URL} component={Services} />
        <Route path={routes.TECHNOLOGIES_URL} component={Technologies} />
        <Route path={routes.SUCCESS_STORIES_URL} component={SuccessStory} />
        <Route path={routes.DOMAIN_EXPERTISE} component={DomainExpertise} />
        <Route exact path={routes.TESTIMONIALS} component={TestimonialsList} />
        <Route exact path={routes.INNOVATIONS} component={Innovation} />
        <Route exact path={routes.NEWS} component={News} />
        <Route exact path={routes.TALKS} component={Talks} />
        <Route path={routes.PUBLICATIONS} component={Publications} />
        <Route path={routes.WHITE_PAPERS} component={WhitePapers} />
        <Route path={routes.OPEN_SOURCE_URL} component={OpenSource} />
      </Switch>
    </Suspense>
  );
};

export default withRouter(Layout);
