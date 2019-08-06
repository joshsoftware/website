import React from 'react';
import { Row, Col } from 'reactstrap';
import { Heading1 } from "./homeStyledComponents.js";
import domain from "../../assetes/images/home/domain.png";

const WhatWeDo = () => {
  return (
    <section id="clientsSlide" className="section-home ">
      <Heading1>What We Do</Heading1>
      <Row>
        <Col sm={2} md={2} />
        <Col sm={8} md={8}>
          <Row>
            <Col sm={6} md={4} xs={6} className="pb-14">
              <div className="border-2">
                <Row>
                  <Col md={12}>
                    <img src={domain} />
                  </Col>
                </Row>
                <Row>
                  <Col md={12} className="bg-white">
                    Simplify Domain Complexities
                  </Col>
                </Row>
              </div>
            </Col>
            <Col sm={6} md={4} xs={6} className="pb-14">
              <div className="border-2">

              </div>
            </Col>
            <Col sm={6} md={4} xs={6} className="pb-14">
              <div className="border-2">

              </div>
            </Col>
            <Col sm={6} md={4} xs={6} className="pb-14">
              <div className="border-2">

              </div>
            </Col>
            <Col sm={6} md={4} xs={6} className="pb-14">
              <div className="border-2">

              </div>
            </Col>
            <Col sm={6} md={4} xs={6} className="pb-14">
              <div className="border-2">

              </div>
            </Col>
          </Row>
        </Col>
        <Col sm={2} md={2} />
      </Row>
    </section>
  )
}

export default WhatWeDo;
