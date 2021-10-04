import React from "react";
import _ from "lodash/array";
import Header from "../domainExpertise/domainHeader.js";
import { TECHNOLOGIES_USED } from "../../globalConstants";
import * as routes from "../../routeConstants.js";
import { Route, Redirect } from "react-router-dom";
import ProjectWork from "./projectsWork.js";
import { ProjectData } from "./projectsData.js";
import Tile from "../../shared-components/tile/tile.js";
import MainBanner from "../../shared-components/mainBanner/mainbanner";
import CtaButton from "../../shared-components/ctaButton/ctaButton.js";
import IndustryTypeItem from "../../shared-components/industryTypeItem/industryTypeItem.js";
import "./technologies-new.css";

const linkListItem = [
  {
    linkTitle: "Success Stories",
    link: routes.SUCCESS_STORIES_URL,
    linkClassName: "-success-story",
  },
  {
    linkTitle: "Innovations",
    link: routes.INNOVATIONS,
    linkClassName: "-innovation",
  },
];

const Technologies = (props) => {
  return (
    <>
      <Route
        path={`${routes.TECHNOLOGIES_URL}/:domain`}
        component={TechnologiesLayout}
      />
      {props.location.pathname === routes.TECHNOLOGIES_URL && (
        <Redirect
          to={`${routes.TECHNOLOGIES_URL}/ruby-on-rails`}
          from={routes.TECHNOLOGIES_URL}
        />
      )}
    </>
  );
};

const TechnologiesLayout = ({ match }) => {
  const selectedDomain = match.params.domain
    ? match.params.domain
    : "ruby-on-rails";

  console.log(selectedDomain);
  const filterDataForSelectDomain = () => {
    const techData = domainsData.filter(
      (tech) => tech.urlParameter === selectedDomain
    );
    if (techData.length > 0 && techData[0].urlParameter !== "all") {
      const keywordsToSearch = techData[0].keywords;
      return ProjectData.filter((project) =>
        project.techStack.find(
          (e) =>
            keywordsToSearch.filter((l) =>
              e.toLowerCase().includes(l.toLowerCase())
            ).length > 0
        )
      );
    }
    return ProjectData;
  };

  const groupFilteredProjects = _.chunk(filterDataForSelectDomain(), 3);

  return (
    // <section className="w-100 section-home">
    //   <Header
    //     domains={domainsData}
    //     imagesPath={"technologies"}
    //     baseRoute={routes.TECHNOLOGIES_URL}
    //     changeImageOnSelect={false}
    //     selectedDomain={selectedDomain}
    //     imageSize="30px"
    //   />
    //   <ProjectWork
    //     domainExpertiseData={filterDataForSelectDomain()}
    //     selectedDomain={selectedDomain}
    //   />
    // </section>
    <div className="josh-content">
      <section className="main-banner-section position-relative">
        <MainBanner
          bannerClassName="technology"
          pageCaption="Technology"
          startTagLine="We"
          tagText="experts"
          endTagLine="speak about…"
        />
        <Header
          domains={domainsData}
          imagesPath={"technologies"}
          baseRoute={routes.TECHNOLOGIES_URL}
          changeImageOnSelect={false}
          selectedDomain={selectedDomain}
          // imageSize="30px"
        />
      </section>

      <section className="main-section">
        <div className="container">
          <div className="tiles-wrapper d-flex flex-column align-items-center">
            {/* {filterDataForSelectDomain().map((projectInfo) => (
              <Tile
                tileImg={projectInfo.logo}
                tileTitle={projectInfo.title}
                tileDescription={projectInfo.description}
                tileTags={projectInfo.techStack}
              />
            ))} */}

            {groupFilteredProjects.map((groupProjects, index) => {
              return index % 2 === 0 ? (
                <>
                  <div className="tiles-row d-flex">
                    <div className="vertical-tiles-row">
                      <Tile
                        tileImg={groupProjects[0].logo}
                        tileTitle={groupProjects[0].title}
                        tileDescription={groupProjects[0].description}
                        tileTags={groupProjects[0].techStack}
                        className="vertical"
                      />
                    </div>
                    <div className="horizontal-tiles-row d-flex">
                      {groupProjects[1] && groupProjects[2] && (
                        <>
                          <Tile
                            tileImg={groupProjects[1].logo}
                            tileTitle={groupProjects[1].title}
                            tileDescription={groupProjects[1].description}
                            tileTags={groupProjects[1].techStack}
                            className="horizontal"
                          />
                          <Tile
                            tileImg={groupProjects[2].logo}
                            tileTitle={groupProjects[2].title}
                            tileDescription={groupProjects[2].description}
                            tileTags={groupProjects[2].techStack}
                            className="horizontal"
                          />
                        </>
                      )}
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="tiles-row d-flex">
                    <div className="horizontal-tiles-row d-flex">
                      <Tile
                        tileImg={groupProjects[0].logo}
                        tileTitle={groupProjects[0].title}
                        tileDescription={groupProjects[0].description}
                        tileTags={groupProjects[0].techStack}
                        className="horizontal"
                      />
                      {groupProjects[1] && (
                        <Tile
                          tileImg={groupProjects[1].logo}
                          tileTitle={groupProjects[1].title}
                          tileDescription={groupProjects[1].description}
                          tileTags={groupProjects[1].techStack}
                          className="horizontal"
                        />
                      )}
                    </div>
                    {groupProjects[2] && (
                      <div className="vertical-tiles-row">
                        <Tile
                          tileImg={groupProjects[2].logo}
                          tileTitle={groupProjects[2].title}
                          tileDescription={groupProjects[2].description}
                          tileTags={groupProjects[2].techStack}
                          className="vertical"
                        />
                      </div>
                    )}
                  </div>
                </>
              );
            })}
          </div>
        </div>
        <CtaButton linkListItem={linkListItem} />
      </section>
      <section className="industry-type-section">
        <p className="industry-type-heading text-center font-weight-bold text-capitalize">
          Explore our work in these Industries
        </p>
        <IndustryTypeItem industryItem={industryItemData} />
      </section>
    </div>
  );
};

