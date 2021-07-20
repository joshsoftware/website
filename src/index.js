import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch } from "react-router-dom";
import ReactGA from "react-ga";

import * as serviceWorker from "./serviceWorker";
import Navbar from "./components/layout/Navbar";
import Layout from "./layout";
import Footer from "./components/layout/Footer.js";
import ScrollToTop from "./hooks/scrollToTop.js";

import "./assets/stylesheets/main.css";

ReactGA.initialize("UA-123082738-1");
serviceWorker.register();

const App = ({ match }) => {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Navbar />
        <Switch>
          <Layout />
        </Switch>
        <Footer />
      </ScrollToTop>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
