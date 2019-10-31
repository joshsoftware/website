import React from 'react';
import { Row, Col } from 'reactstrap';
import Media from "react-media";

import companyMbImg from "../../assets/images/home/company_mb.png";
import companyImg from "../../assets/images/home/company.png";
import companyBackgroundImg from "../../assets/images/home/red_background.png";
import companyBackgroundMbImg from "../../assets/images/home/red_background_mb.png";

import {CompanyDetailsText, CompanyBackground } from "./homeStyledComponents.js";

const Company = () => {
  return (
    <Media query="(max-width: 900px)">
      {matches =>
        matches ? companyComponent(companyBackgroundMbImg, companyMbImg) :
            companyComponent(companyBackgroundImg, companyImg)
      }
    </Media>
  )
}

const companyData = () => {
  return(
    <div className="grid-container">
      <CompanyDetailsText className=" grid-item text-right">
        Core Team has an average
        <strong>experience of 22 years </strong>
      </CompanyDetailsText>

      <div className="divider border-solid-left-1" />

      <CompanyDetailsText className="grid-item">
        Service clients from <strong> 14 different countries </strong>
      </CompanyDetailsText>

      <CompanyDetailsText className="grid-item  text-right"><strong>100+</strong>developers</CompanyDetailsText>

      <CompanyDetailsText className="grid-item ">
        <strong>85+</strong>Satisfied Clients
      </CompanyDetailsText>

      <CompanyDetailsText className="grid-item  text-right">
        Custom Software Solutions
        <strong>since 2007</strong>
      </CompanyDetailsText>

      <CompanyDetailsText className="grid-item ">
        Sole Technology owners for <strong>12 product startups!</strong>
      </CompanyDetailsText>

      <CompanyDetailsText className="grid-item  text-right">
        Helped <strong>5 Fortune</strong>
        500 companies
        to build Intellectual Property!
      </CompanyDetailsText>
    </div>
  )
}

const companyComponent = (backgroundImg, img) => {
  return(
    <CompanyBackground image={backgroundImg} className="container-fluid" >
      <Row className="">
        <Col>
          <img src={img} className='img-fluid mx-auto d-block' alt="Company" />
        </Col>
      </Row>
      {companyData()}
    </CompanyBackground>
  )
}

export default Company;
