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
            target="_blank"
            rel="noopener noreferrer"
            className="text-decoration-none d-block"
          >
            <h4 className="font-weight-bold"> {cardTitle}</h4>
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
