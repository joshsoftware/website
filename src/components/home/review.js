import React from "react";

const Review = (props) => {
  return (
    <section className="section-review text-center">
      <div className="container">
        <h1 className="site-heading font-weight-bold">Check Our Reviews</h1>
        <div className="review-item bg-white d-inline-block">
          <img
            src={require(`../../assets/images/revampImages/clutch.png`)}
            alt="clutch img"
          />
        </div>
      </div>
    </section>
  );
};

export default Review;
