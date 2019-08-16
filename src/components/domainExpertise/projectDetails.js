import React from 'react';
import { Row, Col } from "reactstrap";
import BusinessLogo from "../../assets/images/domainExpertise/business.svg"
import SolutionSVG from "../../assets/images/domainExpertise/Solution.svg"
import ImpactSVG from "../../assets/images/domainExpertise/Impact.svg"

import { Text, Paragraph } from "../home/homeStyledComponents.js";

const ProjectDetails = (props) => {
  const { logo, title, techStack, business, solution, impact } = props;
  return (
    <Row className="justify-content-around m-auto w-90">
      <Col md={4}>
        <Row>
          <Col className="justify-content-center d-flex m-auto p-3">
            <Text color="#CF4338" fontSize={22} className="text-center">{title}</Text>
          </Col>
        </Row>
        <Row>
          <Col md={2} />
          <Col md={10} xs={12} sm={12}>
            <img src={require(`../../assets/images/domainExpertise/${logo}`)} alt={title} className="img-responsive" />
          </Col>
        </Row>
        <br />
        <Row className="justify-content-around m-auto">
          {techStack.length && <Text color="#CF4338" fontSize="19">Tech Stack</Text>}
        </Row>
        <Row>
          {techStack.map(tech => {
            return <Col md={3} sm={3} xs={3}><img src={require(`../../assets/images/domainExpertise/${tech.toLowerCase()}.png`)} alt={tech} key={tech}/></Col>
          })}

        </Row>
      </Col>
      <Col md={8} >
        <Row>
          <Col>
            <Row>
              <Col md={1} xs={2} sm={2}>
                <img src={BusinessLogo} alt="Business" />
              </Col>
              <Col md={11} xs={8} sm={8} className="align-self-center">
                <Text fontSize="20" color="#CF4338">Business </Text>
              </Col>
            </Row>
            <Row className="pt-xs-5">
              <Col md={{ size: 10, offset: 1 }} xs={12} sm={12} className="text-justify">
                <Paragraph fontSize="14">{business}</Paragraph>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col>
            <Row>
              <Col md={1} xs={2} sm={2}>
                <img src={SolutionSVG} alt="Solution" />
              </Col>
              <Col md={11} xs={8} sm={8} className="align-self-center">
                <Text fontSize="20" color="#CF4338">Solution </Text>
              </Col>
            </Row>
            <Row>
              <Col md={{ size: 10, offset: 1 }} xs={12} sm={12} className="text-justify">
                <Paragraph fontSize="14">{solution}</Paragraph>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col>
            <Row>
              <Col md={1} xs={2} sm={2}>
                <img src={ImpactSVG} alt="Impact" />
              </Col>
              <Col md={11} xs={8} sm={8} className="align-self-center">
                <Text fontSize="20" color="#CF4338">Impact </Text>
              </Col>
            </Row>
            <Row>
              <Col md={{ size: 10, offset: 1 }} xs={12} sm={12} className="text-justify">
                <Paragraph fontSize="14">{impact}</Paragraph>
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

export default ProjectDetails;
