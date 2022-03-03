import React from "react";
import PropTypes from "prop-types";

const IconWithLink = (props) => {
  const { url, iconClass, onClick } = props;

  return (
    <a href={url} target="_blank" rel="noopener noreferrer" onClick={onClick}>
      <i className={iconClass}></i>
    </a>
  );
};

IconWithLink.propTypes = {
  url: PropTypes.string.isRequired,
  iconClass: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default IconWithLink;
