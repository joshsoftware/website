import React from 'react';
import {Row} from 'reactstrap';
import {H4Black, StoryText} from './successStoriesStyledComponents';
import Image from 'react-image-webp';

const MobileStoryView = (props) => {
  return(
    <div className="mt-3">
      <Row className="justify-content-center">
        <H4Black> {props.subHeading} </H4Black>
      </Row>
      <Row>
        <Image
          src={require(`../../assets/images/successStories/${props.image}.png`)}
          webp={require(`../../assets/images/successStories/${props.image}.png.webp`)}
          alt={props.subHeading} className="m-auto w-100 img-fluid" />
      </Row>
      <div className="container-fluid">
        <Row className="m-auto w-100 pt-2">
          <StoryText className="m-auto text-justify" fontSize="14px">{props.text}</StoryText>
        </Row>
      </div>
    </div>
  )
}

export default MobileStoryView;
