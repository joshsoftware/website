import React from 'react';
import { Row, Col } from "reactstrap";

import BusinessLogo from "../../assets/images/domainExpertise/business.svg"
import SolutionSVG from "../../assets/images/domainExpertise/Solution.svg"
import ImpactSVG from "../../assets/images/domainExpertise/Impact.svg"

import { Text } from "../home/homeStyledComponents.js";
import MediaCard from "./MediaCard.jsx";

const ProjectDetails = (props) => {
  const { logo, title, techStack, business, solution, impact } = props;
  return (
    <Row className="justify-content-around m-auto w-90">
      <Col md={4} className="pb-14">
        <Row>
          <Col className="justify-content-center d-flex m-auto p-3">
            <Text color="#CF4338" fontSize={22} className="text-center">{title}</Text>
          </Col>
        </Row>

        <Row>
          <Col>
            <img
              src={ require(`../../assets/images/domainExpertise/Products/${logo}`) }
              alt={ title }
              className="img-fluid m-auto"
            />
          </Col>
        </Row>

        <Row className="justify-content-around m-auto">
          {techStack.length && <Text color="#CF4338" fontSize="19">Tech Stack</Text>}
        </Row>

        <Row className="align-items-center justify-content-center">
          {
            techStack.map(tech => {
              return <Col md={3} sm={3} xs={3}>
                <img
                  src={
                    require(`../../assets/images/domainExpertise/${ tech.toLowerCase() }.png`)
                  }
                  alt={ tech }
                  key={ tech }
                />
              </Col>
            })
          }
        </Row>
      </Col>

      <Col md={8} >
        <MediaCard
          logo={ BusinessLogo }
          altText="business logo"
          title="Business"
          description={ business }
        />

        <MediaCard
          logo={ SolutionSVG }
          altText="solution logo"
          title="Solution"
          description={ solution }
        />

        <MediaCard
          logo={ ImpactSVG }
          altText="impact logo"
          title="Impact"
          description={ impact }
        />
      </Col>
    </Row>
  )
}

export default ProjectDetails;
