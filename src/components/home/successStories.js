import React, { Fragment } from 'react'
import { Row, Col } from 'reactstrap';
import Media from "react-media";

import successStoriesBg from "../../assetes/images/home/successStoryBg.png";
import mobileSuccessStoriesBg from "../../assetes/images/home/mob_sucess_stories.png";
import { ParallaxImg, Heading1Orange } from './homeStyledComponents';

const SuccessStories = () => {

  return <Media query="(max-width: 900px)">
    {matches =>
      matches ? (
        <Fragment>
          <ParallaxImg height="160px" logo={mobileSuccessStoriesBg}>
            <Row>
              <Col md={6} xs={2} >
                <Heading1Orange fontSize="31">Success Stories</Heading1Orange>
              </Col>
              <Col md={6} xs={10} />
            </Row>
          </ParallaxImg>
          <ul className="">
            <li>Freedom from Diabetis</li>
            <li>Freedom from Diabetis</li>
            <li>Freedom from Diabetis</li>
            <li>Freedom from Diabetis</li>
            <li>Freedom from Diabetis</li>
          </ul>
        </Fragment>
      ) : (
          <ParallaxImg height="277px" logo={successStoriesBg}>
            <Row style={{ height: "inherit" }}>
              <Col md={6} className="d-flex justify-content-end align-items-center" >
                <Heading1Orange>Success Stories</Heading1Orange>
              </Col>
              <Col md={6} className="d-flex justify-content-start align-items-center">
                <ul className="w-100 text-white">
                  <li>Freedom from Diabetis</li>
                  <li>Freedom from Diabetis</li>
                  <li>Freedom from Diabetis</li>
                  <li>Freedom from Diabetis</li>
                  <li>Freedom from Diabetis</li>
                </ul>
              </Col>
            </Row>
          </ParallaxImg>
        )
    }
  </Media>

}

export default SuccessStories;
