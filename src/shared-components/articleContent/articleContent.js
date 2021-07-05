import React from "react";
import DefaultButton from "../defaultButton/defaultButton";
import BookInfo from "../bookInfo/bookInfo";
import "./articleContent.css";
import icon from "../../assets/images/revampImages/book-white.svg";
import {
  FACEBOOK_SHARE_URL,
  TWITTER_SHARE_URL,
  LINKED_IN_SHARE_URL,
} from "../../globalConstants.js";

const ArticleContent = ({
  link,
  cardDesc,
  cardTitle,
  cardImg,
  cardBtnText,
  bookPrice,
  className,
  socialIcons,
  mediaLinks,
}) => {
  return (
    <div className={`article-content-card-item ${className}`}>
      <div className="article-content-card d-flex h-100 position-relative">
        <div className="card-img-wrap text-center">
          <img
            src={require(`../../assets/images/revampImages/${cardImg}`)}
            alt="article card img"
          />
        </div>
        <div className="article-content">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-decoration-none d-block"
          >
            <h4 className="font-weight-bold"> {cardTitle}</h4>
          </a>
          <p className="mb-4">{cardDesc}</p>

          {bookPrice ? (
            <div className="book-info-details d-flex justify-content-between">
              <div className="book-price-wrap d-flex align-items-center">
                <DefaultButton
                  buttonText={cardBtnText}
                  link={link}
                  icon={icon}
                />
                <span className="font-weight-bold ml-2">{bookPrice}</span>
              </div>
              <ul className="d-flex list-unstyled mb-0 social-media-list">
                {socialIcons.map((socialIconsItems) => (
                  <li className="social-media-item">
                    <a
                      href={`${socialIconsItems.mediaLinks}${link}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={require(`../../assets/images/revampImages/${socialIconsItems.iconSrc}`)}
                        alt="social Icon"
                        className="social-media-icon"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <DefaultButton buttonText={cardBtnText} link={link} />
          )}
        </div>
        {/* {bookPrice && bookTitle && (
          <BookInfo bookTitle={bookTitle} bookPrice={bookPrice} link={link} />
        )} */}
      </div>
    </div>
  );
};

ArticleContent.defaultProps = {
  socialIcons: [
    { iconSrc: "twitter_icon.png", mediaLinks: `${TWITTER_SHARE_URL}` },
    { iconSrc: "facebook_icon.png", mediaLinks: `${FACEBOOK_SHARE_URL}` },
    { iconSrc: "linkedin_icon.png", mediaLinks: `${LINKED_IN_SHARE_URL}` },
  ],
};

export default ArticleContent;
