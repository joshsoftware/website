import React from "react";

import dompurify from 'dompurify';

const Feed = (props) => {
  let {title, author, thumbnail, description, link, pubDate} = props.feed
  let shortBody =  /<p\b[^>]*>(.*?)<\/p>/.exec(description) ||[]
  const sanitizer = dompurify.sanitize;
  let date = new Date(pubDate)
  shortBody = shortBody[0] || ''
  shortBody = shortBody.substring(0, 200) + '...'

  return (
    <li className="feed mb-2 card-wrap -striped" key={title}>
      <img src={thumbnail} className="img-feed align-self-start mr-3" alt="Teaser"/>
      <div className="feed-body">
        <h5 className="font-weight-normal mt-0 mb-1">
          <a href={link} target="_blank" rel="noopener noreferrer">{title}</a>
        </h5>

        <h6 className="font-weight-normal mb-3">
          {author}, <small className="font-weight-light">{date.toDateString()}</small>
        </h6>

        <div dangerouslySetInnerHTML={{__html: sanitizer(shortBody)}} />
      </div>
    </li>
  )

}

export default Feed;

