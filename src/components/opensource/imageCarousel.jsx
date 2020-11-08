import React from "react";
import { Card, CardBody, Badge } from "reactstrap";
import Media from "react-media";
import { API_PUBLIC_URL } from "../../globalConstants";
const ImageCarousel = ({ description, name, tags, image_url }) => {
  const MobileView = (
    <>
      <div className="card-carousel-title mb-2">{name}</div>
      <img
        className="img-fluid m-auto"
        src={`${API_PUBLIC_URL}${image_url}`}
        alt="open-source-carousel"
      />
      <div className="my-2">
        <span className="card-carousel-domain">Domain Name</span>
      </div>
      <p className="card-carousel-description">
        {description.slice(0, 150)}...
      </p>
      {tags.map((tag, index) => (
        <Badge color="danger tech-tag" key={index}>
          {tag}
        </Badge>
      ))}
    </>
  );

  const WebView = (
    <>
      <div className="row justify-content-around">
        <div className="col-sm-5">
          <div className="my-2">
            <span className="card-carousel-domain">Domain Name</span>
          </div>
          <img
            src={`${API_PUBLIC_URL}${image_url}`}
            alt="open-source-carousel"
          />
        </div>
        <div className="col-sm-5">
          <p className="card-carousel-title mb-2">{name}</p>
          <p className="card-carousel-description">
            {description.slice(0, 150)}...
          </p>
        </div>
      </div>
      <div className="row justify-content-center">
        {tags.map((tag, index) => (
          <Badge color="danger tech-tag" key={index}>
            {tag}
          </Badge>
        ))}
      </div>
    </>
  );

  return (
    <Card className="card-carousel">
      <CardBody>
        <div className="container">
          <Media query="(max-width: 500px)">
            {(matches) => (matches ? MobileView : WebView)}
          </Media>
        </div>
      </CardBody>
    </Card>
  );
};

ImageCarousel.defaultProps = {
  description: "",
  name: "",
  tags: [],
  image_url: "",
};

export default React.memo(ImageCarousel);
