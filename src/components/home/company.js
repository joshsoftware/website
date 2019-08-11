import React from 'react';
import { Row, Col } from 'reactstrap';
import Media from "react-media";

import companyImg from "../../assets/images/company.png";
import companyMbImg from "../../assets/images/home/compnay_mb.png";
import { ParallaxImg, CompanyDetailsText } from "./homeStyledComponents.js";

const Company = () => {
  return (
    <Media query="(max-width: 900px)">
      {matches =>
        matches ? (
          <ParallaxImg logo={companyMbImg} height="634px" >
            <Row className="company-details">
              <Col md={6} sm={6} xs={6} >
                <CompanyDetailsText className="text-right"><h5> X </h5>
                  <span>Countries</span></CompanyDetailsText>
              </Col>
              <Col md={6} sm={6} xs={6}>
                <CompanyDetailsText>
                  <h5>12+ Years </h5>
                  <span>
                    Industry Experience
                  </span>
                </CompanyDetailsText>
              </Col>
            </Row>
            <br />
            <Row className="company-details">
              <Col md={6} sm={6} xs={6} >
                <CompanyDetailsText className="text-right"><h5> 65%</h5>
                  <span>Clients that are <br />working with us for <br /> more than 5 years</span></CompanyDetailsText>
              </Col>
              <Col md={6} sm={6} xs={6}>
                <CompanyDetailsText>
                  <h5>100+  </h5><span>
                    Clients
                    </span>
                </CompanyDetailsText>
              </Col>
            </Row>
            <br />
            <Row className="company-details">
              <Col md={6} sm={6} xs={6} >
                <CompanyDetailsText className="text-right"><h5> 35 </h5>
                  <span>Mentored and created<br /> business model for <br />start-ups
                </span>
                </CompanyDetailsText>
              </Col>
              <Col md={6} sm={6} xs={6}>
                <CompanyDetailsText>
                  <h5>7</h5><span>
                    From one person company<br />to received funding
                    </span>
                </CompanyDetailsText>
              </Col>
            </Row>
          </ParallaxImg >
        ) : (
            <ParallaxImg logo={companyImg} height="721px" >
              <Row className="company-details">
                <Col md={6} sm={6} xs={6} >
                  <CompanyDetailsText className="text-right"><h5> X </h5>
                    <span>Countries</span></CompanyDetailsText>
                </Col>
                <Col md={6} sm={6} xs={6}>
                  <CompanyDetailsText>
                    <h5>12+ Years </h5><span>
                      Industry Experience</span>
                  </CompanyDetailsText>
                </Col>
              </Row>
              <br />
              <Row className="company-details">
                <Col md={6} sm={6} xs={6} >
                  <CompanyDetailsText className="text-right"><h5> 65%</h5>
                    <span>Clients that are working with us for <br /> more than 5 years</span></CompanyDetailsText>
                </Col>
                <Col md={6} sm={6} xs={6}>
                  <CompanyDetailsText>
                    <h5>100+  </h5><span>
                      Clients</span>
                  </CompanyDetailsText>
                </Col>
              </Row>
              <br />
              <Row className="company-details">
                <Col md={6} sm={6} xs={6} >
                  <CompanyDetailsText className="text-right"><h5> 35 </h5>
                    <span>Mentored and created<br /> business model for <br />start-ups</span></CompanyDetailsText>
                </Col>
                <Col md={6} sm={6} xs={6}>
                  <CompanyDetailsText>
                    <h5>7</h5><span>
                      From one person company<br />to received funding
                      </span>
                  </CompanyDetailsText>
                </Col>
              </Row>
            </ParallaxImg >
          )
      }
    </Media>

  )
}

export default Company;
