import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Layout from './layout';
import Footer from './components/layout/Footer.js';
import 'bootstrap/dist/css/bootstrap.css';
import './assetes/stylesheets/main.css';


const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Layout />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
