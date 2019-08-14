import React from 'react';
import { Row, Col } from 'reactstrap';
import {H4Black, StoryText} from './successStoriesStyledComponents';

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
            <img src={require(`../../assets/images/successStories/${props.image}.png`)} alt={props.subHeading} className="img-responsive"/>
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

export default TextImage