const domainsData = [
  {
    title: "ALL",
    logo: "",
    // fileType: "png",
    keywords: [],
    urlParameter: "all",
  },
  {
    title: TECHNOLOGIES_USED.ruby,
    logo: "ruby-logo@2x.png",
    // fileType: "png",
    keywords: ["ruby", "rails", "rubyonrails"],
    urlParameter: "ruby-on-rails",
  },
  {
    title: TECHNOLOGIES_USED.go,
    logo: "go-logo@2x.png",
    // fileType: "png",
    keywords: ["go ", "golang"],
    urlParameter: "go",
  },
  {
    title: TECHNOLOGIES_USED.react,
    logo: "react-logo@2x.png",
    // fileType: "png",
    keywords: ["react", "reactjs"],
    urlParameter: "react",
  },
  {
    title: TECHNOLOGIES_USED.ios,
    logo: "ios-logo@2x.png",
    // fileType: "png",
    keywords: ["ios", "flux"],
    urlParameter: "ios",
  },
  {
    title: TECHNOLOGIES_USED.android,
    logo: "android-logo@2x.png",
    // fileType: "png",
    keywords: ["android", "flux"],
    urlParameter: "android",
  },
  {
    title: TECHNOLOGIES_USED.angular,
    logo: "angular-logo@2x.png",
    // fileType: "png",
    keywords: ["angular"],
    urlParameter: "angular",
  },
  {
    title: TECHNOLOGIES_USED.ror,
    logo: "rails-logo@2x.png",
    fileType: "png",
    keywords: ["java"],
    urlParameter: "ruby-on-rails",
  },
];

const industryItemData = [
  {
    imgPath: "medium-scale.png",
    industryTitle: "medium Scale",
  },
  {
    imgPath: "large-scale.png",
    industryTitle: "Large scale",
  },
  {
    imgPath: "health.png",
    industryTitle: "health",
  },
  {
    imgPath: "sports.png",
    industryTitle: "sports",
  },
  {
    imgPath: "media.png",
    industryTitle: "media",
  },
  {
    imgPath: "telecom.png",
    industryTitle: "telecom",
  },
  {
    imgPath: "retail.png",
    industryTitle: "retail",
  },
  {
    imgPath: "marketing.png",
    industryTitle: "marketing",
  },
  {
    imgPath: "insurance.png",
    industryTitle: "insurance",
  },
  {
    imgPath: "education.png",
    industryTitle: "education",
  },
  {
    imgPath: "BFSI.png",
    industryTitle: "BFSI",
  },
];

export default Technologies;
