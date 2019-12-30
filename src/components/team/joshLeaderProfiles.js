import React from "react";
import PropTypes from "prop-types";

import { Heading1 } from "../home/homeStyledComponents";
import IconWithLink from "../shared/iconWithLink";

import "./team.scss"

const getProfileImage = (API_PUBLIC_URL, public_profile) => {
  return (
    <img
      src={`${API_PUBLIC_URL}${public_profile.image_medium_url}`}
      alt={public_profile.name}
      className="img-fluid leader-img"
    />
  );
};

const getProfileNameAndDesignation = (name, designation) => {
  return (
    <div className="person-info">
      <h5>{name}</h5>
      <p className="designation">{designation}</p>
    </div>
  );
};

const getSectionBody = props => {
  const { leaders, GITHUB_BASE_URL, API_PUBLIC_URL } = props;
  return (
    <div className="container">
      <div className="row">
        {leaders.map(leader => {
          const {
            public_profile,
            employee_detail: { designation: { name } = {} } = {}
          } = leader;
          const githubUrl = `${GITHUB_BASE_URL}${public_profile.github_handle ||
            ""}`;

          return (
            <div className="col-lg-4 col-md-4 col-sm-6" key={public_profile.name}>
              <div className="card card-team">
                {getProfileImage(API_PUBLIC_URL, public_profile)}
                <div className="card-body">
                  {getProfileNameAndDesignation(public_profile.name, name)}
                  <div className="professional-platforms">
                    {public_profile.linkedin_url && (
                      <IconWithLink
                        url={public_profile.linkedin_url}
                        iconClass="icon-linkedin"
                      />
                    )}
                    {public_profile.github_handle && (
                      <IconWithLink url={githubUrl} iconClass="icon-github" />
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

/**  Component to show profiles of Josh leaders */
const JoshLeaderProfiles = props => {
  return (
    <section
      id="ourTeam"
      className="section-content section-leadership section-home"
    >
      <Heading1>Josh Leadership</Heading1>
      {getSectionBody(props)}
    </section>
  );
};

JoshLeaderProfiles.propTypes = {
  GITHUB_BASE_URL: PropTypes.string.isRequired,
  API_PUBLIC_URL: PropTypes.string.isRequired,
  leaders: PropTypes.arrayOf(
    PropTypes.shape({
      email: PropTypes.string,
      employee_detail: PropTypes.shape({
        description: PropTypes.string,
        designation: PropTypes.shape({
          name: PropTypes.string.isRequired
        }),
        employee_id: PropTypes.string.isRequired
      }),
      public_profile: PropTypes.shape({
        blog_url: PropTypes.string,
        facebook_url: PropTypes.string,
        github_handle: PropTypes.string,
        linkedin_url: PropTypes.string,
        twitter_handle: PropTypes.string,
        name: PropTypes.string.isRequired,
        image_medium_url: PropTypes.string.isRequired,
        modal_name: PropTypes.string
      })
    })
  ).isRequired
};

JoshLeaderProfiles.defaultProps = {
  leaders: [
    {
      email: "",
      employee_detail: {
        description: ""
      },
      public_profile: {
        blog_url: "",
        facebook_url: "",
        github_handle: "",
        linkedin_url: "",
        twitter_handle: "",
        modal_name: ""
      }
    }
  ]
};

export default JoshLeaderProfiles;
