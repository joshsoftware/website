import React from "react";
import PropTypes from "prop-types";

const ImageInCard = props => {
  const { imgSrc, imgAltText, classNames } = props;

  return <img src={imgSrc} alt={imgAltText} className={classNames} />;
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
