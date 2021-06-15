import React from "react";
import "./articleContent.css";

const ArticleContent = ({ cardDesc, cardTitle, cardImg }) => {
  return (
    <div className="article-content-card d-flex">
      <div className="card-img-wrap">
        <img src={cardImg} alt="article card img" />
      </div>
      <div className="article-content">
        <h4>{cardTitle}</h4>
        <p>{cardDesc}</p>
      </div>
    </div>
  );
};

export default ArticleContent;
