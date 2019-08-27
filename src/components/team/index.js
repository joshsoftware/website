import React, { Fragment, useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

import * as routeConstants from '../../routeConstants';
import { Heading1 } from '../home/homeStyledComponents';
import { API_BASE_URL, API_PUBLIC_URL } from '../../globalConstants'

const GITHUB_BASE_URL = "https://github.com/";
const JOSH_CAREER_URL = "http://careers.joshsoftware.com/";

const OurTeam = (props) => {
  const [ members, setMembers ] = useState([]),
  [ leaders, setLeaders ] = useState([]),
  [ loading, setLoading ] = useState(true);

  useEffect(() => {
    async function fetchData() {
      fetch(`${API_BASE_URL}team`, {
        method: 'get',
        headers: { 'Content-Type': 'application/json' },
      }).then(res => res.json())
      .then(res => {
        setMembers(res.members);
        setLeaders(res.leaders)
        setLoading(false);
      })
    }
    fetchData();
  }, []);

  if(loading) {
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
        <section id="ourTeam" className="section-content section-leadership section-home">
          <Heading1>Josh Leadership</Heading1>
          <div className="container">
            {/* <h1 className="section-heading">Josh Leadership</h1> */}
            {/* <div className="section-header">
              <h2 className="section-heading">Josh Leadership</h2>
              <p>Re-engineering existing inefficient architectures with zero down-time and complete data integrity</p>
            </div> */}
            <div className="row">
              {
                leaders.map(leader => {
                  const { public_profile, employee_detail } = leader;
                  return (
                    <div className="col-lg-4 col-sm-6" key={public_profile.name}>
                      <div className="card card-team">
                        <img src={`${API_PUBLIC_URL}${public_profile.image_medium_url}`} alt={public_profile.name} className="img-fluid" />
                        <div className="card-body">
                          <div className="person-info">
                            <h5>{leader.name}</h5>
                            <p className="designation">{employee_detail.designation}</p>
                          </div>
                          <div className="professional-platforms">
                            {
                              public_profile.linkedin_url && <a href={`${public_profile.linkedin_url}`} target="_blank" rel="noopener noreferrer">
                                <i className="icon-linkedin"></i>
                              </a>
                            }
                            {
                              public_profile.github_handle && <a href={`${GITHUB_BASE_URL}${public_profile.github_handle}`} target="_blank" rel="noopener noreferrer">
                                <i className="icon-github"></i>
                              </a>
                            }
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </section>

        {/** JOSH NERDS */}
        <section className="section-content section-nerds">
          <div className="container">
            <h1 className="section-heading">Meet Our Nerds</h1>
            <div className="row">
              {
                members.map(member => {
                  const { public_profile } = member;
                  return (
                    <div className="col-lg-3 col-md-6 col-6" key={public_profile.name}>
                      <div className="card card-team">
                        <img src={`${API_PUBLIC_URL}${public_profile.image_medium_url}`} alt={public_profile.name} className="img-fluid" />
                        <div className="card-body">
                          <div className="person-info -nerds">
                            <h5>{public_profile.name}</h5>
                          </div>
                          <div className="professional-platforms">
                            {
                              public_profile.github_handle && <a href={`${GITHUB_BASE_URL}${public_profile.github_handle}`} target="_blank" rel="noopener noreferrer">
                                <i className="icon-github"></i>
                              </a>
                            }
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })
              }
            </div>

            {/** Navigations */}
            <div className="btn-wrap">
              <Link to={routeConstants.ABOUT_US_URL} className="btn btn-gray">About Us</Link>
              <a href={JOSH_CAREER_URL} className="btn btn-outline-gray">Career</a>
            </div>
          </div>
        </section>
      </Fragment>
    )
  }
}

export default OurTeam;
