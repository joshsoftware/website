import React from "react";

const TechnologyDetails = props => {
  const { name, description, logo } = props;

  return (
    <div id={name} className="card card-expertise">
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <img
          src={require(`../../assets/images/${logo}`)}
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
