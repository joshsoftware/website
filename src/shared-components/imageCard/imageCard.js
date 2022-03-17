import React from "react";
import "./imageCard.css";
import LinkButton from "../../shared-components/linkButton/linkButton";

const ImageCard = (props) => {
  const { cardTitle, cardDescription, cardImg } = props;

  return (
    <section className="image-card-wrap">
      <div className="container">
        <div className="content-details d-flex position-relative">
          <div className="content-col">
            <h1 className="site-heading font-weight-bold text-white mb-4">
              {cardTitle}
            </h1>
            <p className="text-white">{cardDescription}</p>
            <LinkButton buttonText="see all" type="submit" />
          </div>
          <div className="image-wrapper position-absolute">
            <img src={cardImg} alt="innovation img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageCard;
