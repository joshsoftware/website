import React from "react";
import { Button } from "reactstrap";
import DefaultButton from "../defaultButton/defaultButton";
import "./article.css";

const Article = ({ articleDesc, articleTitle, articleImg }) => {
  return (
    <div className="article-item-wrap">
      <div className="article-items">
        <h1 className="text-capitalize font-weight-bold text-center">
          {articleTitle}
        </h1>
        <div className="image-wrap">
          <img
            src={require(`../../assets/images/revampImages/${articleImg}`)}
            alt="article"
          />
        </div>
        <p className="mb-3 overflow-hidden">{articleDesc}</p>

        <DefaultButton buttonText={"view more"} />
      </div>
    </div>
  );
};

export default Article;
