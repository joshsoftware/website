import React, { Fragment } from "react";
import { Heading1 } from "./homeStyledComponents.js";

const DomainExpertiseNew = props => {
  const { industriesData } = props;

  return (
    <Fragment>
      <section id="clientsSlide" className="section-home">
        <div className="container">
        <div className="domain-section">
          <Heading1>Domain Expertise</Heading1>
          <ul className="domain-expertise-wrapper d-flex flex-wrap align-items-center justify-content-center p-0">
            {industriesData.map(industry => {
              return (
                <li className="domain-expertise-content">
                  <div className="domain-expertise-items d-flex align-items-center flex-column">
                    <img className="mb-3" src={require(`../../assets/images/home/${industry.bgImg}`)} alt={ industry.title }/>
                    <h5>{industry.title}</h5>
                  </div>
                </li>
                // <Col
                //   sm={6}
                //   md={4}
                //   xs={6}
                //   className="pb-14"
                //   key={industry.name}
                // >
                //   <Link
                //     to={`${
                //       routes.DOMAIN_EXPERTISE
                //     }/${industry.urlParameter}`}
                //     className="text-decoration-none"
                //   >
                //     <Svg
                //       src={require(`../../assets/images/home/${industry.bgImg}`)}
                //     />
                //   </Link>
                // </Col>
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
      bgImg: "health-icon.svg",
      urlParameter: 'health',
      title: "Health"
    },
    {
      id: "2",
      name: "MEDIA",
      bgImg: "media-icon.svg",
      urlParameter: 'media',
      title: "Media"
    },
    {
      id: "3",
      name: "FINANCE",
      bgImg: "finance-icon.svg",
      urlParameter: 'education',
      title: "Finance"
    },
    {
      id: "4",
      name: "SPORTS",
      bgImg: "sports-icon.png",
      urlParameter: 'sports',
      title: "sports"
    },
    {
      id: "5",
      name: "MANUFACTURING",
      bgImg: "manufacturing-icon.svg",
      urlParameter: 'marketing-sales',
      title: "Manufacturing"
    },
    {
      id: "6",
      name: "INSURANCE",
      bgImg: "insurance-icon.svg",
      urlParameter: 'insurance',
      title: "insurance"
    }
  ]
};
export default DomainExpertiseNew;
