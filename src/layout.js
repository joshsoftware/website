import React from 'react';
import { Switch, Route } from 'react-router-dom';
import * as routes from './routeConstants';
import AboutUs from './components/about_us';
import OurTeam from './components/team';

const Layout = () => {
  return (
    <Switch>
      <Route exact path={routes.ABOUT_US_URL} component={AboutUs} />
      <Route exact path={routes.OUR_TEAM_URL} component={OurTeam} />
    </Switch>
  );
}

export default Layout;
