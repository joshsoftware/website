import React from "react";
import "./tileTags.css";

const TileTags = ({ className = "", tileTags }) => {
  return (
    <>
      <ul className={`tag-list list-unstyled d-flex flex-wrap ${className}`}>
        {tileTags.map((item) => (
          <li className="tag-list-item-wrap">
            <p className="tag-list-item bg-white mb-0">{item}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TileTags;
