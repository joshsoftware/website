import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Layout from './layout';
import Footer from './components/layout/Footer.js';

import 'bootstrap/dist/css/bootstrap.css';
import './assets/stylesheets/main.css';


const App = ({ match }) => {
  return (
    <BrowserRouter>
      <Navbar />
      {/* <div style={{ height: 67 }} /> */}
      <Switch>
        <Layout />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
