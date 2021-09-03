import React from "react";
import "./innovationItem.css";

const InnovationItem = ({ productLogo, productDesc, productFeatures }) => {
  return (
    <div className="innovation-item-wrap">
      <div className="product-details d-flex bg-white mb-3">
        <img
          src={require(`../../assets/images/revampImages/${productLogo}`)}
          alt="product logo"
        />
        <p className="mb-0"> {productDesc}</p>
      </div>
      <div className="product-features">
        <ul className="feature-list list-unstyled mb-0 d-flex">
          {productFeatures.map((item) => (
            <li className="d-flex align-items-center">
              <div className="feature-list-item bg-white p-3 text-center">
                <img src={item.logo} alt="feature img" className="mb-3" />
                <p className="mb-0">{item.desc}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default InnovationItem;
