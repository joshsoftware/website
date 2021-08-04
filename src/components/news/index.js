import React, { useEffect, useState } from "react";
import NewsContent from "./newsContent.js";
import { Spinner } from "reactstrap";
import { API_BASE_URL } from "../../globalConstants.js";

import NewsBanner from "../../shared-components/newsBanner/newsBanner";
import { Container } from "../../core-components";
import Article from "../../shared-components/article/article";

const News = ({ dataList }) => {
  const [newsData, setNewsData] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchNews = () => {
    setLoading(true);
    return fetch(`${API_BASE_URL}news`, {
      method: "get",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }).then((response) => response.json());
  };

  useEffect(() => {
    const promis = fetchNews();
    promis
      .then((responseData) => {
        setNewsData(responseData.news);
        setLoading(false);
      })
      .catch((result) => {
        console.log(result);
      });
  }, []);

  return (
    <section className="josh-content">
      <NewsBanner caption="Media Coverage" bannerClassName="media-coverage" />
      <Container>
        <div className={`${loading ? "spinner-wrapper" : "media-grid"}`}>
          {loading && <Spinner style={{ width: "3rem", height: "3rem" }} />}
          {newsData && Object.keys(newsData).length > 0 && (
            <NewsContent news={newsData} loading={loading} />
          )}
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

News.defaultProps = {
  data: [],
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
      articleTitle: "Our White papers",
      articleDesc:
        "Information to guide our readers about complex issues like Technology and Business connections.",
      articleImg: "our_white_paper.jpeg",
      link: "/white-papers",
    },
  ],
};
export default News;
