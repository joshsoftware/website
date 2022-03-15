import React, { Fragment } from "react";
import { Heading1 } from "./homeStyledComponents.js";
import { Link } from "react-router-dom";
import innovationImg from "../../assets/images/revampImages/homepage-innovation.png";
import LinkButton from "../../shared-components/linkButton/linkButton";

const InnovationsNew = (props) => {
  const { innovations } = props;

  return (
    <Fragment>
      <section className="section-home">
        {/* <div className="container"> */}
        <div className="innovation-section text-center">
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
          </div>
          {/* </div> */}
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
