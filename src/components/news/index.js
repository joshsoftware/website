import React, { useEffect, useState } from "react";
import NewsContent from "./newsContent.js";
import { Spinner } from "reactstrap";
import { API_BASE_URL } from "../../globalConstants.js";

import NewsBanner from "../../shared-components/newsBanner/newsBanner";
import { Container } from "../../core-components";

const News = () => {
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
    </section>
  );
};

News.defaultProps = {
  data: [],
};
export default News;
