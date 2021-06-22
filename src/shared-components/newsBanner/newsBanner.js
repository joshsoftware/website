import React from "react";
import "./newsBanner.css";

const NewsBanner = ({ bannerTitle, filterItem, className }) => {
  // const FilterPill = ({ filterLabel }) => {
  //   return (
  //     <div className="filter-pill-item text-center">
  //       <span className="d-block">{filterLabel}</span>
  //     </div>
  //   );
  // };
  return (
    // <div className="news-banner-section">
    <div className={`news-banner-section ${className}`}>
      <div className="container">
        <div className="banner-wrap text-center">
          <h1 className="font-weight-bold text-white text-capitalize">
            {bannerTitle}
          </h1>

          {/* <div className="filter-wrap d-flex flex-wrap align-items-center">
          {filterItem.map((items) => (
            <FilterPill filterLabel={items.filterLabel} />
          ))}
        </div> */}
        </div>
      </div>
    </div>
  );
};

NewsBanner.defaultProps = {
  filterItem: [
    {
      filterLabel: "Filter 1",
    },
    {
      filterLabel: "Filter 2",
    },
    {
      filterLabel: "Filter name 3",
    },
    {
      filterLabel: "Filter sample name 4",
    },
    {
      filterLabel: "Filter 1",
    },
    {
      filterLabel: "Filter 1",
    },
    {
      filterLabel: "Filter 1",
    },
    {
      filterLabel: "Filter 1",
    },
    {
      filterLabel: "Filter 1",
    },
  ],
};
export default NewsBanner;
