import React, { Fragment } from 'react'
import { Row, Col } from 'reactstrap';
import Media from "react-media";
import { Link } from "react-router-dom";
import {isWebpSupported} from 'react-image-webp/dist/utils';
import successStoriesBgWebp from "../../assets/images/home/successStoryBg.png.webp";
import mobileSuccessStoriesBgWebp from "../../assets/images/home/mob_sucess_stories.png.webp";

import successStoriesBg from "../../assets/images/home/successStoryBg.png";
import mobileSuccessStoriesBg from "../../assets/images/home/mob_sucess_stories.png";
import { ParallaxImg, Heading1Orange } from './homeStyledComponents';

const SuccessStories = (props) => {
  const { stories } = props;

  return <Media query="(max-width: 900px)">
    {matches =>
      matches ? (
        <Fragment>
          <ParallaxImg className="d-flex" height="160px" logo={isWebpSupported() ? mobileSuccessStoriesBgWebp : mobileSuccessStoriesBg}>
            <Row className="m-auto">
              <Col xs={2} />
              <Col md={6} xs={4} >
                <Heading1Orange fontSize="31">Success Stories</Heading1Orange>
              </Col>
              <Col md={6} xs={8} />
            </Row>
          </ParallaxImg>
          <ul className="succss-stories">
            {
              stories.map(story => {
                return (
                  <li className="bullet font-weight-bold" key={story.name}>
                    <Link to={`/success_stories/${story.slug}`} >{story.name}</Link>
                  </li>
                )
              })
            }
          </ul>
        </Fragment>
      ) : (
          <ParallaxImg height="277px" logo={isWebpSupported() ? successStoriesBgWebp : successStoriesBg}>
            <Row style={{ height: "inherit" }}>
              <Col md={6} className="d-flex justify-content-end align-items-center" >
                <Heading1Orange>Success Stories</Heading1Orange>
              </Col>
              <Col md={6} className="d-flex justify-content-start align-items-center">
                <ul className="w-100 text-white">
                  {
                    stories.map(story => {
                      return (
                        <li className="bullet font-weight-bold" key={story.name}>
                          <Link to={`/success_stories/${story.slug}`} >{story.name}</Link>
                        </li>
                      )
                    })
                  }
                </ul>
              </Col>
            </Row>
          </ParallaxImg>
        )
    }
  </Media>
}

SuccessStories.defaultProps = {
  stories: [
    { name: "Freedom from Diabetes", slug: "ffd" },
    { name: "BrandScope", slug: "brandscope" },
    { name: "Star Network", slug: "star" }
  ]
}

export default SuccessStories;
