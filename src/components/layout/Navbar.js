import React, { useState, useRef } from 'react';
import Media from 'react-media';
import { Link } from 'react-router-dom';

import logo from '../../assets/images/josh-logo-web.svg';
import logoM from '../../assets/images/josh-logo1.svg';
import hamburger from "../../assets/images/hamburger.svg"

import NavDropdown from './NavDropdown.js';
import NavLink from './NavLink.js';
import * as routes from '../../routeConstants.js'
import { useOnClickedOutside } from '../../hooks/useOnClickedOutside';

const Component = props => {
  const [isOpenSidebar, toggleSidebar] = useState(false)
  const { menues } = props;

  const ref = useRef();
  useOnClickedOutside(ref, () => toggleSidebar(false));
  /** Right Navigation Bar */
  const Navigations = (
    <>
      <button className="navbar-toggler p-0 border-0 ml-n2 mt-2" type="button"
        onClick={() => toggleSidebar(!isOpenSidebar)}
        data-toggle="offcanvas">
        <img src={hamburger} alt="Menu" />
      </button>
      <div
        className={`navbar-collapse offcanvas-collapse mt-4 mb-2 ${isOpenSidebar ? 'open' : ''}`}
        id="joshOffcanvasNavbar"
        ref={ref}
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
    </>
  )

  return (
    <header className="josh-header fixed-top">
      <div className="container header-new">
        <nav className="navbar navbar-expand-lg josh-navbar ">
          <div className="row">
            <div className="col-md-4 ">
              <Link className="navbar-brand pt-0 pb-md-1" to="/" activeClassName="text-decoration-none">
                <Media query="(max-width: 700px)">
                  {matches =>
                    matches ? (
                      <img src={logoM} alt="Josh Software" className="ml-n2 mt-n2" />
                    ) : (
                        <img src={logo} alt="Josh Software" />
                      )
                  }
                </Media>

              </Link>
            </div>
            <div className="col-md-8">
              <Media query="(max-width: 900px)">
                {matches =>
                  matches ? (
                    null
                  ) : Navigations
                }
              </Media>
            </div>
          </div>
          <Media query="(max-width: 900px)">
            {matches =>
              matches ? (
                Navigations
              ) : null
            }
          </Media>

        </nav>
      </div>
    </header >
  )
}

Component.defaultProps = {
  menues: [
    {
      id: 1,
      title: "Domain Expertise",
      url: `${routes.DOMAIN_EXPERTISE}`
    },
    {
      id: 3,
      title: "Our Innovation",
      url: routes.INNOVATIONS
    },
    {
      id: 6,
      title: "Success Stories",
      url: routes.SUCCESS_STORIES_URL
    },
    ,
    {
      id: 4,
      title: "Career",
      url: "http://careers.joshsoftware.com/",
      otherDomain: true
    },
    {
      id: 5,
      title: "Blog",
      url: "https://blog.joshsoftware.com/",
      otherDomain: true
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
          id: 4,
          title: "Contact Us",
          url: routes.CONTACT_US_URL,
        },
        {
          id: 5,
          title: "Testimonials",
          url: routes.TESTIMONIALS
        },
      ],
      type: 'dropdown'
    }
  ]
}
export default Component;
