import React, { useState, useRef } from "react";
import { NavLink as Link } from "react-router-dom";

import { useOnClickedOutside } from "../../hooks/useOnClickedOutside.js";

const NavDropdown = (props) => {
  const [isOpen, toggle] = useState(false);
  const { title, items, closeSidebar } = props;

  const ref = useRef();
  useOnClickedOutside(ref, () => toggle(false));

  const toggleNavigations = () => {
    toggle(!isOpen);
    closeSidebar();
  };

  return (
    <div className={`dropdown ${isOpen ? "show" : ""}`} ref={ref}>
      <a
        href="#company"
        className="nav-item nav-link dropdown-toggle text-uppercase"
        id="companyDropdownMenu"
        data-toggle="dropdown"
        aria-haspopup="true"
        onClick={() => toggle(!isOpen)}
        aria-expanded={isOpen}
      >
        {title}
      </a>
      <div
        className={`dropdown-menu dropdown-menu-lg-right border-0 m-0 ${
          isOpen ? "show" : ""
        }`}
        aria-labelledby="companyDropdownMenu"
        ref={ref}
      >
        {items.map((item) => {
          return item.otherDomain ? (
            <a
              href={item.url}
              className="dropdown-item text-uppercase"
              key={item.id}
            >
              {item.title}
            </a>
          ) : (
            <Link
              to={item.url}
              className="dropdown-item text-uppercase"
              key={item.id}
              onClick={toggleNavigations}
            >
              {item.title}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default NavDropdown;
