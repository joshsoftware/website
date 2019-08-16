import React from 'react';
import { Row, Col } from 'reactstrap';
import Media from "react-media";
import { Link } from "react-router-dom";

import { ParallaxImg, InnovationHeading1 } from './homeStyledComponents';
import innovationsImg from "../../assets/images/home/innovation.png"
import innovationBgMobile from "../../assets/images/home/innovationBgMobile.png"
import innovationBtnImg from "../../assets/images/home/innovation_button.svg";
import innovationBtnMobile from "../../assets/images/home/innovation_button_mb.svg";

// import kimayaLogo from "../../assets/images/home/Kimaya.svg";
// import kimayaMbLogo from '../../assets/images/home/Kimaya_mb.svg';
// import codeCuriosityMb from "../../assets/images/home/code_curiosity_mb.png";
// import hungerTerminalMb from "../../assets/images/home/hunger_terminal_mb.png";


const Innovations = (props) => {
  const { innovations } = props;

  return (
    <Media query="(max-width: 900px)">
      {matches =>
        matches ? (
          <ParallaxImg logo={innovationBgMobile} height="262px">
            <Row className="p-4">
              <Col md={3} sm={2} xs={2} />
              <Col md={6} sm={9} xs={9}>
                <Row>
                  {
                    innovations.map(innovation => {
                      return <Col md={4} sm={4} xs={4} >
                        <Link to={innovation.url}>
                          <ParallaxImg logo={innovationBtnMobile} height="88px" className="d-flex justify-content-center width-100">
                            <img src={require(`../../assets/images/home/${innovation.logo}_mb.${innovation.logo_type}`)} alt={innovation.name} />
                          </ParallaxImg>
                        </Link>
                      </Col>
                    })
                  }
                </Row>
              </Col>
              <Col md={1}>
                <InnovationHeading1 fontSize="31px"> Our Innovations</InnovationHeading1>
              </Col>
            </Row>
          </ParallaxImg>
        ) : (
            <ParallaxImg logo={innovationsImg} height="262px">
              <Row className="p-4">
                <Col md={3} sm={2} />
                <Col md={6} sm={2}>
                  <Row>
                    {
                      innovations.map(innovation => {
                        return <Col md={4} key={innovation.name} >
                          <Link to={innovation.url}>
                            <ParallaxImg logo={innovationBtnImg} height="150px" className="d-flex justify-content-center">
                              <img src={require(`../../assets/images/home/${innovation.logo}.${innovation.logo_type}`)} alt={innovation.name} />
                            </ParallaxImg>
                          </Link>
                        </Col>
                      })
                    }
                  </Row>
                </Col>
                <Col md={3}>
                  <InnovationHeading1 fontSize="51px"> Innovations</InnovationHeading1>
                </Col>
              </Row>
            </ParallaxImg>
          )
      }
    </Media>

  )
}

Innovations.defaultProps = {
  innovations: [
    {
      name: "Kimaya",
      logo: 'Kimaya',
      logo_type: 'svg',
      url: ""
    },
    {
      name: "Code Curiosity",
      logo: 'code_curiosity',
      logo_type: 'png',
      url: ""
    },
    {
      name: "Hunger Terminal",
      logo: 'hunger_terminal',
      logo_type: 'svg',
      url: ""
    }
  ]
}

export default Innovations;
