import React from "react";

import { Container } from "../../core-components";
import NewsBanner from "../../shared-components/newsBanner/newsBanner.js";
import Article from "../../shared-components/article/article.js";
import ArticleContent from "../../shared-components/articleContent/articleContent.js";

const WhitePapers = ({ dataList, articleList }) => {
  return (
    <section className="josh-content">
      <NewsBanner caption="Our White Papers" bannerClassName="white-papers" />
      <Container>
        <div className="article-content-wrapper d-flex flex-wrap">
          {articleList.map((articleListItems) => (
            <ArticleContent
              cardImg={articleListItems.cardImg}
              link={articleListItems.link}
              cardTitle={articleListItems.cardTitle}
              cardDesc={articleListItems.cardDesc}
              cardBtnText={articleListItems.cardBtnText}
            />
          ))}
        </div>
      </Container>
      <div className="article-list d-flex justify-content-center">
        {dataList.map((dataListItems) => (
          <Article
            articleDesc={dataListItems.articleDesc}
            articleImg={dataListItems.articleImg}
            articleTitle={dataListItems.articleTitle}
            link={dataListItems.link}
          />
        ))}
      </div>
    </section>
  );
};

WhitePapers.defaultProps = {
  dataList: [
    {
      articleTitle: "Talks",
      articleDesc:
        "Assorted talks by our associates about  the pathbreaking trends in technology, the problems it solve, and more.",
      articleImg: "talks.jpeg",
      link: "/talks",
    },
    {
      articleTitle: "Publications",
      articleDesc:
        "Collection of publications which gives insights about our knowledge, experience and capabilities.",
      articleImg: "publication.jpeg",
      link: "/publications",
    },
    {
      articleTitle: "Media Coverage",
      articleDesc:
        "Selected video content which speak of current trends and  technological advancements.",
      articleImg: "media_coverage.jpeg",
      link: "media-coverage",
    },
  ],

  articleList: [
    {
      cardImg: "Back_Of_Open_Source.png",
      cardTitle: "Scaling Up Business On The Back Of Open Source",
      link: "https://josh-website.s3.ap-south-1.amazonaws.com/Josh+Whitepaper_Feb2020.pdf",

      cardDesc:
        "How Open Source Enables Organisation Wide Growth For Business Leaders",
      cardBtnText: "Continue Reading",
    },
    {
      cardImg: "Diligence_for_investors.png",
      cardTitle: "The Importance of Technical Due Diligence for Investors",
      link: "https://josh-website.s3.ap-south-1.amazonaws.com/Whitepaper+-+Tech+Due+Diligence+-+Josh+Software.pdf",
      cardDesc:
        "Technical due diligence is a highly recommended component of the technology company investment cycle, whether you are a private equity firm, investment bank, or acquiring company. It is usually undertaken before fundraising rounds, or in some cases, right before mergers and acquisitions. In this white paper, we will focus on answering the key questions related to why emerging businesses should consider it, and how they can get the process right to build long term scalability and profitability.",
      cardBtnText: "Continue Reading",
    },
  ],
};
export default WhitePapers;
