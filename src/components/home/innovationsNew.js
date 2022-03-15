import React, { Fragment } from "react";
import { Heading1 } from "./homeStyledComponents.js";
import { Link } from "react-router-dom";
import innovationImg from "../../assets/images/revampImages/homepage-innovation.png";
import LinkButton from "../../shared-components/linkButton/linkButton";

const InnovationsNew = (props) => {
  const { innovations } = props;

  return (
    <Fragment>
      {/* <section className="section-home"> */}
      {/* <div className="container"> */}
      {/* <div className="innovation-section text-center">
          <Heading1>Innovations</Heading1>
          <div className="innovations-wrap">
            <ul className="innovation-buttons">
              {innovations.map((innovation) => {
                return (
                  <li className="innovation-items" key={innovation.name}>
                    <Link to={innovation.url}>
                      <img
                        src={require(`../../assets/images/innovations/${innovation.logo}`)}
                        className="img-fluid"
                        alt={innovation.name}
                      />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div> */}
      {/* </div> */}
      {/* </div>
      </section> */}
      <section className="section-image-wrap">
        <div className="container">
          <div className="content-details d-flex position-relative">
            <div className="content-col">
              <h1 className="font-weight-bold text-white mb-4">
                Our Innovations
              </h1>
              <p className="text-white">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet,
                consectetur adipisicing elit, sed do eiusmod tempor incididunt
                ut labore sed do eiusmod tempor incididunt ut labore sed do
                eiusmod tempor incididunt ut labore
              </p>
              <LinkButton buttonText="see all" type="submit" />
            </div>
            <div className="image-wrapper position-absolute">
              <img src={innovationImg} alt="innovation img" />
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

InnovationsNew.defaultProps = {
  innovations: [
    {
      name: "Kimaya",
      logo: "kimaya-logo.png",
      url: "",
    },
    {
      name: "Code Curiosity",
      logo: "code-curiosity.png",
      url: "",
    },
    {
      name: "Hunger Terminal",
      logo: "hunger-terminal.png",
      url: "",
    },
  ],
};

export default InnovationsNew;
