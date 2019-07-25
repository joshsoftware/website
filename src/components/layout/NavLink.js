import React from 'react'
import PropTypes from 'prop-types'

const NavLink = props => {
  const { url, title } = props;

  return (
    <a className="nav-item nav-link"
      href={url}
    >{title}</a>
  )
}

NavLink.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string
}

export default NavLink

