import React from "react";
import Image from 'react-image-webp';

const TechnologyDetails = props => {
  const { name, description, logo } = props;

  return (
    <div id={name} className="card card-expertise">
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <Image
          src={require(`../../assets/images/${logo}`)}
          webp={require(`../../assets/images/${logo}.webp`)}
          alt={`${name}-Logo`}
          className="card-img"
        />
        <p className="card-text">{description}</p>
        {/* <div className="scroll-top"><a href="#bodyTop" className="btn-scroll">go to top</a></div> */}
      </div>
    </div>
  );
};

export default TechnologyDetails;
