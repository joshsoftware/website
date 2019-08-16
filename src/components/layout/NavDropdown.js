import React, { useState, useRef } from 'react';
import { NavLink as Link } from "react-router-dom";

import { useOnClickedOutside } from '../../hooks/useOnClickedOutside.js';

const NavDropdown = props => {
  const [isOpen, toggle] = useState(false);
  const { items, closeSidebar } = props;

  const ref = useRef();
  useOnClickedOutside(ref, () => toggle(false));

  const toggleNavigations = () => {
    toggle(!isOpen);
    closeSidebar();
  }

  return (
    <div className={`dropdown ${isOpen ? 'show' : ''}`} ref={ref}>
      <a
        href='#company'
        className="nav-item nav-link dropdown-toggle mb-10px"
        id="companyDropdownMenu"
        data-toggle="dropdown"
        aria-haspopup="true"
        onClick={() => toggle(!isOpen)}
        aria-expanded={isOpen}>
        Company
      </a>
      <div className={`dropdown-menu ${isOpen ? 'show' : ''}`} aria-labelledby="companyDropdownMenu">
        {
          items.map(item => {
            return item.otherDomain
              ? <a href={item.url} className="dropdown-item">{item.title}</a>
              : <Link to={item.url}
                className="dropdown-item"
                key={item.id}
                onClick={toggleNavigations}
              >{item.title}</Link>
          })
        }
      </div>
    </div>
  )
}

export default NavDropdown;
