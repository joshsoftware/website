import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/images/josh-iso-logo.svg";
import NavDropdown from "./NavDropdown";
import NavLink from "./NavLink";
import * as routes from "../../routeConstants.js";

const Component = (props) => {
  const [isOpenSidebar, toggleSidebar] = useState(false);
  const { menues, socialIcons } = props;

  const ref = useRef();

  return (
    <header className="header-josh fixed-top bg-white navbar-light d-flex align-items-center">
      <div className="container">
        <nav className="navbar navbar-expand-lg">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="Josh Software" />
          </Link>
          <button
            className="navbar-toggler border-0"
            type="button"
            onClick={() => toggleSidebar(!isOpenSidebar)}
            data-toggle="offcanvas"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`navbar-collapse offcanvas-collapse ${
              isOpenSidebar ? "open" : ""
            }`}
            id="joshOffcanvasNavbar"
            ref={ref}
          >
            <div className="mobile-sidebar-header d-flex justify-content-between align-items-center">
              <button
                className="navbar-toggler border-0"
                type="button"
                onClick={() => toggleSidebar(!isOpenSidebar)}
                data-toggle="offcanvas"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
            </div>
            <ul className="navbar-nav mr-auto align-items-lg-center">
              {menues.map((menu) => {
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
            </ul>
          </div>
          <ul className="social-media-link-wrap list-unstyled pl-0 mb-0 d-flex">
            {socialIcons.map((socialItems, i) => {
              return (
                <li>
                  <a
                    className="fb-icon"
                    href={socialItems.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={require(`../../assets/images/revampImages/${socialItems.icon}`)}
                      alt="Facebook Icon"
                      className="social-media-icon"
                    />
                  </a>
                </li>
              );
            })}
          </ul>
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
      url: routes.TECHNOLOGIES_URL,
    },
    {
      id: 1,
      title: "Industries",
      url: routes.DOMAIN_EXPERTISE,
    },
    {
      id: 6,
      title: "Success Stories",
      url: routes.SUCCESS_STORIES_URL,
    },
    {
      id: 5,
      title: "Blogs",
      url: "https://blog.joshsoftware.com/",
      otherDomain: true,
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
        {
          id: 2,
          title: "Publications",
          url: routes.PUBLICATIONS,
        },
        {
          id: 3,
          title: "Media Coverage",
          url: routes.NEWS,
        },
        {
          id: 4,
          title: "White Papers",
          url: routes.WHITE_PAPERS,
        },
      ],
      type: "dropdown",
    },
    {
      id: 6,
      title: "careers",
      url: "https://careers.joshsoftware.com/",
    },
    {
      id: 7,
      title: "COMPANY",
      items: [
        {
          id: 1,
          title: "About Us",
          url: routes.ABOUT_US_URL,
        },
        {
          id: 2,
          title: "Our Team",
          url: routes.OUR_TEAM_URL,
        },
        {
          id: 3,
          title: "Our Innovation",
          url: routes.INNOVATIONS,
        },
        {
          id: 6,
          title: "Contact Us",
          url: routes.CONTACT_US_URL,
        },
        {
          id: 5,
          title: "Testimonials",
          url: routes.TESTIMONIALS,
        },
      ],
      type: "dropdown",
    },
  ],

  socialIcons: [
    {
      icon: "instagram.png",
      url: "https://facebook.com/joshsoftware",
    },
    {
      icon: "twitter.png",
      url: "https://twitter.com/joshsoftware",
    },
    {
      icon: "linkedin.png",
      url: "http://www.linkedin.com/company/josh-software-private-limited",
    },
    {
      icon: "facebook.png",
      url: "https://facebook.com/joshsoftware",
    },
  ],
};
export default Component;
