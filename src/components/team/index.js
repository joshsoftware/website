import React, { Fragment } from "react";
import IconWithLink from "../shared/iconWithLink";
import quotesImg from "../../assets/images/quotes@2x.png";
import gautumRege from "../../assets/images/leaders/gautam-rege@2x.jpeg";
import sethu from "../../assets/images/leaders/sethu@2x.jpeg";
import vaibhaviRege from "../../assets/images/leaders/vabhaivi-rege@2x.jpeg";
import maragatha from "../../assets/images/leaders/maragatha-sundari@2x.jpeg";
import sameerTilak from "../../assets/images/leaders/sameer-tilak@2x.jpeg";
import avadhootBhayte from "../../assets/images/leaders/avadhoot-bhayte@2x.jpeg";
import satishTalim from "../../assets/images/leaders/satish-talim@2x.jpeg";
import sachinShintre from "../../assets/images/leaders/sachin-shintre@2x.jpeg";
import shaileshKalekar from "../../assets/images/leaders/shailesh-kalekar@2x.jpeg";
import * as routes from "../../routeConstants.js";
import "./team.scss";
import AboutUsCard from "../../shared-components/aboutUsCard/aboutUsCard";
import CtaButton from "../../shared-components/ctaButton/ctaButton";

const OurTeam = (props) => {
  const linkListItem = [
    {
      linkTitle: "Contact Us",
      link: routes.CONTACT_US_URL,
      linkClassName: "-contact-us",
    },
    {
      linkTitle: "Success Stories",
      link: routes.SUCCESS_STORIES_URL,
      linkClassName: "-success-story",
    },
  ];

  return (
    <Fragment>
      <section className="josh-content">
        <div className="josh-leadership-wrapper d-flex align-items-center flex-column">
          <div className="leadership-row -founders-row">
            <div className="leadership-item d-flex flex-column founders-col">
              <div className="leadership-item-card d-flex">
                <div className="leader-profile-wrap d-flex flex-column">
                  <img
                    src={gautumRege}
                    alt="profile img"
                    className="img-fluid"
                  />
                </div>
                <div className="leader-info position-relative -light-grey d-flex flex-column">
                  <div className="leader-details">
                    <img
                      src={quotesImg}
                      alt="quotes img"
                      className="d-block quotes-img ml-auto"
                    />
                    <p className="overflow-hidden text-truncate-multi-line -four-line">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusm.adipisicing elit, sed do eiusm.
                    </p>
                    <h5 className="mb-0 font-weight-bold">Gautam Rege</h5>
                    <label className="font-weight-normal mb-2">
                      Co-Founder & Director
                    </label>
                  </div>
                  <div className="professional-platforms">
                    <IconWithLink
                      url="https://www.linkedin.com/in/gautamrege"
                      iconClass="icon-linkedin"
                    />
                    <IconWithLink
                      url="https://github.com/gautamrege"
                      iconClass="icon-github"
                    />
                  </div>
                </div>
              </div>
              <div className="leadership-item-card d-flex">
                <div className="leader-info position-relative -dark-blue d-flex flex-column">
                  <div className="leader-details">
                    <img
                      src={quotesImg}
                      alt="quotes img"
                      className="d-block quotes-img ml-auto"
                    />
                    <p className="overflow-hidden text-truncate-multi-line -four-line">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusm.adipisicing elit, sed do eiusm.
                    </p>
                    <h5 className="mb-0 font-weight-bold">Sethupathi Asokan</h5>
                    <label className="font-weight-normal mb-2">
                      Co-Founder & Director
                    </label>
                  </div>
                  <div className="professional-platforms">
                    <IconWithLink
                      url="http://www.linkedin.com/in/sethupathia"
                      iconClass="icon-linkedin"
                    />
                    <IconWithLink
                      url="https://github.com/sethu"
                      iconClass="icon-github"
                    />
                  </div>
                </div>
                <div className="leader-profile-wrap d-flex flex-column">
                  <img src={sethu} alt="profile img" className="img-fluid" />
                </div>
              </div>
            </div>
            <div className="leadership-item d-flex flex-column">
              <div className="leadership-description">
                <h1 className="font-weight-bold">Leadership</h1>
                <p className="mb-0">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit
                  amet, consectetur adipisicing elit, sed do eiusmod tempor
                  incididunt ut laboreLorem ipsum dolor sit amet, consectetur
                  adipisicing elit, sed do eiusmod tempor incididunt ut labore
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit
                  amet, consectetur adipisicing elit, sed do eiusmod tempor
                  incididunt ut labore Lorem ipsum dolor sit amet, consectetur
                  adipisicing elit, sed do eiusmod tempor incididunt ut
                  laboreLorem ipsum dolor sit amet, consectetur adipisicing
                  elit, sed do eiusmod tempor incididunt.
                </p>
              </div>
            </div>
          </div>

          <div className="leadership-row -leaders-row">
            <div className="leadership-item d-flex">
              <div className="leadership-item-card d-flex">
                <div className="leader-profile-wrap d-flex flex-column">
                  <img
                    src={vaibhaviRege}
                    alt="profile img"
                    className="img-fluid"
                  />
                </div>
                <div className="leader-info position-relative -light-blue d-flex flex-column">
                  <div className="leader-details">
                    <img
                      src={quotesImg}
                      alt="quotes img"
                      className="d-block quotes-img ml-auto"
                    />
                    <p className="overflow-hidden text-truncate-multi-line -four-line">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusm.adipisicing elit, sed do eiusm.
                    </p>
                    <h5 className="mb-0 font-weight-bold">Vaibhavi Rege</h5>
                    <label className="font-weight-normal mb-2">Director</label>
                  </div>
                </div>
              </div>
            </div>
            <div className="leadership-item d-flex">
              <div className="leadership-item-card d-flex">
                <div className="leader-profile-wrap d-flex flex-column">
                  <img
                    src={maragatha}
                    alt="profile img"
                    className="img-fluid"
                  />
                </div>
                <div className="leader-info position-relative -light-grey d-flex flex-column">
                  <div className="leader-details">
                    <img
                      src={quotesImg}
                      alt="quotes img"
                      className="d-block quotes-img ml-auto"
                    />
                    <p className="overflow-hidden text-truncate-multi-line -four-line">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusm.adipisicing elit, sed do eiusm.
                    </p>
                    <h5 className="mb-0 font-weight-bold">Maragatha Sundari</h5>
                    <label className="font-weight-normal mb-2">Director</label>
                  </div>
                </div>
              </div>
            </div>
            <div className="leadership-item d-flex">
              <div className="leadership-item-card d-flex">
                <div className="leader-profile-wrap d-flex flex-column">
                  <img
                    src={sameerTilak}
                    alt="profile img"
                    className="img-fluid"
                  />
                </div>
                <div className="leader-info position-relative -dark-grey d-flex flex-column">
                  <div className="leader-details">
                    <img
                      src={quotesImg}
                      alt="quotes img"
                      className="d-block quotes-img ml-auto"
                    />
                    <p className="overflow-hidden text-truncate-multi-line -four-line">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusm.adipisicing elit, sed do eiusm.
                    </p>
                    <h5 className="mb-0 font-weight-bold">Sameer Tilak</h5>
                    <label className="font-weight-normal mb-2">
                      Chief Technical Officer
                    </label>
                  </div>
                  <div className="professional-platforms">
                    <IconWithLink
                      url="http://in.linkedin.com/pub/sameer-tilak/5/a82/425?trk=shareTw"
                      iconClass="icon-linkedin"
                    />
                    <IconWithLink
                      url="https://github.com/Sameer-Tilak"
                      iconClass="icon-github"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="leadership-item d-flex">
              <div className="leadership-item-card d-flex">
                <div className="leader-profile-wrap d-flex flex-column">
                  <img
                    src={sachinShintre}
                    alt="profile img"
                    className="img-fluid"
                  />
                </div>
                <div className="leader-info position-relative -light-blue d-flex flex-column">
                  <div className="leader-details">
                    <img
                      src={quotesImg}
                      alt="quotes img"
                      className="d-block quotes-img ml-auto"
                    />
                    <p className="overflow-hidden text-truncate-multi-line -four-line">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusm.adipisicing elit, sed do eiusm.
                    </p>
                    <h5 className="mb-0 font-weight-bold">Sachin Shintre</h5>
                    <label className="font-weight-normal mb-2">
                      Chief Business Officer
                    </label>
                  </div>
                  <div className="professional-platforms">
                    <IconWithLink
                      url="http://in.linkedin.com/pub/sachin-shintre/15/b8b/787"
                      iconClass="icon-linkedin"
                    />
                    <IconWithLink
                      url="https://github.com/shintre"
                      iconClass="icon-github"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="leadership-item d-flex">
              <div className="leadership-item-card d-flex">
                <div className="leader-profile-wrap d-flex flex-column">
                  <img
                    src={satishTalim}
                    alt="profile img"
                    className="img-fluid"
                  />
                </div>
                <div className="leader-info position-relative -dark-blue d-flex flex-column">
                  <div className="leader-details">
                    <img
                      src={quotesImg}
                      alt="quotes img"
                      className="d-block quotes-img ml-auto"
                    />
                    <p className="overflow-hidden text-truncate-multi-line -four-line">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusm.adipisicing elit, sed do eiusm.
                    </p>
                    <h5 className="mb-0 font-weight-bold">Satish Talim</h5>
                    <label className="font-weight-normal mb-2">Director</label>
                  </div>
                  <div className="professional-platforms">
                    <IconWithLink
                      url="http://www.linkedin.com/in/satishtalim"
                      iconClass="icon-linkedin"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="leadership-item d-flex">
              <div className="leadership-item-card d-flex">
                <div className="leader-profile-wrap d-flex flex-column">
                  <img
                    src={avadhootBhayte}
                    alt="profile img"
                    className="img-fluid"
                  />
                </div>
                <div className="leader-info position-relative -light-blue d-flex flex-column">
                  <div className="leader-details">
                    <img
                      src={quotesImg}
                      alt="quotes img"
                      className="d-block quotes-img ml-auto"
                    />
                    <p className="overflow-hidden text-truncate-multi-line -four-line">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusm.adipisicing elit, sed do eiusm.
                    </p>
                    <h5 className="mb-0 font-weight-bold">Avadhoot Bhatye</h5>
                    <label className="font-weight-normal mb-2">
                      Operations Head
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="leadership-item d-flex">
              <div className="leadership-item-card d-flex">
                <div className="leader-profile-wrap d-flex flex-column">
                  <img
                    src={shaileshKalekar}
                    alt="profile img"
                    className="img-fluid"
                  />
                </div>
                <div className="leader-info position-relative -light-blue d-flex flex-column">
                  <div className="leader-details">
                    <img
                      src={quotesImg}
                      alt="quotes img"
                      className="d-block quotes-img ml-auto"
                    />
                    <p className="overflow-hidden text-truncate-multi-line -four-line">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusm.adipisicing elit, sed do eiusm.
                    </p>
                    <h5 className="mb-0 font-weight-bold">Shailesh Kalekar</h5>
                    <label className="font-weight-normal mb-2">
                      Chief Operating Officer
                    </label>
                  </div>
                  <div className="professional-platforms">
                    <IconWithLink
                      url="https://www.linkedin.com/in/shailesh-kalekar-ba0a87a/"
                      iconClass="icon-linkedin"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="leadership-item d-flex">
              <AboutUsCard />
            </div>
          </div>
        </div>
        <CtaButton linkListItem={linkListItem} />
      </section>
    </Fragment>
  );
};

export default OurTeam;
