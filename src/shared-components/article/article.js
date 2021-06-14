import React from "react";
import { Button } from "reactstrap";
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

        <Button className="view-more-btn text-uppercase text-white d-block text-center font-weight-bold">
          view more
        </Button>
      </div>
    </div>
  );
};

export default Article;
