import React, {useEffect, useState} from "react";

import Feed from "./feed";

const RssFeeds = (props) => {
  const [feeds, setFeeds] = useState([])
  let rssTag = props.rssTag

  useEffect(() => {
    (async () => {
      let response = await fetch(`https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2Fjoshsoftware%2Ftagged%2F${rssTag}`)

      let feed = await response.json()
      setFeeds(feed.items)
    })()
  }, [rssTag])

  return (
    <div className="card card-expertise">
      <div className="card-body"> <h2 className="card-title"> Updates </h2>
        <div className="content">
          <ul className="list-unstyled list-feed">
            {feeds.map((feed) => <Feed feed={feed} key={feed.title} />)}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default RssFeeds;

