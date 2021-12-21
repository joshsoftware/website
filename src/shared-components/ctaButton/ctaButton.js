import React from "react";
import CtaButtonItem from "../ctaButtonItem/ctaButtonItem";
import "./ctaButton.css";

const CtaButton = ({ linkListItem }) => {
  return (
    <div className="link-item-wrap">
      <ul className="link-item-list list-unstyled mb-0 position-relative d-flex align-items-center justify-content-center">
        {linkListItem.map((linkItem, index) => (
          <CtaButtonItem
            link={linkItem.link}
            linkTitle={linkItem.linkTitle}
            linkClassName={linkItem.linkClassName}
          />
        ))}
      </ul>
    </div>
  );
};

export default CtaButton;
