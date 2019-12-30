import React from "react";
import PropTypes from "prop-types";

const IconWithLink = props => {
  const { url, iconClass } = props;

  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <i className={iconClass}></i>
    </a>
  );
};

IconWithLink.propTypes = {
  url: PropTypes.string.isRequired,
  iconClass: PropTypes.string.isRequired
};

export default IconWithLink;
