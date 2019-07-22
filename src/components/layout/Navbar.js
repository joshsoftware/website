import React, { useState } from 'react';
import logo from '../../assetes/images/josh-logo.png';
import { Link } from "react-router-dom";
import * as routes from '../../routeConstants';

const Component = props => {
  const [isOpen, toggle] = useState(false);
  return (
    <header className="josh-header fixed-top">
      <div className="container">
        <nav className="navbar navbar-expand-lg josh-navbar">
          <a className="navbar-brand" href="./">
            <img src={logo} alt="Josh Software"/>
          </a>
          <div className="navbar-collapse offcanvas-collapse" id="joshOffcanvasNavbar">
            <div className="navbar-nav ml-auto">
              <div className={`dropdown ${isOpen ? 'show' : ''}`}>
                <a
                  href='#'
                  className="nav-item nav-link dropdown-toggle"
                  id="companyDropdownMenu"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  onClick={() => toggle(!isOpen)}
                  aria-expanded={isOpen}>
                  Company
                </a>
                <div className={`dropdown-menu ${isOpen ? 'show' : ''}`} aria-labelledby="companyDropdownMenu">
                  <Link to={routes.ABOUT_US_URL} className="dropdown-item"> About Us </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Component;
