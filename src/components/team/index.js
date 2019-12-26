import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";

import * as routeConstants from "../../routeConstants";
import JoshLeaderProfiles from "./joshLeaderProfiles";
import JoshNerdProfiles from "./joshNerdProfiles";
import { API_BASE_URL, API_PUBLIC_URL } from "../../globalConstants";

const GITHUB_BASE_URL = "https://github.com/";
const JOSH_CAREER_URL = "http://careers.joshsoftware.com/";

const OurTeam = props => {
  const [members, setMembers] = useState([]),
    [leaders, setLeaders] = useState([]),
    [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      fetch(`${API_BASE_URL}team`, {
        method: "get",
        headers: { "Content-Type": "application/json" }
      })
        .then(res => res.json())
        .then(res => {
          setMembers(res.members);
          setLeaders(res.leaders);
          setLoading(false);
        });
    }
    fetchData();
  }, []);

  if (loading) {
    return null;
  } else {
    return (
      <Fragment>
        {/* <section className="section-team section-banner">
          <div className="heading-overlay">
          </div><a href="#ourTeam" className="scroll-down"><i className="icon-angle-double-down"></i></a>
        </section> */}
        {/* <div style={{ height: 67 }} /> */}

        {/** JOSH LEADERS */}
        <JoshLeaderProfiles
          GITHUB_BASE_URL={GITHUB_BASE_URL}
          API_PUBLIC_URL={API_PUBLIC_URL}
          leaders={leaders}
        />

        {/** JOSH NERDS */}
        <section className="section-content section-nerds">
          <div className="container">
            <JoshNerdProfiles
              GITHUB_BASE_URL={GITHUB_BASE_URL}
              API_PUBLIC_URL={API_PUBLIC_URL}
              members={members}
            />

            {/** Navigations */}
            <div className="btn-wrap">
              <Link to={routeConstants.ABOUT_US_URL} className="btn btn-gray">
                About Us
              </Link>
              <a href={JOSH_CAREER_URL} className="btn btn-outline-gray">
                Career
              </a>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
};

export default OurTeam;
