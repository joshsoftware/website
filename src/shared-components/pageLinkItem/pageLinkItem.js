import React from "react";
import "./pageLinkItem.scss";
import PropTypes from "prop-types";
import arrowImg from "../../assets/images/revampImages/next-arrow.png";

const PageLinkItem = ({
  leadership,
  contactus,
  linkTitle,
  link,
  linkClassName,
}) => {
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
      {/* {contactus && (
        <li className="link-item d-flex">
          <a
            href="/contact_us"
            className="text-center text-decoration-none -contact-us"
          >
            {linkTitle}
            <img src={arrowImg} alt="arrow icon" className="ml-3 arrow-img" />
          </a>
        </li>
      )} */}
    </>
  );
};

PageLinkItem.prototype = {
  link: PropTypes.string,
  leadership: PropTypes.string,
  contactus: PropTypes.string,
  linkClassName: PropTypes.string,
};

export default PageLinkItem;
