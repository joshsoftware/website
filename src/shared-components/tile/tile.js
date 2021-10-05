import React from "react";
import PropTypes from "prop-types";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";
import "./tile.css";
import LinkButton from "../linkButton/linkButton";

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
}) => {
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
          <ul className="tag-list list-unstyled d-flex flex-wrap">
            {tileTags.map((item) => (
              <li className="tag-list-item-wrap">
                <p className="tag-list-item bg-white mb-0">{item}</p>
              </li>
            ))}
          </ul>
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
            <LinkButton buttonText="see more" className="see-more-btn" />
          </div>
        </div>
      </CardBody>
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
