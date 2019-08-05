import React from 'react';
import { Row, Col } from 'reactstrap';

import companyImg from "../../assetes/images/company.png"
import { ParallaxImg, CompanyDetailsText } from "./homeStyledComponents.js";

const Company = () => {
  return (
    <ParallaxImg logo={companyImg} height="721" >
      <Row className="company-details">
        <Col sm="6" >
          <CompanyDetailsText pull="right" dir="rtl" width="10px"><h5> X </h5>Countries</CompanyDetailsText>
        </Col>
        <Col sm="6">
          <CompanyDetailsText width="150px"><h5>12+ Years </h5>Industry Experience</CompanyDetailsText>
        </Col>
      </Row>

    </ParallaxImg >
  )
}

export default Company;
