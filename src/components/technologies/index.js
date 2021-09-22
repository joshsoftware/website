import React from "react";
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
      {/* <Route path={`${routes.TECHNOLOGIES_URL}/:domain`} component={TechnologiesLayout} />
      {
        props.location.pathname === routes.TECHNOLOGIES_URL
        && <Redirect to={`${routes.TECHNOLOGIES_URL}/ruby-on-rails`} from={routes.TECHNOLOGIES_URL} />
      } */}

      <div className="josh-content">
        <section className="main-banner-section">
          <MainBanner
            bannerClassName="technology"
            pageCaption="Technology"
            startTagLine="We"
            tagText="experts"
            endTagLine="speak about…"
          />
        </section>
        <section className="main-section">
          <div className="container">
            <div className="tiles-wrapper py-5">
              {ProjectData.map((projectInfo) => (
                <Tile
                  tileImg={projectInfo.logo}
                  tileTitle={projectInfo.title}
                  tileDescription={projectInfo.description}
                  tileTags={projectInfo.techStack}
                  // domainExpertiseData={filterDataForSelectDomain()}
                  // selectedDomain={selectedDomain}
                />
              ))}
            </div>
          </div>
          <CtaButton linkListItem={linkListItem} />
        </section>
        <section className="industry-type-section">
          <p className="industry-type-heading text-center font-weight-bold">
            Explore our work in these Industries
          </p>
          <IndustryTypeItem industryItem={industryItemData} />
        </section>
      </div>
    </>
  );
};

// const TechnologiesLayout = ({ match }) => {
//   const selectedDomain = match.params.domain
//     ? match.params.domain
//     : "ruby-on-rails";

// const filterDataForSelectDomain = () => {
//   const techData = domainsData.filter(
//     (tech) => tech.urlParameter === selectedDomain
//   );
//   if (techData.length > 0) {
//     const keywordsToSearch = techData[0].keywords;
//     return ProjectData.filter((project) =>
//       project.techStack.find(
//         (e) =>
//           keywordsToSearch.filter((l) =>
//             e.toLowerCase().includes(l.toLowerCase())
//           ).length > 0
//       )
//     );
//   }
//   return [];
// };

//   return (
//     <section className="w-100 section-home">
//       <Header
//         domains={domainsData}
//         imagesPath={"technologies"}
//         baseRoute={routes.TECHNOLOGIES_URL}
//         changeImageOnSelect={false}
//         selectedDomain={selectedDomain}
//         imageSize="30px"
//       />
//       <ProjectWork
//         domainExpertiseData={filterDataForSelectDomain()}
//         selectedDomain={selectedDomain}
//       />
//     </section>
//   );
// };

// const domainsData = [
//   {
//     title: TECHNOLOGIES_USED.ror,
//     logo: "ruby",
//     fileType: "png",
//     keywords: ["ruby", "rails", "rubyonrails"],
//     urlParameter: "ruby-on-rails",
//   },
//   {
//     title: TECHNOLOGIES_USED.go,
//     logo: "gopher",
//     fileType: "png",
//     keywords: ["go ", "golang"],
//     urlParameter: "go",
//   },
//   {
//     title: TECHNOLOGIES_USED.react,
//     logo: "react",
//     fileType: "png",
//     keywords: ["react", "reactjs"],
//     urlParameter: "react",
//   },
//   {
//     title: TECHNOLOGIES_USED.ios,
//     logo: "apple",
//     fileType: "png",
//     keywords: ["ios", "flux"],
//     urlParameter: "ios",
//   },
//   {
//     title: TECHNOLOGIES_USED.android,
//     logo: "android",
//     fileType: "png",
//     keywords: ["android", "flux"],
//     urlParameter: "android",
//   },
// {
//   title: 'Other',
//   logo: 'other',
//   fileType: "png",
//   keywords: ['java']
//   urlParameter: 'other'
// },
// ];

