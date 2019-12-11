import React, { useEffect, useState } from 'react';
import NewsContent from './newsContent.js';
import { Spinner } from 'reactstrap';
import { API_BASE_URL } from "../../globalConstants.js";

const News = (props) => {
  const [newsData, setNewsData] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchNews = () => {
    setLoading(true)
    return fetch(`${API_BASE_URL}news`, {
      method: 'get',
      headers: {  'Accept': 'application/json', 'Content-Type': 'application/json' },
    })
    .then((response) => response.json())
  }

  useEffect(() => {
    const promis = fetchNews();
    promis.then((responseData) => {
      setNewsData(responseData.news)
      setLoading(false)
    })
    .catch(result => {
      console.log(result)
    });
  }, []);

  return (
    <div>
      {
        loading && <div className="container section-content">
          <div className="row d-flex justify-content-center">
            <Spinner style={{ width: '3rem', height: '3rem' }} />
          </div>
        </div>
      }
      {
        newsData && Object.keys(newsData).length > 0 && <NewsContent news={newsData} loading={loading}/>
      }
    </div>
  )
}

News.defaultProps = {
  data: []
}
export default News;
