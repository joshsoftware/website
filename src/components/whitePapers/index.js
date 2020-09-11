import React from "react";
import Media from "react-media";
import { S3_IMAGS_PATH } from "../../globalConstants.js";
import { Row, Col, Button, Card, CardBody } from "reactstrap";

const Header = () => (
  <Media query="(max-width: 500px)">
    {matches =>
      matches ? (
        <Row className="justify-content-center mt-5 pt-2">
          <Col>
            <h2 align="center" style={{ color: "black" }}>
              <b>OUR WHITEPAPERS</b>
            </h2>
          </Col>
        </Row>
      ) : (
        <Row className="justify-content-center pb-4 pt-4">
          <Col>
            <h2 align="center" style={{ color: "black" }}>
              <b>OUR WHITE PAPERS</b>
            </h2>
          </Col>
        </Row>
      )
    }
  </Media>
);

const WhitePapers = ({ whitePapers }) => {
  return (
    <div className="section-content gray-back">
      <Header />
      {whitePapers.map((whitePaper, i) => (
        <div className="container pb-4" key={i}>
          <Card
            style={{
              border: "2px solid lightgrey",
              borderRadius: "2rem",
              boxShadow: "5px 5px 5px 5px #aaaaaa"
            }}
          >
            <CardBody>
              <Row className="justify-content-md-center">
                <Col md="3" lg="3" sm="6" className="pr-lg-0">
                  <img
                    src={whitePaper.imageUrl}
                    alt={whitePaper.title}
                    height="270"
                    width="210"
                    className="img-fluid img-desktop"
                  />
                </Col>
                <Col md="8" lg="8" sm="8" className="pt-lg-4 pl-lg-0">
                  <a
                    href={whitePaper.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "black" }}
                  >
                    <h4 color="black" style={{ fontWeight: 400 }}>
                      {whitePaper.title}
                    </h4>
                  </a>
                  <p>{whitePaper.description}</p>
                  <a
                    href={whitePaper.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "blue", fontSize: "small" }}
                  >
                    <Button outline color="secondary">
                      Continue reading
                    </Button>{" "}
                  </a>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </div>
      ))}
    </div>
  );
};

WhitePapers.defaultProps = {
  whitePapers: [
    {
      title: "Scaling Up Business On The Back Of Open Source",
      link:
        "https://josh-website.s3.ap-south-1.amazonaws.com/Josh+Whitepaper_Feb2020.pdf",
      description:
        "How Open Source Enables Organisation Wide Growth For Business Leaders",
      imageUrl: `${S3_IMAGS_PATH}/Publications/josh_white_paper_1.png`,
    },
    {
      title: "The Importance of Technical Due Diligence for Investors",
      link:
        "https://josh-website.s3.ap-south-1.amazonaws.com/Whitepaper+-+Tech+Due+Diligence+-+Josh+Software.pdf",
      description:
        "  Technical due diligence is a highly recommended component of the technology company investment cycle, whether you are a private equity firm, investment bank, or acquiring company. It is usually undertaken before fundraising rounds, or in some cases, right before mergers and acquisitions. In this white paper, we will focus on answering the key questions related to why emerging businesses should consider it, and how they can get the process right to build long term scalability and profitability.",
      imageUrl: `${S3_IMAGS_PATH}/Publications/importance_of_tech.png`,
    }
  ]
};
export default WhitePapers;
