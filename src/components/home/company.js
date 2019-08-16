import React from 'react';
import { Row, Col } from 'reactstrap';
import Media from "react-media";

import companyImg from "../../assets/images/home/company.png";
import companyMbImg from "../../assets/images/home/compnay_mb.png";
import { ParallaxImg, CompanyDetailsText } from "./homeStyledComponents.js";

const Company = () => {
  return (
    <Media query="(max-width: 900px)">
      {matches =>
        matches ? (
          <ParallaxImg logo={companyMbImg}  >
            <Row className="company-details">
              <Col md={6} sm={6} xs={6} >
                <CompanyDetailsText className="text-right">
                  <span> Core Team has an average </span>
                  <h5><b>experience of 22 years</b></h5></CompanyDetailsText>
              </Col>
              <Col md={6} sm={6} xs={6}>
                <CompanyDetailsText>
                  <span>Service clients from  </span>
                  <h5><b>14 different countries</b></h5>
                </CompanyDetailsText>
              </Col>
            </Row>
            <br />
            <Row className="company-details">
              <Col md={6} sm={6} xs={6} >
                <CompanyDetailsText className="text-right">
                  <h5><b> 100+</b></h5>
                  <span>Developers</span>
                </CompanyDetailsText>
              </Col>
              <Col md={6} sm={6} xs={6} >
                <CompanyDetailsText>
                  <h5><b>85+  </b></h5>
                  <span>Satisfied Clients</span>
                </CompanyDetailsText>
              </Col>
            </Row>
            <br />
            <Row className="company-details">

              <Col md={6} sm={6} xs={6}>
                <CompanyDetailsText className="text-right">
                  <span> Custom Software Solutions </span>
                  <h5><b>since 2007</b></h5>
                </CompanyDetailsText>

              </Col>
              <Col md={6} sm={6} xs={6}>
                <CompanyDetailsText>
                  <span>Sole Technology owners for</span>
                  <h5><b>
                    12 product startups!
                      </b></h5>
                </CompanyDetailsText>
              </Col>
            </Row>
            <Row className="company-details pt-3">
              <Col md={6} sm={6} xs={6} >
                <CompanyDetailsText className="text-right">
                  <span> Helped <b className="font-size-20">5 Fortune</b> 500 companies</span>
                  <br />
                  <span>to build Intellectual Property! </span>
                </CompanyDetailsText>
              </Col>
              {/* <Col md={6} sm={6} xs={6} /> */}
              <Col md={6} sm={6} xs={6} />
            </Row>
          </ParallaxImg >
        ) : (
            <ParallaxImg logo={companyImg} height="650px" >
              <Row className="company-details">
                <Col md={6} sm={6} xs={6} >
                  <CompanyDetailsText className="text-right">
                    <span> Core Team has an average </span>
                    <h5><b>experience of 22 years</b></h5></CompanyDetailsText>
                </Col>
                <Col md={6} sm={6} xs={6}>
                  <CompanyDetailsText>
                    <span>Service clients from  </span>
                    <h5><b>14 different countries</b></h5>
                  </CompanyDetailsText>
                </Col>
              </Row>
              <br />
              <Row className="company-details">
                <Col md={6} sm={6} xs={6} >
                  <CompanyDetailsText className="text-right">
                    <h5><b> 100+</b></h5>
                    <span>Developers</span>
                  </CompanyDetailsText>
                </Col>
                <Col md={6} sm={6} xs={6}>
                  <CompanyDetailsText>
                    <h5><b>85+  </b></h5>
                    <span>Satisfied Clients</span>
                  </CompanyDetailsText>
                </Col>
              </Row>
              <br />
              <Row className="company-details">
                <Col md={6} sm={6} xs={6} >
                  <CompanyDetailsText className="text-right">
                    <span> Custom Software Solutions </span>
                    <h5><b>since 2007</b></h5>
                  </CompanyDetailsText>
                </Col>
                <Col md={6} sm={6} xs={6}>
                  <CompanyDetailsText>
                    <span>Sole Technology owners for</span>
                    <h5><b>
                      12 product startups!
                      </b></h5>
                  </CompanyDetailsText>
                </Col>
              </Row>
              <br />
              <Row className="company-details">
                <Col md={6} sm={6} xs={6} >
                  <CompanyDetailsText className="text-right">
                    <span> Helped <b className="font-size-20">5 Fortune</b> 500 companies</span>
                    <br />
                    <span>to build Intellectual Property! </span>
                  </CompanyDetailsText>
                </Col>
                <Col md={6} sm={6} xs={6} />

              </Row>
            </ParallaxImg >
          )
      }
    </Media>

  )
}

export default Company;
