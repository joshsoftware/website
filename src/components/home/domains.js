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
      <div className="doimain-grid-container">
          {
            domains.map(domain => {
              return(
                <DomainCube logo={domain.logo} color={domain.color} width={domain.width}
                  height={domain.height} color={domain.color} x={domain.x} y={domain.y}
                  blur={domain.blur} opacity={domain.opacity} top_left_radius= {domain.top_left_radius}
                  top_right_radius= {domain.top_right_radius} bottom_left_radius= {domain.bottom_left_radius}
                  bottom_right_radius= {domain.bottom_right_radius} lastCube={domain.lastCube} borderColor={domain.borderColor}>

                  <div>
                    {
                      domain.logo ?
                      <img src={domain.logo} alt={domain.name} className="img-fluid" />
                      : null
                    }
                    {
                      domain.name == 'DOMAIN EXPERTIES' ?
                        <>
                          <div style={{fontSize: '23px'}} className="domain-header">DOMAIN</div>
                          <div style={{fontSize: '18px'}} className="domain-header">EXPERTIES</div>
                        </>
                      :
                      <div style={{color: 'white', fontSize: (domain.fontSize ? domain.fontSize : '16px')}} >{domain.name}</div>
                    }
                  </div>
                </DomainCube>
              )
            })
          }
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
      height: '123.24px',
      borderColor: 'transparent'
    },
    {
      logo: health,
      name: "FIANANCE",
      show: true,
      height: '123.24px',
      width: '129.21px',
      color: '#333333, #767676',
      borderColor: '#656565'
    },
    {
      logo: null,
      name: 'DOMAIN EXPERTIES',
      halfRect: false,
      show: true,
      height: '123.24px',
      width: '129.21px',
      color: '#333333, #767676',
      borderColor: 'transparent'
    },
    {
      logo: null,
      name: null,
      halfRect: true,
      show: false,
      width: '36.49px',
      height: '123.24px',
      borderColor: 'transparent'
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
      blur: '16px',
      borderColor: '#D4645F'
    },
    {
      logo: health,
      name: "HEALTH",
      show: true,
      height: '123.24px',
      width: '129.21px',
      color: '#333333, #767676',
      borderColor: '#656565'
    },
    {
      logo: media,
      name: "MEDIA",
      show: true,
      height: '123.24px',
      width: '129.21px',
      color: '#333333, #767676',
      borderColor: '#656565'
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
      blur: '16px',
      borderColor: '#D4645F'
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
      blur: '16px',
      borderColor: '#FFFFFF'
    },
    {
      logo: insurance,
      name: "INSURANCE",
      show: true,
      height: '123.24px',
      width: '129.21px',
      color: '#333333, #767676',
      borderColor: '#656565'
    },
    {
      logo: health,
      name: "SPORTS",
      show: true,
      height: '123.24px',
      width: '129.21px',
      color: '#333333, #767676',
      borderColor: '#656565'
    },
    {
      logo: null,
      name: null,
      halfRect: true,
      show: false,
      width: '36.49px',
      height: '123.24px',
      borderColor: 'transparent'
    },
    {
      logo: null,
      name: null,
      halfRect: true,
      show: false,
      width: '36.49px',
      height: '123.24px',
      borderColor: 'transparent'
    },
    {
      logo: null,
      name: null,
      halfRect: false,
      show: false,
      color: '#D4645F',
      height: '123.24px',
      width: '129.21px',
      opacity: '0.24',
      borderColor: '#D4645F'
    },
    {
      logo: health,
      name: "MANUFACTURING",
      show: true,
      height: '123.24px',
      width: '129.21px',
      fontSize: '14px',
      color: '#333333, #767676',
      borderColor: '#656565'
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
      blur: '16px',
      borderColor: '#D4645F'
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
      blur: '16px',
      borderColor: 'transparent'
    },
    {
      logo: null,
      name: null,
      halfRect: false,
      show: false,
      width: '129.21px',
      height: '123.24px',
      borderColor: 'transparent'
    },
    {
      logo: null,
      name: null,
      halfRect: true,
      show: false,
      height: '123.24px',
      width: '129.21px',
      lastCube: true,
      color: '#FFFFFF, #F2F2F2',
      borderColor: '#FFFFFF'
    }
  ]
}
