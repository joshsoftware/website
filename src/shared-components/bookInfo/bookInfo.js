import React from "react";
import { Button } from "reactstrap";
import "./bookInfo.css";
import bookImg from "../../assets/images/revampImages/book_icon.png";

const BookInfo = ({ bookTitle, bookPrice, socialIcons }) => {
  return (
    <div className="book-info-wrap">
      <div className="book-info-card">
        <div className="top-content d-flex">
          <p className="mb-0">{bookTitle}</p>

          <div className="book-price-details d-flex">
            <div className="price-wrap mr-auto">
              <p>Book</p>
              <span className="font-weight-bold">{bookPrice}</span>
            </div>
            <img src={bookImg} alt="book icon" />
          </div>
        </div>
        <div className="bottom-content d-flex">
          <ul className="d-flex list-unstyled mb-0 social-media-list">
            {socialIcons.map((socialIconsItems) => (
              <li className="social-media-item">
                <a href="javascript:void(0);">
                  <img
                    src={require(`../../assets/images/revampImages/${socialIconsItems.iconSrc}`)}
                    alt="social Icon"
                    className="social-media-icon"
                  />
                </a>
              </li>
            ))}
          </ul>
          <Button className="text-uppercase buy-now-btn font-weight-bold">
            Buy Now
          </Button>
        </div>
      </div>
    </div>
  );
};

BookInfo.defaultProps = {
  socialIcons: [
    { iconSrc: "twitter_icon.png" },
    { iconSrc: "facebook_icon.png" },
    { iconSrc: "linkedin_icon.png" },
  ],
};

export default BookInfo;
