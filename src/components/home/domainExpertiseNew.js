import React, { Fragment } from "react";
import { Heading1 } from "./homeStyledComponents.js";
import { Link } from "react-router-dom";
import * as routes from "../../routeConstants.js";

const DomainExpertiseNew = (props) => {
  const { industriesData } = props;

  return (
    <Fragment>
      <section id="clientsSlide" className="section-home">
        <div className="container">
          <div className="domain-section">
            <Heading1>DOMAINS</Heading1>
            <ul className="domain-expertise-wrapper d-flex flex-wrap align-items-center justify-content-center p-0">
              {industriesData.map((industry, i) => {
                return (
                  <li key={i} className="domain-expertise-content">
                    <Link
                      to={`${routes.DOMAIN_EXPERTISE}/${industry.urlParameter}`}
                      className="text-decoration-none expertise-link"
                    >
                      <div className="domain-expertise-items d-flex align-items-center flex-column">
                        <img
                          className="mb-3"
                          src={require(`../../assets/images/home/${industry.bgImg}`)}
                          alt={industry.title}
                        />
                        <h5 className="text-uppercase">{industry.title}</h5>
                      </div>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

DomainExpertiseNew.defaultProps = {
  industriesData: [
    {
      id: "1",
      name: "HEALTH",
      bgImg: "health.svg",
      urlParameter: "health",
      title: "Health",
    },
    {
      id: "2",
      name: "INSURANCE",
      bgImg: "insurance.svg",
      urlParameter: "insurance",
      title: "insurance",
    },
    {
      id: "3",
      name: "EDUCATION",
      bgImg: "Education.svg",
      urlParameter: "education",
      title: "Education",
    },
    {
      id: "4",
      name: "MEDIA",
      bgImg: "media.svg",
      urlParameter: "media",
      title: "Media",
    },
    {
      id: "5",
      name: "SPORTS",
      bgImg: "sport.svg",
      urlParameter: "sports",
      title: "sports",
    },
    {
      id: "6",
      name: "MARKETING",
      bgImg: "Marketing.svg",
      urlParameter: "marketing-sales",
      title: "marketing",
    },
  ],
};
export default DomainExpertiseNew;
