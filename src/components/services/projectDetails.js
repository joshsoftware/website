import React from 'react'

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
            <div className="link-box"><a href="technologies.html" className="mb-1">
              <i className="align-middle icon-arrow-right"></i>View Technologies</a>
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
