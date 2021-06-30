import React from "react";
import DefaultButton from "../defaultButton/defaultButton";
import BookInfo from "../bookInfo/bookInfo";
import "./articleContent.css";

const ArticleContent = ({
  link,
  cardDesc,
  cardTitle,
  cardImg,
  cardBtnText,
  bookInfoList,
  bookTitle,
  bookPrice,
  className,
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
            className="text-decoration-none font-weight-bold d-block card-title"
          >
            {cardTitle}
          </a>
          <p>{cardDesc}</p>

          <DefaultButton buttonText={cardBtnText} link={link} />
        </div>
        {bookPrice && bookTitle && (
          <BookInfo bookTitle={bookTitle} bookPrice={bookPrice} link={link} />
        )}
      </div>
    </div>
  );
};

export default ArticleContent;
