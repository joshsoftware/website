import React from 'react';
import { Row, Col } from 'reactstrap';

import { ParallaxImg, Heading1 } from './homeStyledComponents';
import innovationsImg from "../../assetes/images/home/innovation.png"
import innovationBgMobile from "../../assetes/images/home/innovationBgMobile.svg"
import innovationBtnImg from "../../assetes/images/home/innovation_button.svg";
import kimayaLogo from "../../assetes/images/home/Kimaya.svg";

import Media from "react-media";

const Innovations = () => {

  return (
    <Media query="(max-width: 900px)">
      {matches =>
        matches ? (
          <ParallaxImg logo={innovationsImg} height="262px">
            <Row className="p-4">
              <Col md={3} sm={2} xs={2} />
              <Col md={6} sm={6} xs={6}>
                <Row>
                  <Col md={4} sm={4} >
                    <a href="#">
                      <ParallaxImg logo={innovationBtnImg} height="150px" className="d-flex justify-content-center">
                        <img src={kimayaLogo} />
                      </ParallaxImg>
                    </a>
                  </Col>
                  <Col md={4} sm={4}>
                    <a href="#">
                      <ParallaxImg logo={innovationBtnImg} height="150px" className="d-flex justify-content-center">
                        <img src={kimayaLogo} />
                      </ParallaxImg>
                    </a>
                  </Col>
                  <Col md={4} sm={4}>
                    <a href="#">
                      <ParallaxImg logo={innovationBtnImg} height="150px" className="d-flex justify-content-center">
                        <img src={kimayaLogo} />
                      </ParallaxImg>
                    </a>
                  </Col>

                </Row>
              </Col>
              <Col md={3}>
                <Heading1> Innovations</Heading1>
              </Col>
            </Row>
          </ParallaxImg>
        ) : (
            <ParallaxImg logo={innovationsImg} height="262px">
              <Row className="p-4">
                <Col md={3} sm={2} />
                <Col md={6} sm={2}>
                  <Row>
                    <Col md={4} >
                      <a href="#">
                        <ParallaxImg logo={innovationBtnImg} height="150px" className="d-flex justify-content-center">
                          <img src={kimayaLogo} />
                        </ParallaxImg>
                      </a>
                    </Col>
                    <Col md={4} >
                      <a href="#">
                        <ParallaxImg logo={innovationBtnImg} height="150px" className="d-flex justify-content-center">
                          <img src={kimayaLogo} />
                        </ParallaxImg>
                      </a>
                    </Col>
                    <Col md={4} >
                      <a href="#">
                        <ParallaxImg logo={innovationBtnImg} height="150px" className="d-flex justify-content-center">
                          <img src={kimayaLogo} />
                        </ParallaxImg>
                      </a>
                    </Col>

                  </Row>
                </Col>
                <Col md={3}>
                  <Heading1> Innovations</Heading1>
                </Col>
              </Row>
            </ParallaxImg>
          )
      }
    </Media>

  )
}

export default Innovations;
