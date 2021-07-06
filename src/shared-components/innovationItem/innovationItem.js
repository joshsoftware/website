import React from "react";
import "./innovationItem.css";

const InnovationItem = ({ productLogo, productDesc, productFeatures }) => {
  return (
    <div className="innovation-item-wrap">
      <div className="border-box"></div>
      <div className="product-content d-flex">
        <div className="product-details d-flex">
          <img
            src={require(`../../assets/images/revampImages/${productLogo}`)}
            alt="product logo"
          />
          <p className="mb-0"> {productDesc}</p>
        </div>
        <div className="product-features">
          <ul className="feature-list list-unstyled mb-0">
            {productFeatures.map((item) => (
              <li className="d-flex align-items-center">
                <img src={item.img} alt="feature img" className="mr-4" />
                <p className="mb-0">{item.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default InnovationItem;
