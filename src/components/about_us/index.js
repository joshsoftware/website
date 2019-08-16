import React from 'react';

const AboutUs = () => {
  return (
    <div>
      <section className="section-aboutus section-banner">
        <div className="heading-overlay">
          <a href="https://codecuriosity.org/" target="_blank" rel="noopener noreferrer">
            <img src="http://new.joshsoftware.com:8080/images/gift-group-on-banner.png" alt="Open Source"
              className="img-fluid img-banner" />
          </a>
        </div>
      </section>
      <section className="section-about_info">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 d-flex">
              <div className="about-wrap">
                <h2 className="wrap-title">About Us</h2>
                <p className="wrap-subtitle">Our name stands for passion.
                  <br />And, passion for technology <br />is who we are.
                </p>
                <p className="para">The success of Josh Software is a direct reflection of the magnificent team behind it! Their passion and enthusiasm have been the greatest driving factors and are responsible for every milestone of the brand. Here’s to every individual who has been part of this wonderful journey!</p><img src="http://new.joshsoftware.com:8080/images/group-photos-mobile.png" alt="Josh Software Team" className="img-fluid img-mobile" />
                <div className="btn-wrap"><a href="/team" className="btn btn-white">Meet Our Team</a><a href="http://careers.joshsoftware.com/" className="btn btn-outline-white">Job Openings</a></div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="img-wrap">
                <img src="http://new.joshsoftware.com:8080/images/group-photos-desktop.png" alt="Josh Software Team" className="img-fluid" /></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;
