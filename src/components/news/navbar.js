import React, { useState } from "react";
import {
  Navbar,
  NavItem,
  NavLink,
  NavbarBrand,
  Collapse,
  Nav,
} from "reactstrap";
import Scrollspy from "react-scrollspy";
import Media from "react-media";

const MobileNav = (props) => {
  const [collapsed, setCollapsed] = useState(true);
  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar
        style={{ position: "fixed", width: "100%" }}
        className="news-navbar bg-light"
      >
        <NavbarBrand
          href="/news"
          className="mr-auto"
          style={{ color: "#CF4338" }}
        >
          Media Coverage
        </NavbarBrand>
        <span onClick={toggleNavbar} className="navbar-toggler">
          <svg
            aria-hidden="true"
            focusable="false"
            dataPrefix="fas"
            dataIcon="calendar-alt"
            className="svg-inline--fa fa-calendar-alt fa-w-14"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            height="25px"
            width="25px"
          >
            <path
              fill="currentColor"
              d="M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm320-196c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM192 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM64 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"
            ></path>
          </svg>
        </span>
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            {props.list.map((item, index) => (
              <NavItem key={index}>
                <NavLink href={`#${item}`} onClick={toggleNavbar}>
                  {item}
                </NavLink>
              </NavItem>
            ))}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

function Component(props) {
  return (
    <Media query="(max-width: 500px)">
      {(matches) =>
        matches ? (
          <MobileNav {...props} />
        ) : (
          <Navbar
            expand="md"
            className="bg-light news-navbar"
            style={{ position: "fixed", width: "100%" }}
          >
            <h3
              className="align-self-end offset-1"
              style={{ color: "#CF4338" }}
            >
              <b>Media Coverage</b>
            </h3>
            <Scrollspy
              offset={-300}
              items={props.list}
              currentClassName={"active"}
              className="nav navbar ml-auto"
            >
              {props.list.map((item, index) => (
                <NavItem key={index}>
                  <NavLink href={`#${item}`}>{item}</NavLink>
                </NavItem>
              ))}
            </Scrollspy>
          </Navbar>
        )
      }
    </Media>
  );
}

Component.defaultProps = {
  list: [],
};

export default Component;
