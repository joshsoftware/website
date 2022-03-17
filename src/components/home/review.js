import React from "react";

const Review = (props) => {
  return (
    <section className="section-review text-center">
      <div className="container">
        <h1 className="site-heading font-weight-bold">Check Our Reviews</h1>
        <img
          src={require(`../../assets/images/revampImages/clutch@2x.png`)}
          alt="clutch img"
        />
      </div>
    </section>
  );
};

export default Review;
