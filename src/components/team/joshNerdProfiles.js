import React from "react";
import PropTypes from "prop-types";

import IconWithLink from "../shared/iconWithLink";

import "./team.scss";

const getProfileImage = (API_PUBLIC_URL, public_profile) => {
  return (
    <img
      src={`${API_PUBLIC_URL}${public_profile.image_medium_url}`}
      alt={public_profile.name}
      className="img-fluid nerd-img"
    />
  );
};

const JoshNerdProfiles = props => {
  const { members, API_PUBLIC_URL, GITHUB_BASE_URL } = props;
  return (
    <React.Fragment>
      <h1 className="section-heading">Meet Our Nerds</h1>
      <div className="row">
        {members.map(member => {
          const { public_profile } = member;
          const githubUrl = `${GITHUB_BASE_URL}${public_profile.github_handle ||
            ""}`;
          if(member.public_profile.image_medium_url) {
            return (
              <div
                className="col-lg-3 col-md-3 col-sm-4 col-6"
                key={public_profile.name}
              >
                <div className="card card-team">
                  {getProfileImage(API_PUBLIC_URL, public_profile)}
                  <div className="card-body">
                    <div className="person-info -nerds">
                      <h5>{public_profile.name}</h5>
                    </div>
                    <div className="professional-platforms">
                      {public_profile.github_handle && (
                        <IconWithLink url={githubUrl} iconClass="icon-github" />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          } else {
            return <></>;
          }
        })}
      </div>
    </React.Fragment>
  );
};

JoshNerdProfiles.propTypes = {
  GITHUB_BASE_URL: PropTypes.string.isRequired,
  API_PUBLIC_URL: PropTypes.string.isRequired,
  members: PropTypes.arrayOf(
    PropTypes.shape({
      email: PropTypes.string,
      public_profile: PropTypes.shape({
        blog_url: PropTypes.string,
        facebook_url: PropTypes.string,
        github_handle: PropTypes.string,
        linkedin_url: PropTypes.string,
        twitter_handle: PropTypes.string,
        name: PropTypes.string.isRequired,
        image_medium_url: PropTypes.string,
        modal_name: PropTypes.string
      })
    })
  ),
  employee_detail: PropTypes.shape({
    description: PropTypes.string,
    designation: PropTypes.shape({
      name: PropTypes.string
    }),
    employee_id: PropTypes.string
  })
};

JoshNerdProfiles.defaultProps = {
  members: [
    {
      email: "",
      public_profile: {
        blog_url: "",
        facebook_url: "",
        github_handle: "",
        linkedin_url: "",
        twitter_handle: "",
        image_medium_url: "",
        modal_name: ""
      },
      employee_detail: {
        description: "",
        designation: {
          name: ""
        },
        employee_id: ""
      }
    }
  ]
};

export default JoshNerdProfiles;
