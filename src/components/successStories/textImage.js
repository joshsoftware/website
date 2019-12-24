import React from 'react';
import { Row, Col } from 'reactstrap';
import {H4Black, StoryText} from './successStoriesStyledComponents';
import Image from 'react-image-webp';

const TextImage = (props) => {
  return(
    <Row className="mt-5">
      <Col className="m-auto justify-content-center col-md-8">
        <Row>
          <Col>
            <H4Black> {props.subHeading} </H4Black>
            <StoryText className="text-justify" fontSize="18px"> {props.text} </StoryText>
          </Col>
          <Col>
            <Image
              src={require(`../../assets/images/successStories/${props.image}.png`)}
              webp={require(`../../assets/images/successStories/${props.image}.png.webp`)}
              alt={props.subHeading} className="img-fluid" />
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

export default TextImage