const industryItemData = [
  {
    imgPath: "media.png",
    industryTitle: "medium",
  },
  {
    imgPath: "medium-scale.png",
    industryTitle: "scale",
  },
  {
    imgPath: "medium-scale.png",
    industryTitle: "medium",
  },
  {
    imgPath: "medium-scale.png",
    industryTitle: "scale",
  },
  {
    imgPath: "medium-scale.png",
    industryTitle: "medium",
  },
  {
    imgPath: "medium-scale.png",
    industryTitle: "scale",
  },
  {
    imgPath: "medium-scale.png",
    industryTitle: "medium",
  },
  {
    imgPath: "medium-scale.png",
    industryTitle: "scale",
  },
  {
    imgPath: "medium-scale.png",
    industryTitle: "medium",
  },
  {
    imgPath: "medium-scale.png",
    industryTitle: "scale",
  },
];
const tileData = [
  {
    tileImg: "fundamentor.png",
    tileTitle: "FUNDAMENTOR",
    tileDescription:
      "Fundamentor is an innovative web application that enhances life skills and cognitive aptitude among school students using technology, analytics and gamification.Sustainable career success requires Leadership,Collaboration",
    tags: [
      {
        tileTag: "Rails 4.1.6",
      },
      {
        tileTag: "Ruby 2.1.3",
      },
      {
        tileTag: "MongoDB",
      },
      {
        tileTag: "D3.js",
      },
      {
        tileTag: "Razorpay",
      },
      {
        tileTag: "PayUMoney s3",
      },
      {
        tileTag: "JW Player",
      },
    ],
  },
  {
    tileImg: "yuhmbox.png",
    tileTitle: "YUHmbox",
    tileDescription:
      "This portal helps the doctors to shorten the consultation time as well as automate the process right from registering the patient till prescription of drugs and referring",
    tags: [
      {
        tileTag: "Ruby 2.3.3",
      },
      {
        tileTag: "Rails 5.0.0",
      },
      {
        tileTag: "PosterSQL 9.5.3",
      },
      {
        tileTag: "Sidekiq",
      },
      {
        tileTag: "ElasticSearch 2.3.3",
      },
      {
        tileTag: "Angular JS 1.4.9",
      },
      {
        tileTag: "Gulp",
      },
      {
        tileTag: "Node JS with NPM",
      },
      {
        tileTag: "Bower",
      },
      {
        tileTag: "Ionic 1.7.16",
      },
      {
        tileTag: "Cordova 6.3.0",
      },
      {
        tileTag: "Andriod",
      },
      {
        tileTag: "iOS",
      },
    ],
  },
  {
    tileImg: "inmateaid.png",
    tileTitle: "Inmate AID",
    tileDescription:
      "Brandscope Pty. Ltd. is focused on providing a streamline solution and maximizes the selling process for suppliers, retailers and agents in Australian fashion and Action Sports",
    tags: [
      {
        tileTag: "Ruby 2.1.0",
      },
      {
        tileTag: "Rails 4.1.10",
      },
      {
        tileTag: "Mongoid 4.0.0",
      },
      {
        tileTag: "Sidekiq 3.3.0",
      },
      {
        tileTag: "Nginx + passenger",
      },
      {
        tileTag: "AWS-EC2",
      },
      {
        tileTag: "FTP Server",
      },
    ],
  },
  {
    tileImg: "altizon.png",
    tileTitle: "ALTIZON",
    tileDescription:
      "QuickInsure is a specially developed platform for convenience in buying motor vehicle insurance and third party insurance. Buying an insurance for vehicles can",
    tags: [
      {
        tileTag: "Rails 2.1.2",
      },
      {
        tileTag: "Rails 4.2.5",
      },
      {
        tileTag: "MongoDB",
      },
      {
        tileTag: "React",
      },
      {
        tileTag: "Action Cable",
      },
      {
        tileTag: "ElacsticSearch 5.3",
      },
      {
        tileTag: "Andriod",
      },
    ],
  },
  {
    tileImg: "ffd.png",
    tileTitle: "FREEDOM FROM DIABETES",
    tileDescription:
      "A scalable digital portal built from scratch, that facilitates member meet-ups, manages payments and generated statistical reports pertaining to group activities, attendance and member feedback.",
    tags: [
      {
        tileTag: "Ruby",
      },
      {
        tileTag: "Rails",
      },
      {
        tileTag: "PostgreSQL",
      },
      {
        tileTag: "Rackspace",
      },
    ],
  },
  {
    tileImg: "bidwheelz.png",
    tileTitle: "BIDWHEELZ",
    tileDescription:
      "TourConnect makes managing rates and contracting quick and easy! TourConnect communicates what the Supplier product is and how much it’s going to cost each Contractor.",
    tags: [
      {
        tileTag: "Ruby 3.2..21",
      },
      {
        tileTag: "Mongoid 3.1.6",
      },
      {
        tileTag: "ActiveAdmin",
      },
      {
        tileTag: "NodeJS",
      },
    ],
  },
  {
    tileImg: "skout.png",
    tileTitle: "SKOUT",
    tileDescription:
      "Fundamentor is an innovative web application that enhances life skills and cognitive aptitude among school students using technology, analytics and gamification.Sustainable career success requires Leadership,Collaboration",
    tags: [
      {
        tileTag: "Rails 4.1.6",
      },
      {
        tileTag: "Ruby 2.1.3",
      },
      {
        tileTag: "MongoDB",
      },
      {
        tileTag: "D3.js",
      },
      {
        tileTag: "Razorpay",
      },
      {
        tileTag: "PayUMoney s3",
      },
      {
        tileTag: "JW Player",
      },
    ],
  },
  {
    tileImg: "simplysmart.png",
    tileTitle: "SIMPLYSMART",
    tileDescription:
      "This portal helps the doctors to shorten the consultation time as well as automate the process right from registering the patient till prescription of drugs and referring",
    tags: [
      {
        tileTag: "Ruby 2.3.3",
      },
      {
        tileTag: "Rails 5.0.0",
      },
      {
        tileTag: "PosterSQL 9.5.3",
      },
      {
        tileTag: "Sidekiq",
      },
      {
        tileTag: "ElasticSearch 2.3.3",
      },
      {
        tileTag: "Angular JS 1.4.9",
      },
      {
        tileTag: "Gulp",
      },
      {
        tileTag: "Node JS with NPM",
      },
      {
        tileTag: "Bower",
      },
      {
        tileTag: "Ionic 1.7.16",
      },
      {
        tileTag: "Cordova 6.3.0",
      },
      {
        tileTag: "Andriod",
      },
      {
        tileTag: "iOS",
      },
    ],
  },
  {
    tileImg: "kimaya.png",
    tileTitle: "KIMAYA NICU",
    tileDescription:
      "Brandscope Pty. Ltd. is focused on providing a streamline solution and maximizes the selling process for suppliers, retailers and agents in Australian fashion and Action Sports industry… Through this platform a supplier gets immediate access to quality retailers using unique and dynamic online tools to launch their brand with speed and efficiency giving them the competitive edge as well as a retailer gets the desired brands where they can view and buy product for their stores. An agent can reach to a large number of retailers and suppliers across geographies in no time with negligible efforts.The delivered solution features high resolution photography and video, concise product descriptions, buy plans, PDF catalogue automation, live social networking and ratings systems to mimic the traditional “touch n feel” sales process and create a 24/7 on-line showing experience for the Retailer.",
    tags: [
      {
        tileTag: "Ruby 2.1.0",
      },
      {
        tileTag: "Rails 4.1.10",
      },
      {
        tileTag: "Mongoid 4.0.0",
      },
      {
        tileTag: "Sidekiq 3.3.0",
      },
      {
        tileTag: "Nginx + passenger",
      },
      {
        tileTag: "AWS-EC2",
      },
      {
        tileTag: "FTP Server",
      },
      {
        tileTag: "Node JS with NPM",
      },
      {
        tileTag: "Bower",
      },
      {
        tileTag: "Ionic 1.7.16",
      },
      {
        tileTag: "Cordova 6.3.0",
      },
      {
        tileTag: "Andriod",
      },
      {
        tileTag: "iOS",
      },
    ],
  },
  {
    tileImg: "groupbuzz.png",
    tileTitle: "GROUPBUZZ",
    tileDescription:
      "GroupBuzz is dedicated to creating an optimum end user experience for group owners and members. To achieve this, the owners wanted to build a portal that meets the",
    tags: [
      {
        tileTag: "Rails 4.2.0",
      },
      {
        tileTag: "Ruby 2.1.1",
      },
      {
        tileTag: "MySQL",
      },
      {
        tileTag: "DelayedJob",
      },
      {
        tileTag: "AWS S3",
      },
      {
        tileTag: "GoCardless",
      },
      {
        tileTag: "PayPal",
      },
      {
        tileTag: "Rackspace",
      },
    ],
  },
];

export default Technologies;
