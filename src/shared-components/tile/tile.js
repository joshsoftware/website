import React from "react";
import PropTypes from "prop-types";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";
import "./tile.css";

const Tile = ({
  tileImg,
  tileTitle,
  tileDescription,
  tileTags,
  horizontal,
}) => {
  return (
    <Card className={`tile-card border-0`}>
      <CardBody className="tile-card-body ">
        <img
          src={require(`../../assets/images/revampImages/${tileImg}`)}
          alt="tile img"
        />
        <div className="tile-details">
          <ul className="tag-list list-unstyled">
            {tileTags.map((item) => (
              <li className="tag-list-item-wrap">
                <span className="tag-list-item bg-white">{item}</span>
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
      </CardBody>
    </Card>
  );
};

Tile.prototype = {
  horizontal: PropTypes.bool,
};
export default Tile;
