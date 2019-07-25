import React, { useState } from 'react';

import logo from '../../assetes/images/josh-logo.png';
import NavDropdown from './NavDropdown.js';
import NavLink from './NavLink.js';
import * as routes from '../../routeConstants.js'

const Component = props => {
  const [isOpenSidebar, toggleSidebar] = useState(false)
  const { menues } = props;

  return (
    <header className="josh-header fixed-top">
      <div className="container">
        <nav className="navbar navbar-expand-lg josh-navbar">
          <a className="navbar-brand" href="./">
            <img src={logo} alt="Josh Software" />
          </a>
          <button className="navbar-toggler p-0 border-0" type="button"
            onClick={() => toggleSidebar(!isOpenSidebar)}
            data-toggle="offcanvas">
            <i className="icon-bars"></i>
          </button>
          <div
            className={`navbar-collapse offcanvas-collapse ${isOpenSidebar ? 'open' : ''}`}
            id="joshOffcanvasNavbar"
          >
            <div className="navbar-nav ml-auto">
              {
                menues.map(menu => {
                  return menu.type === 'dropdown'
                    ? <NavDropdown {...menu} key={menu.id} />
                    : <NavLink {...menu} key={menu.id} />
                })
              }
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}

Component.defaultProps = {
  menues: [
    {
      id: 1,
      title: "INNOVATION",
      url: "/innovation.html"
    },
    {
      id: 2,
      title: "SERVICES",
      url: "/services.html"
    },
    {
      id: 3,
      title: "COMPANY",
      items: [
        {
          id: 1,
          title: "About Us",
          url: routes.ABOUT_US_URL
        },
        {
          id: 2,
          title: "Our Team",
          url: routes.OUR_TEAM
        }
      ],
      type: 'dropdown'
    }
  ]
}
export default Component;
