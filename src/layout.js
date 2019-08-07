import React from 'react';
import { Switch, Route } from 'react-router-dom';
import * as routes from './routeConstants';
import AboutUs from './components/about_us';
import OurTeam from './components/team';
import Home from './components/home';
import ContactUs from './components/contact_us';

const Layout = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path={routes.ABOUT_US_URL} component={AboutUs} />
      <Route exact path={routes.OUR_TEAM_URL} component={OurTeam} />
      <Route exact path={routes.CONTACT_US} component={ContactUs} />
    </Switch>
  );
}

export default Layout;
