import React from 'react';
import { Link } from "react-router-dom";

import { TECHNOLOGIES_URL } from "../../routeConstants.js";

const ProjectDetails = (props) => {
  const { title, description, logo } = props;

  return (
    <div className="card card-expertise card-work">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <div className="portfolio-wrap">
          <div className="portfolio-img">
            <img src={require(`../../assetes/images/${logo}`)} alt="IOT-Logo" className="img-fluid" /></div>
          <div className="portfolio-info">
            <p className="card-text">{description}</p>
            <div className="link-box">
              <Link to={TECHNOLOGIES_URL} className="mb-1">
                <i className="align-middle icon-arrow-right"></i>View Technologies
              </Link>
              <a href="industries.html"><i className="align-middle icon-arrow-right">
              </i>View Domains</a></div>
          </div>
        </div>
        <div className="scroll-top"><a href="#bodyTop" className="btn-scroll">go to top</a></div>
      </div>
    </div>
  )
}

export default ProjectDetails;
