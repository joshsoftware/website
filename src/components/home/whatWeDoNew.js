import React from 'react';
import { Heading1 } from "./homeStyledComponents.js";
import Image from 'react-image-webp';

const WhatWeDoNew = (props) => {
  const { domains } = props;

  return (
    <section id="clientsSlide" className="section-home ">
      <div className="container">
        <div className="what-we-do-section">
          <Heading1>What We Do</Heading1>
          <ul className="domain-card d-flex flex-wrap align-items-stretch justify-content-center p-0">
            {domains.map(domain => {
              return (
                <li className="domain-card-content text-center">
                  <div className="domain-card-items d-flex">
                    <div className="abs">
                    <Image
                      src={require(`../../assets/images/home/${domain.logo}`)}
                      webp={require(`../../assets/images/home/${domain.logo}.webp`)}
                      alt={domain.title} />
                    <h5>{domain.title}</h5>
                    <p className="mb-0">{domain.subTitle}</p>
                    </div>
                    </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}

WhatWeDoNew.defaultProps = {
  domains: [
    {
      logo: "Rescue.png",
      title: "Rescue Missions",
      subTitle: "Re-engineer existing inefficient architectures with zero down-time and complete data"
    },
    {
      logo: "IPmultiplier.png",
      title: "IP Multiplier",
      subTitle: "Build brand and business value to develop proprietary intellectual property assets."
    },
    {
      logo: "Accelerate.png",
      title: "Accelerate Time to Market",
      subTitle: "Ensure swift ‘Concept to Code’ delivery to ensure our clients beat their competition to market."
    },
    {
      logo: "domain.png",
      title: "Simplify Domain Complexities",
      subTitle: "Focus on simplifying complexities in our client's industry through intelligent technological intervention"
    },
    {
      logo: "agile.png",
      title: "Agile Process",
      subTitle: "Follow AGILE processes for rapid, high quality and timely delivery with no surprises."
    },
    {
      logo: "architecture.png",
      title: "Scalable Architecture",
      subTitle: "Enable our solutions to sustain, grow and consistently perform at large scale of data and consumers"
    }
  ]
}

export default WhatWeDoNew;
