import React from "react";

import { Container } from "../../core-components";
import NewsBanner from "../../shared-components/newsBanner/newsBanner.js";
import ArticleContent from "../../shared-components/articleContent/articleContent.js";
import Article from "../../shared-components/article/article.js";

const Publications = ({ dataList, articleList }) => {
  return (
    <section className="josh-content">
      <NewsBanner caption="Publications" bannerClassName="publications" />
      <Container>
        <div className="article-content-wrapper d-flex flex-wrap">
          {articleList.map((articleListItems, i) => (
            <ArticleContent
              key={i}
              className="publication-content-wrapper"
              cardImg={articleListItems.cardImg}
              link={articleListItems.link}
              cardTitle={articleListItems.cardTitle}
              cardDesc={articleListItems.cardDesc}
              cardBtnText={articleListItems.cardBtnText}
              bookPrice={articleListItems.bookPrice}
              buttonWithIcon
            />
          ))}
        </div>
      </Container>
      <div className="article-list d-flex justify-content-center">
        {dataList.map((dataListItems, i) => (
          <Article
            key={i}
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

Publications.defaultProps = {
  dataList: [
    {
      articleTitle: "Talks",
      articleDesc:
        "Assorted talks by our associates about  the pathbreaking trends in technology, the problems it solve, and more.",
      articleImg: "talks.jpeg",
      link: "/talks",
    },
    {
      articleTitle: "Media Coverage",
      articleDesc:
        "Selected video content which speak of current trends and  technological advancements.",
      articleImg: "media_coverage.jpeg",
      link: "/media-coverage",
    },
    {
      articleTitle: "Our White Papers",
      articleDesc:
        "Information to guide our readers about complex issues like Technology and Business connections.",
      articleImg: "our_white_paper.jpeg",
      link: "white-papers",
    },
  ],

  articleList: [
    {
      cardImg: "ruby_mongodb.png",
      link: "https://www.packtpub.com/in/web-development/ruby-and-mongodb-web-development-beginners-guide",

      cardTitle: "Ruby and MongoDB Web Development Beginner’s Guide",
      cardDesc:
        "MongoDB is a high-performance, open source, schema-free document-oriented database. Ruby is an object- oriented scripting language. Ruby and MongoDB are an ideal partnership for building scalable web Ruby and MongoDB Web Development Beginner’s Guide is a fast-paced, hands-on guide to get started with web application development using Ruby and MongoDB.applications.",
      cardBtnText: "Buy now",
      bookPrice: "Rs. 299.00",
    },
    {
      cardImg: "microservives.png",
      link: "https://www.packtpub.com/web-development/hands-on-microservices-with-go-and-mongodb-video",

      cardTitle: "Hands-on Microservices with Go and MongoDB",
      cardDesc:
        "How do you build a service-oriented architecture, using microservices system that should not only be scalable with high performance but also handle frequently changing features? This is a real-world problem and it’s important that you empower yourself with the knowledge, tools, and skills today, so that you can build these systems with confidence!",
      cardBtnText: "Buy now",
      bookPrice: "$10.00",
    },
    {
      cardImg: "learning_mongoid.png",
      link: "https://www.packtpub.com/in/big-data-and-business-intelligence/learning-mongoid",

      cardTitle: "Learning Mongoid",
      cardDesc:
        "Mongoid helps you to leverage the power of schema-less and efficient document-based design, dynamic queries, and atomic modifier operations. Mongoid eases the work of Ruby developers while they are working on complex frameworks. Starting with why and how you should use Mongoid, this book covers the various components of Mongoid. It then delves deeper into the detail of queries and relations, and you will learn some tips and tricks.",
      cardBtnText: "Buy now",
      bookPrice: "Rs. 299.00",
    },
  ],
};

export default Publications;
