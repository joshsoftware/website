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
            <img src={logo} />
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
                <img src={BusinessLogo} />
              </Col>
              <Col md={11} xs={8} sm={8} className="align-self-center">
                <span>Business </span>
                {/* <p>A single platform that integrates player data, player profiles and coach profiles to track player progress and understand their strengths/weakness.</p> */}
              </Col>
            </Row>
            <Row>
              <Col md={{ size: 11, offset: 1 }} xs={12} sm={12}>
                {/* <span>Business </span> */}
                {/* <p>A single platform that integrates player data, player profiles and coach profiles to track player progress and understand their strengths/weakness.</p> */}
                <p>{business}</p>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col>
            <Row>
              <Col md={1} xs={2} sm={2}>
                <img src={SolutionSVG} />
              </Col>
              <Col md={11} xs={8} sm={8} className="align-self-center">
                <span>Solution </span>
              </Col>
            </Row>
            <Row>
              <Col md={{ size: 11, offset: 1 }} xs={12} sm={12}>
                {/* <p>
                A consolidated, scalable, one-click web platform that generates timely statistical reports for players, managers and coaches over 17 regions and 234 countries. Ease of communication across the entire player-coach ecosystem also enhanced, as custom pathways are created as per player needs and messages can be broadcast by admins, coaches and managers
            </p> */}
                <p>{solution}</p>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col>
            <Row>
              <Col md={1} xs={2} sm={2}>
                <img src={ImpactSVG} />
              </Col>
              <Col md={11} xs={8} sm={8} className="align-self-center">
                <span>Impact </span>
                {/* <p>A single platform that integrates player data, player profiles and coach profiles to track player progress and understand their strengths/weakness.</p> */}
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
