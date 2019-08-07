import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";

const NavLink = props => {
  const { url, title } = props;

  return (
    < Link className="nav-item nav-link"
      to={url}
    >{title}</Link>
  )
}

NavLink.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string
}

export default NavLink

