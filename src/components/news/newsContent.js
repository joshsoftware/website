import React from "react";

import { MediaCard } from "../../shared-components";

const Component = (props) => {
  const { news } = props;
  return (
    <>
      {news.map((n, i) => (
        <MediaCard
          key={i}
          photo={n.image_url}
          headline={n.title}
          bodycopy={n.description}
          url={n.link}
          date={n.formatted_date}
        />
      ))}
    </>
  );
};

export default Component;
