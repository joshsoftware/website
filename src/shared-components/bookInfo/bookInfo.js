import React from "react";
import { Button } from "reactstrap";
import "./bookInfo.css";

const BookInfo = ({ bookTitle, bookPrice }) => {
  return (
    <div className="book-info-card">
      <div className="top-content d-flex">
        <p className="mb-0">{bookTitle}</p>

        <div className="book-price-details d-flex">
          <div className="price-wrap">
            <p>Book</p>
            <span className="font-weight-bold">{bookPrice}</span>
          </div>
          <i />
        </div>
      </div>
      <div className="bottom-content d-flex">
        <ul className="d-flex list-unstyled mb-0">
          <li></li>
        </ul>
        <Button className="text-uppercase buy-now-btn">Buy Now</Button>
      </div>
    </div>
  );
};

export default BookInfo;
