import React from "react";
import PropTypes from "prop-types";
import "./domainDetails.css";

const DomainDetails = ({ className, domainDescription, src, domainTitle }) => {
  return (
    <li className={`domain-details-card ${className}`}>
      <div className="domain-details-image">
        <img src={src} alt="domain-details-img" />
      </div>

      <h4 className="font-weight-bold mb-3">{domainTitle}</h4>
      <p className="mb-2">{domainDescription}</p>
    </li>
  );
};

DomainDetails.propTypes = {
  className: PropTypes.string,
};

DomainDetails.defaultProps = {
  className: "",
};

export default DomainDetails;
