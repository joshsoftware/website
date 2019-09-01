import React from 'react';
import { Row, Col, Media } from "reactstrap";
import styled from 'styled-components';

const MediaCard = ({
  className, logo, altText, title, description
}) => {
  return (
    <Row className={ className }>
      <Col>
        <Media>
          <Media left>
            <Media className="img-fluid" object src={ logo } alt={ altText } />
          </Media>

          <Media body>
            <Media heading className="media-title">
              { title }
            </Media>

            <p className="media-description">{ description }</p>
          </Media>
        </Media>
      </Col>
    </Row>
  );
};

const StyledMediaCard = styled(MediaCard)`
  .media-title {
    font-size: 20px;
    color: #CF4338;
    font-weight: 400;
  }

  .media-description {
    font-size: 14px;
  }
`;

export default StyledMediaCard;