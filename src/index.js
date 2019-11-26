import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Layout from './layout';
import Footer from './components/layout/Footer.js';
import ScrollToTop from "./hooks/scrollToTop.js";

import 'bootstrap/dist/css/bootstrap.css';
import './assets/stylesheets/main.css';
import ReactGA from 'react-ga';
ReactGA.initialize("UA-293708-3");

const App = ({ match }) => {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Navbar />
        {/* <div style={{ height: 67 }} /> */}
        <Switch>
          <Layout />
        </Switch>
        <Footer />
      </ScrollToTop>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
