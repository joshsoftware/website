import React from 'react'
import ReactSVG from 'react-svg';

const Svg = (props) => {
  const { src } = props;

  return <ReactSVG src={src} />
}

export default Svg;
