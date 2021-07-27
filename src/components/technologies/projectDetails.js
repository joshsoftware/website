import React from "react";
import { Row, Col, Badge } from "reactstrap";
import { TECHNOLOGIES_USED } from "../../globalConstants";
import DetailsLogo from "../../assets/images/domainExpertise/details.svg";
import TechnologyStackLogo from "../../assets/images/domainExpertise/TechnologyStack.svg";
import Image from "react-image-webp";

import { Text } from "../home/homeStyledComponents.js";
import MediaCard from "../domainExpertise/MediaCard.jsx";

const ProjectDetails = (props) => {
  const {
    logo,
    title,
    techStack,
    url,
    description,
    androidAppUrl,
    iosAppUrl,
    selectedDomain,
  } = props;

  const urlForSelectedDomain = () => {
    if (selectedDomain === TECHNOLOGIES_USED.ios.toLowerCase()) {
      return iosAppUrl;
    } else if (selectedDomain === TECHNOLOGIES_USED.android.toLowerCase()) {
      return androidAppUrl;
    }
    return url;
  };

  const link = urlForSelectedDomain();
  return (
    <Row className="justify-content-around m-auto w-90">
      <Col md={4} className="pb-14">
        <Row>
          <Col className="justify-content-center d-flex m-auto p-3">
            <Text color="#CF4338" fontSize={22} className="text-center">
              {title}
              {link.length > 0 && (
                <a href={link} target="_blank" rel="noopener noreferrer">
                  <svg
                    id="i-external"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    width="20"
                    height="18"
                    fill="none"
                    stroke="currentcolor"
                    color="#CF4338"
                    fontSize={22}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  >
                    <path d="M14 9 L3 9 3 29 23 29 23 18 M18 4 L28 4 28 14 M28 4 L14 18" />
                  </svg>
                </a>
              )}
            </Text>
          </Col>
        </Row>
        <Row>
          <Col>
            {logo && (
              <Image
                src={require(`../../assets/images/domainExpertise/Products/${logo}`)}
                webp={require(`../../assets/images/domainExpertise/Products/${logo}.webp`)}
                alt={title}
                className="img-fluid m-auto"
              />
            )}
          </Col>
        </Row>
      </Col>

      <Col md={8}>
        <MediaCard
          logo={DetailsLogo}
          altText="business logo"
          title=" Details"
          description={description}
        />
        <MediaCard
          logo={TechnologyStackLogo}
          altText="solution logo"
          title=" Tech Stack"
          description={techStack.map((tech, i) => {
            return (
              <span key={i} style={{ margin: "5px", fontSize: "20px" }}>
                <Badge color="danger">{tech} </Badge>
              </span>
            );
          })}
        />
      </Col>
    </Row>
  );
};

export default ProjectDetails;
