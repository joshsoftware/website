import React from "react";

import { Card, CardBody } from "../../core-components";
import clientProfile from "../../assets/images/clients/placeholder@2x.png";
import "./testimonialItem.css";

const TestimonialItem = ({
  clientDesc,
  clientName,
  clientDesignation,
  clientCompany,
}) => {
  return (
    <Card className="testimonial-card-content border-0">
      <CardBody className="p-0">
        <div className="client-content d-flex">
          <div className="client-profile d-flex">
            <img
              src={clientProfile}
              alt="profile icon"
              className="profile-img mb-3"
            />
            <div className="client-details">
              <h6 className="font-weight-bold mb-3">{clientName}</h6>
              <p className="client-designation-text font-weight-bold mb-1">
                {clientDesignation}
              </p>
              <p className="client-company-text mb-0">{clientCompany}</p>
            </div>
          </div>
          <div className="client-testimonial-info scroll-y">{clientDesc}</div>
        </div>
      </CardBody>
    </Card>
  );
};

export default TestimonialItem;
