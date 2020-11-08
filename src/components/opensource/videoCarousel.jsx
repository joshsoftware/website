import React from "react";
import { Card, CardBody } from "reactstrap";
import openSourceCarousel from "../../assets/images/openSourceCarousel.png";
//TODO-Incomplete design
const VideoCarousel = ({ description, name, tags, image_url }) => {
  return (
    <Card className="card-carousel">
      <CardBody>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-sm-10">
              <img
                src={openSourceCarousel}
                alt="open-source-carousel"
                className="m-auto"
              />
              <p className="card-carousel-title mb-2 m-auto">{name}</p>
              <p className="card-carousel-description">{description}</p>
              <div>Display Videos here</div>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default React.memo(VideoCarousel);
