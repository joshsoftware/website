import React from "react";
import PropTypes from "prop-types";

const ImageInCard = props => {
  const { imgSrc, imgAltText, className } = props;

  return <img src={imgSrc} alt={imgAltText} className={className} />;
};

ImageInCard.propTypes = {
  imgSrc: PropTypes.string,
  imgAltText: PropTypes.string.isRequired,
  classNames: PropTypes.string
};

ImageInCard.defaultProps = {
    imgSrc: "",
    classNames: ""
}

export default ImageInCard;
