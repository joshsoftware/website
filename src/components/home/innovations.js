import React from 'react';
import { Row, Col } from 'reactstrap';
import Media from "react-media";

import { ParallaxImg, InnovationHeading1 } from './homeStyledComponents';
import innovationsImg from "../../assetes/images/home/innovation.png"
import innovationBgMobile from "../../assetes/images/home/innovationBgMobile.png"
import innovationBtnImg from "../../assetes/images/home/innovation_button.svg";
import innovationBtnMobile from "../../assetes/images/home/innovation_button_mb.svg";

import kimayaLogo from "../../assetes/images/home/Kimaya.svg";
import kimayaMbLogo from '../../assetes/images/home/Kimaya_mb.svg';


const Innovations = () => {

  return (
    <Media query="(max-width: 900px)">
      {matches =>
        matches ? (
          <ParallaxImg logo={innovationBgMobile} height="262px">
            <Row className="p-4">
              <Col md={3} sm={2} xs={2} />
              <Col md={6} sm={9} xs={9}>
                <Row>
                  <Col md={4} sm={4} xs={4} >
                    <a href="#">
                      <ParallaxImg logo={innovationBtnMobile} height="88px" className="d-flex justify-content-center width-100">
                        <img src={kimayaMbLogo} />
                      </ParallaxImg>
                    </a>
                  </Col>
                  <Col md={4} sm={4} xs={4}>
                    <a href="#">
                      <ParallaxImg logo={innovationBtnMobile} height="88px" className="d-flex justify-content-center width-100">
                        <img src={kimayaMbLogo} />
                      </ParallaxImg>
                    </a>
                  </Col>
                  <Col md={4} sm={4} xs={4}>
                    <a href="#">
                      <ParallaxImg logo={innovationBtnMobile} height="88px" className="d-flex justify-content-center width-100">
                        <img src={kimayaMbLogo} />
                      </ParallaxImg>
                    </a>
                  </Col>

                </Row>
              </Col>
              <Col md={1}>
                <InnovationHeading1 fontSize="31px"> Our Innovations</InnovationHeading1>
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
                  <InnovationHeading1 fontSize="51px"> Innovations</InnovationHeading1>
                </Col>
              </Row>
            </ParallaxImg>
          )
      }
    </Media>

  )
}

export default Innovations;
