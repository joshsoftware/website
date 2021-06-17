import React from "react";
import DefaultButton from "../defaultButton/defaultButton";
import BookInfo from "../bookInfo/bookInfo";
import "./articleContent.css";

const ArticleContent = ({
  cardDesc,
  cardTitle,
  cardImg,
  cardBtnText,
  bookInfoList,
  bookTitle,
  bookPrice,
}) => {
  return (
    <div className="article-content-card d-flex">
      <div className="card-img-wrap text-center">
        <img
          src={require(`../../assets/images/revampImages/${cardImg}`)}
          alt="article card img"
        />
      </div>
      <div className="article-content">
        <h4 className="font-weight-bold">{cardTitle}</h4>
        <p>{cardDesc}</p>

        <DefaultButton buttonText={cardBtnText} />
      </div>
      {bookPrice && bookTitle && (
        <BookInfo bookTitle={bookTitle} bookPrice={bookPrice} />
      )}
    </div>
  );
};

export default ArticleContent;
