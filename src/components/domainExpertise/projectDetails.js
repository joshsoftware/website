import React from 'react';
import { Row, Col } from "reactstrap";
import BusinessLogo from "../../assets/images/domainExpertise/business.svg"
import SolutionSVG from "../../assets/images/domainExpertise/Solution.svg"
import ImpactSVG from "../../assets/images/domainExpertise/Impact.svg"

const ProjectDetails = (props) => {
  const { logo, title, techStack, techLogoMap, business, solution, impact } = props;
  return (
    <Row className="justify-content-around m-auto w-90">
      <Col md={4}>
        <Row>
          <Col>
            <h1>{title}</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <img src={require(`../../assets/images/domainExpertise/${logo}`)} alt={title} />
          </Col>
        </Row>
        <br />
        <Row className="justify-content-around m-auto"><h5>Tech Stack</h5></Row>
        <Row>
          <Col>
            {techStack.map(tech => {
              return <img src={techLogoMap[tech]} alt={tech} />
            })}
          </Col>
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
                <span>Business </span>
              </Col>
            </Row>
            <Row>
              <Col md={{ size: 11, offset: 1 }} xs={12} sm={12}>
                <p>{business}</p>
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
                <span>Solution </span>
              </Col>
            </Row>
            <Row>
              <Col md={{ size: 11, offset: 1 }} xs={12} sm={12}>
                <p>{solution}</p>
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
                <span>Impact </span>
              </Col>
            </Row>
            <Row>
              <Col md={{ size: 11, offset: 1 }} xs={12} sm={12}>
                {impact}
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </Row >
  )
}

export default ProjectDetails;
