import React from "react";
import { Card, CardBody } from "reactstrap";
import "./testimonialItem.css";
import clientProfile from "../../assets/images/revampImages/unnamed.png";

const TestimonialItem = ({
  clientProfile,
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
              className="profile-img"
            />
            <div className="client-details">
              <h6 className="font-weight-bold">{clientName}</h6>
              <p className="client-designation-text font-weight-bold mb-2">
                {clientDesignation}
              </p>
              <p className="client-company-text mb-0">{clientCompany}</p>
            </div>
          </div>
          <div className="client-testimonial-info">{clientDesc}</div>
        </div>
      </CardBody>
    </Card>
  );
};

export default TestimonialItem;
