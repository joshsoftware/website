import React from "react";
import "./ctaButtonItem.css";
import PropTypes from "prop-types";
import arrowImg from "../../assets/images/revampImages/next-arrow.png";

const CtaButtonItem = ({ linkTitle, link, linkClassName }) => {
  return (
    <>
      <li className="link-item d-flex">
        <a
          href={link}
          className={`text-center text-decoration-none -leadership ${linkClassName}`}
        >
          {linkTitle}
          <img src={arrowImg} alt="arrow icon" className="ml-3 arrow-img" />
        </a>
      </li>
    </>
  );
};

CtaButtonItem.prototype = {
  link: PropTypes.string,
  leadership: PropTypes.string,
  contactus: PropTypes.string,
  linkClassName: PropTypes.string,
};

export default CtaButtonItem;
