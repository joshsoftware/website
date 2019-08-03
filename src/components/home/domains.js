import React from 'react'
import { Heading1, DomainCube } from "./homeStyledComponents.js"
import finance from "../../assetes/images/domains/fianance.svg";
import health from "../../assetes/images/domains/health.svg";
import media from "../../assetes/images/domains/media.svg";
import insurance from "../../assetes/images/domains/insurance.svg";
// import sports from "../../assetes/images/domains/sports.svg";

export const Domains = (props) => {
  const { domains } = props;

  return (
    <section id="clientsSlide"
      className="section-home bg-props skrollable skrollable-between">
      <div className="container" style={{ paddingRight: 5, paddingLeft: 5 }}>
        <ul className="list-unstyled list-domain">
          {
            domains.map(domain => {
              return(
                <li key={domain.name} className={domain.halfRect ? 'half-rect' : null}>
                  <DomainCube logo={domain.logo} color={domain.color} width={domain.width}
                    height={domain.height} color={domain.color} x={domain.x} y={domain.y}
                    blur={domain.blur} opacity={domain.opacity} top_left_radius= {domain.top_left_radius}
                    top_right_radius= {domain.top_right_radius} bottom_left_radius= {domain.bottom_left_radius}
                    bottom_right_radius= {domain.bottom_right_radius}>

                    <div className="domain-block">
                      {
                        domain.logo ?
                        <img src={domain.logo} alt={domain.name} className="img-fluid" />
                        : null
                      }
                      <span style={{color: 'white'}}>{domain.name}</span>
                    </div>
                  </DomainCube>
                </li>
              )
            })
          }
        </ul>
      </div>
    </section>
  )
}

Domains.defaultProps = {
  domains: [
    {
      logo: null,
      name: null,
      halfRect: true,
      show: false,
      width: '36.49px',
      height: '123.24px'
    },
    {
      logo: health,
      name: "FIANANCE",
      show: true,
      height: '123.24px',
      width: '129.21px'
    },
    {
      logo: null,
      name: 'DOMAIN EXPERTIES',
      halfRect: false,
      show: true,
      height: '123.24px',
      width: '129.21px'
    },
    {
      logo: null,
      name: null,
      halfRect: true,
      show: false,
      width: '36.49px',
      height: '123.24px'
    },
    {
      logo: null,
      name: null,
      halfRect: true,
      show: false,
      width: '36.49px',
      height: '123.24px',
      color: '#D4645F',
      top_left_radius: '0px',
      bottom_left_radius: '0px',
      opacity: '0.36',
      blur: '16px'
    },
    {
      logo: health,
      name: "HEALTH",
      show: true,
      height: '123.24px',
      width: '129.21px'
    },
    {
      logo: media,
      name: "MEDIA",
      show: true,
      height: '123.24px',
      width: '129.21px'
    },
    {
      logo: null,
      name: null,
      halfRect: true,
      show: false,
      width: '36.49px',
      height: '123.24px',
      color: '#D4645F',
      top_right_radius: '0px',
      bottom_right_radius: '0px',
      opacity: '0.55',
      blur: '16px'
    },
    {
      logo: null,
      name: null,
      halfRect: true,
      show: false,
      width: '36.49px',
      height: '123.24px',
      color: '#FFFFFF',
      top_left_radius: '0px',
      bottom_left_radius: '0px',
      blur: '16px'
    },
    {
      logo: insurance,
      name: "INSURANCE",
      show: true,
      height: '123.24px',
      width: '129.21px'
    },
    {
      logo: health,
      name: "SPORTS",
      show: true,
      height: '123.24px',
      width: '129.21px'
    },
    {
      logo: null,
      name: null,
      halfRect: true,
      show: false,
      width: '36.49px',
      height: '123.24px'
    },
    {
      logo: null,
      name: null,
      halfRect: true,
      show: false,
      width: '36.49px',
      height: '123.24px'
    },
    {
      logo: null,
      name: null,
      halfRect: false,
      show: false,
      color: '#D4645F',
      height: '123.24px',
      width: '129.21px',
      opacity: '0.24'
    },
    {
      logo: health,
      name: "MANUFACTURING",
      show: true,
      height: '123.24px',
      width: '129.21px'
    },
    {
      logo: null,
      name: null,
      halfRect: true,
      show: false,
      width: '36.49px',
      height: '123.24px',
      color: '#D4645F',
      top_right_radius: '0px',
      bottom_right_radius: '0px',
      opacity: '0.77',
      blur: '16px'
    },
    {
      logo: null,
      name: null,
      halfRect: true,
      show: false,
      width: '36.49px',
      height: '123.24px',
      top_left_radius: '0px',
      bottom_left_radius: '0px',
      blur: '16px'
    },
    {
      logo: null,
      name: null,
      halfRect: false,
      show: false,
      width: '129.21px',
      height: '123.24px',
    },
    {
      logo: null,
      name: null,
      halfRect: true,
      show: false,
      height: '123.24px',
      width: '129.21px',
      color: '#FFFFFF'
    }
  ]
}
