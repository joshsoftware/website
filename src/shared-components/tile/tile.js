import React, { useState } from "react";
import PropTypes from "prop-types";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";
import LinkButton from "../linkButton/linkButton";
import SliderModal from "../sliderModal/sliderModal";
import TileTags from "../tileTags/tileTags";
import "./tile.css";
var colors = [
  "$mint",
  "#645844",
  "#E2F4FC",
  "#E2F8E8",
  "#FFEAEA",
  "#E9EAF0",
  "#DDD5CA",
  "$gray-86",
  "#C8D7E2",
  "#E3DCDB",
  "#FFE8D1",
  "#F7DDD8",
  "#E1F1F5",
  "#DDD2E5",
  "#F8DDD7",
  "#E4E4E7",
  "#FFE7C7",
];
const getColour = () => colors[Math.floor(Math.random() * colors.length)];

const Tile = ({
  tileImg,
  tileTitle,
  tileDescription,
  tileTags,
  horizontal,
  className,
  items,
}) => {
  const [isSliderModalOpen, setisSliderModalOpen] = useState(false);

  const toggleSliderModal = () => {
    setisSliderModalOpen(!isSliderModalOpen);
  };
  return (
    <Card
      className={`tile-card border-0 ${className}`}
      style={{ backgroundColor: getColour() }}
    >
      <CardBody className="tile-card-body d-flex">
        <img
          src={require(`../../assets/images/revampImages/${tileImg}`)}
          alt="tile img"
        />
        <div className="tile-details">
          <TileTags tileTags={tileTags} />
          <CardTitle tag="h5" className="text-uppercase font-weight-bold">
            {tileTitle}
          </CardTitle>
          <CardText className="overflow-hidden text-truncate-multi-line">
            {tileDescription}
          </CardText>
        </div>
        <div className="tile-hover-wrap">
          <div className="title-box">
            <h3 className="text-uppercase font-weight-bold">{tileTitle}</h3>
          </div>
          <div className="see-more-btn-wrap position-relative d-flex justify-content-center w-100">
            <LinkButton
              buttonText="see more"
              className="see-more-btn"
              onClick={() => {
                toggleSliderModal();
              }}
            />
          </div>
        </div>
      </CardBody>

      {isSliderModalOpen && (
        <SliderModal
          toggle={toggleSliderModal}
          isOpen={isSliderModalOpen}
          items={items}
        />
      )}
    </Card>
  );
};

Tile.prototype = {
  horizontal: PropTypes.bool,
  className: PropTypes.string,
};

Tile.defaultProps = {
  className: "",
};

export default Tile;
