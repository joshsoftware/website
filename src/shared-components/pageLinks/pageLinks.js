import React from "react";
import PageLinkItem from "../pageLinkItem/pageLinkItem";
import "./pageLinks.scss";

const PageLinks = ({ linkListItem }) => {
  return (
    <div className="link-item-wrap">
      <ul className="link-item-list list-unstyled mb-0 position-relative d-flex align-items-center justify-content-center">
        {linkListItem.map((link, index) => (
          <PageLinkItem
            link={link.link}
            linkTitle={link.linkTitle}
            linkClassName={link.linkClassName}
          />
        ))}
      </ul>
    </div>
  );
};

PageLinks.prototype = {
  // link: PropTypes.string,
};

export default PageLinks;
