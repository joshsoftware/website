import React from 'react'
import Media from 'react-media'
import { Row, Col, Button } from 'reactstrap'

import contactUsImg from '../../assetes/images/home/contact_us.png'
import { ParallaxImg, Heading1Black } from './homeStyledComponents.js'

const ContactUs = () => {
  return (
    <Media query="(max-width: 900px)">
      {matches =>
          matches ? (
            <ParallaxImg logo={contactUsImg} height="160px">
              <Row>
                <Col md={6} xs={2}>
                  <Heading1Black fontSize="27"> Looking for an expert technical partner </Heading1Black>
                </Col>
            </Row>
          </ParallaxImg>
          ) : (
            <ParallaxImg logo={contactUsImg} height="365px">
              <Row className="h-100">
                <Col md={6} className="d-flex flex-column justify-content-center align-items-center">
                  <div className="p-2">
                    <Heading1Black fontSize="27" className="text-center text-uppercase"> Looking for an <br />expert technical partner </Heading1Black>
                  </div>

                  <div className="p-2">
                    <Button type="button" className="btn btn-dark">Contact us</Button>
                  </div>

                </Col>
              </Row>
          </ParallaxImg>
          )
      }
    </Media>
  )
}

export default ContactUs
