import React, { Fragment } from 'react'
import { Link } from "react-router-dom";
const SuccessStoriesNew = (props) => {
  const { stories } = props;
  return  (
    <Fragment>
      <section className="section-stories">
        <div className="container">
          <h1 className="success-section-heading text-uppercase">Success Stories</h1>
          <ul className="story-wrap">
          {
            stories.map((story, index) => {
              return (
                <li className={"story-list-item story-item-"+(index+1)} key={story.name}>
                <Link to={`/success_stories/${story.slug}`} >
                  <img src={require(`../../assets/images/successStories/${story.logo}`)} />
                </Link>
              </li>
              )})
          }
          </ul>
          </div>
      </section>
    </Fragment>
  );
};

SuccessStoriesNew.defaultProps = {
  stories: [
    { name: "Freedom from Diabetes", slug: "ffd", logo: "dibetic.png" },
    { name: "BrandScope", slug: "brandscope", logo: "Brandscope2.png" },
    { name: "Star Network", slug: "star", logo: "Star.png" },
    // { name: "Star Network", slug: "star", logo: "Star.png"}
  ]
}

export default SuccessStoriesNew;
