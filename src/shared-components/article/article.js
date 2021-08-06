import React from "react";
import DefaultButton from "../defaultButton/defaultButton";
import "./article.css";

const Article = ({ articleDesc, articleTitle, articleImg, link }) => {
  return (
    <div className="article-item-wrap">
      <div className="article-items position-relative">
        <div className="article-item-top-content">
          <h1 className="text-capitalize font-weight-bold text-center">
            {articleTitle}
          </h1>
          <div className="image-wrap">
            <img
              src={require(`../../assets/images/revampImages/${articleImg}`)}
              alt="article"
            />
          </div>
          <p className="mb-3">{articleDesc}</p>
        </div>
        <DefaultButton buttonText="vIEW MORE" link={link} />
      </div>
    </div>
  );
};

export default Article;
