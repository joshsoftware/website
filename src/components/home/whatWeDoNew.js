import React from "react";
import { Heading1 } from "./homeStyledComponents.js";
import Image from "react-image-webp";
import DomainDetails from "../../shared-components/domainDetails/domaindetails.js";

const WhatWeDoNew = (props) => {
  const { domains } = props;

  return (
    <section className="section-what-we-do">
      <ul className="domain-card p-0 mb-0 list-unstyled">
        <li className="box">
          <h1 className="site-heading font-weight-bold">What we do?</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet,
            consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
            labore consectetur adipisicing elit, sed do eiusmod tempor
            incididunt ut labore
          </p>
        </li>
        {domains.map((domain, i) => {
          return (
            <DomainDetails
              className={domain.className}
              src={require(`../../assets/images/revampImages/${domain.logo}`)}
              domainTitle={domain.title}
              domainDescription={domain.subTitle}
            />
          );
        })}
      </ul>
      {/* <div className="container">
        <div className="what-we-do-section">
          <Heading1>What We Do</Heading1>
          <ul className="domain-card d-flex flex-wrap align-items-stretch justify-content-center p-0">
            {domains.map((domain, i) => {
              return (
                <li key={i} className="domain-card-content text-center">
                  <div className="domain-card-items d-flex">
                    <div className="abs">
                      <Image
                        src={require(`../../assets/images/home/${domain.logo}`)}
                        webp={require(`../../assets/images/home/${domain.logo}.webp`)}
                        alt={domain.title}
                      />
                      <h5>{domain.title}</h5>
                      <p className="mb-0">{domain.subTitle}</p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div> */}
    </section>
  );
};

WhatWeDoNew.defaultProps = {
  domains: [
    {
      className: "box1",
      logo: "end-solution.png",
      title: "End To End Solution",
      subTitle:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore",
    },
    {
      className: "box2",
      logo: "Rescue.png",
      title: "Rescue Missions",
      subTitle:
        "Re-engineer existing inefficient architectures with zero down-time and complete data",
    },
    {
      className: "box3",
      logo: "IPmultiplier.png",
      title: "IP Multiplier",
      subTitle:
        "Build brand and business value to develop proprietary intellectual property assets.",
    },
    {
      className: "box4",
      logo: "Accelerate.png",
      title: "Accelerate Time to Market",
      subTitle:
        "Ensure swift ‘Concept to Code’ delivery to ensure our clients beat their competition to market.",
    },
    {
      className: "box5",
      logo: "domain.png",
      title: "Simplify Domain Complexities",
      subTitle:
        "Focus on simplifying complexities in our client's industry through intelligent technological intervention",
    },
    {
      className: "box6",
      logo: "agile.png",
      title: "Agile Process",
      subTitle:
        "Follow AGILE processes for rapid, high quality and timely delivery with no surprises.",
    },
    {
      className: "box7",
      logo: "architecture.png",
      title: "Scalable Architecture",
      subTitle:
        "Enable our solutions to sustain, grow and consistently perform at large scale of data and consumers",
    },
  ],
};

export default WhatWeDoNew;
