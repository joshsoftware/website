import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/images/josh-logo.png";
import NavDropdown from "./NavDropdown";
import NavLink from "./NavLink";
import * as routes from "../../routeConstants.js";

const Component = props => {
  const [isOpenSidebar, toggleSidebar] = useState(false);
  const { menues } = props;

  const ref = useRef();

  return (
    <header className="josh-header fixed-top">
      <div className="container">
        <nav className="navbar navbar-expand-lg josh-navbar">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="Josh Software" />
          </Link>
          <button
            className="navbar-toggler p-0 border-0"
            type="button"
            onClick={() => toggleSidebar(!isOpenSidebar)}
            data-toggle="offcanvas"
          >
            <i className="icon-bars"></i>
          </button>
          <div
            className={`navbar-collapse offcanvas-collapse ${
              isOpenSidebar ? "open" : ""
            }`}
            id="joshOffcanvasNavbar"
            ref={ref}
          >
            <div className="navbar-nav ml-auto">
              {menues.map(menu => {
                return menu.type === "dropdown" ? (
                  <NavDropdown
                    {...menu}
                    key={menu.id}
                    closeSidebar={() => toggleSidebar(false)}
                  />
                ) : (
                  <NavLink
                    {...menu}
                    key={menu.id}
                    closeSidebar={() => toggleSidebar(false)}
                  />
                );
              })}
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

Component.defaultProps = {
  menues: [
    {
      id: 8,
      title: "Technologies",
      url: routes.TECHNOLOGIES_URL
    },
    {
      id: 1,
      title: "Industries",
      url: routes.DOMAIN_EXPERTISE
    },
    {
      id: 6,
      title: "Success Stories",
      url: routes.SUCCESS_STORIES_URL
    },
    {
      id: 5,
      title: "Blogs",
      url: "https://blog.joshsoftware.com/",
      otherDomain: true
    },
    {
      id: 9,
      title: "In News",
      items: [
        {
          id: 1,
          title: "Talks",
          url: routes.TALKS,
        },
      ],
      type: "dropdown"
    },
    {
      id: 7,
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
          url: routes.OUR_TEAM_URL
        },
        {
          id: 3,
          title: "Our Innovation",
          url: routes.INNOVATIONS
        },
        {
          id: 4,
          title: "Career",
          url: "http://careers.joshsoftware.com/",
          otherDomain: true
        },
        {
          id: 6,
          title: "Contact Us",
          url: routes.CONTACT_US_URL
        },
        {
          id: 5,
          title: "Testimonials",
          url: routes.TESTIMONIALS
        }
      ],
      type: "dropdown"
    }
  ]
};
export default Component;
