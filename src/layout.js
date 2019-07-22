import React from 'react';
import { Switch, Route } from 'react-router-dom';
import * as routes from './routeConstants';
import AboutUs from  './components/about_us';

const Layout = () => {
  return (
    <Switch>
      <Route exact path={routes.ABOUT_US_URL} component={AboutUs} />
    </Switch>
  );
}

export default Layout;
