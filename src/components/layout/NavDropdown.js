import React, { useState } from 'react';
import { Link } from "react-router-dom";

const NavDropdown = props => {
  const [isOpen, toggle] = useState(false);
  const { items } = props;

  return (
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
        {
          items.map(item => {
            return <Link to={item.url} className="dropdown-item" key={item.id}>{item.title}</Link>
          })
        }
      </div>
    </div>
  )
}

export default NavDropdown;
