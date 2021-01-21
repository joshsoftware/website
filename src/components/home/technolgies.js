import React, { Fragment } from "react";
import { Link } from "react-router-dom";
// import Image from 'react-image-webp';
import * as routes from "../../routeConstants.js";
import { TECHNOLOGIES_USED } from "../../globalConstants";

const Technologies = props => {
    const { domainsData } = props;
    return (
            <Fragment>
                <section id="clientsSlide" className="section-technologies">
                    <div className="container"> 
                    <ul className="technology-wrap d-flex flex-wrap align-items-center justify-content-center mb-0 p-0">
                    {domainsData.map(domain => {
                        return (
                        <li className="d-flex">
                        <Link
                        to={`${routes.TECHNOLOGIES_URL}/${domain.urlParameter}`}
                        className="text-decoration-none"
                        >
                            <img className="img-fluid" alt={domain.name} src={require(`../../assets/images/technologies/${domain.logo}`)}></img>
                        </Link>
                        </li>
                        )
                    })}
                    </ul>
                    </div>
                </section>
            </Fragment>
        );
};

Technologies.defaultProps = {
    domainsData: [
        {
          id: 4,
          name: TECHNOLOGIES_USED.ror,
          logo: "Ruby-new.png",
          urlParameter: 'ruby-on-rails'
        },
        {
          id: 3,
          name: TECHNOLOGIES_USED.go,
          logo: "gophar-new.png",
          urlParameter: 'go'
        },
        {
          id: 5,
          name: TECHNOLOGIES_USED.java,
          logo: "java-new.png",
          urlParameter: 'java'
        },
        {
          id: 1,
          name: TECHNOLOGIES_USED.ios,
          logo: "iOS-new.png",
          urlParameter: 'ios'
        },
        {
          id: 2,
          name: TECHNOLOGIES_USED.android,
          logo: "Android-new.png",
          urlParameter: 'android'
        },
        {
          id: 6,
          name: TECHNOLOGIES_USED.angular,
          logo: "Angular-new.png",
          urlParameter: 'angular'
        }
      ],
    
};

export default Technologies;