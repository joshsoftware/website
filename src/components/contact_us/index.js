/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";

import { TextDisplay } from "./contactUsStyledComponent.js";
import { Card, CardBody } from "reactstrap";
import ContactUsForm from "./contactUsForm.js";
import wave from "../../assets/images/revampImages/wave@2x.png";
import locationIcon from "../../assets/images/revampImages/location-icon@2x.png";
import webIcon from "../../assets/images/revampImages/web-icon@2x.png";
import emailIcon from "../../assets/images/revampImages/email-icon@2x.png";
import "./contact-us.css";

const ContactUs = () => {
  return (
    // <div>
    //   <section className="section-contactus section-banner"></section>
    //   <div className="container">
    //     <div className="contact-form section-content">
    //       <h1 className="section-heading">We’d love to hear from you!</h1>
    //       <p>Reach us by using this form</p>
    //       <ContactUsForm />
    //     </div>
    //     <div className="contactus-footer">
    //       <div className="address-wrap">
    //         <div className="row">
    //           <div className="col-sm-4">
    //             <div className="address">
    //               <i className="icon-location"></i>
    //               <p>
    //                 <b className="text-center"> Pune Office </b>
    //                 <br />
    //                 JOSH SOFTWARE PVT. LTD.
    //                 <br />
    //                 2nd Floor, I-Space, IT Park, <br />
    //                   Mumbai Pune Bypass Rd Bavdhan, Pune, Maharashtra 411021
    //                 <br />
    //                   <i className="icon-phone"></i> <a href="tel:+917887889902">+91-7887889902 </a>
    //               </p>
    //               <p>
    //                 <b className="text-center"> US Office </b>
    //                 <br />
    //                 JOSH SOFTWARE INC.
    //                 <br />
    //                 7300 Lone Star Drive, Suite C200, Plano, TX 75024
    //                   <br />
    //                     {/*
    //                        Google doc suggest to add href with tel
    //                       https://developers.google.com/web/fundamentals/native-hardware/click-to-call */
    //                     }
    //                   <i className="icon-phone"></i> <a href="tel:+1-469-300-1564">+1 (469) 300-1564</a>
    //               </p>
    //             </div>
    //           </div>
    //           <div className="col-sm-8">
    //             <ul className="list-inline list-contact">
    //               <li className="contact">
    //               </li>
    //               <li className="josh-email-links">
    //                 <div className="email">
    //                   <i className="icon-mail"></i>
    //                   <p className="mb-0">
    //                     <a
    //                       href="mailto:info@joshsoftware.com"
    //                       className="font-weight-light"
    //                     >
    //                       info@joshsoftware.com
    //                     </a>
    //                   </p>
    //                 </div>
    //               </li>
    //             </ul>
    //             <div className="social-media-links">
    //               <a
    //                 href="https://facebook.com/joshsoftware"
    //                 target="_blank"
    //                 rel="noopener noreferrer"
    //               >
    //                 <svg
    //                   xmlns="http://www.w3.org/2000/svg"
    //                   viewBox="0 0 43.882 43.705"
    //                 >
    //                   <path
    //                     d="M-147.462,241.187h1a15.748,15.748,0,0,1,4.548.594,19.41,19.41,0,0,1,4.475,1.692,17.844,17.844,0,0,1,3.726,2.518c.708.635,1.44,1.249,2.1,1.932a19.169,19.169,0,0,1,3.1,4.3,21.344,21.344,0,0,1,1.806,4.328,28.883,28.883,0,0,1,.7,3.535,15.67,15.67,0,0,1,.138,3.018,25.364,25.364,0,0,1-.382,3.6,19.813,19.813,0,0,1-2.152,5.964,18.012,18.012,0,0,1-2.571,3.706c-.476.492-.871,1.062-1.367,1.521a23.724,23.724,0,0,1-4.881,3.523,21.512,21.512,0,0,1-5.626,2.062,13.528,13.528,0,0,1-3.511.407c-.655-.028-1.314,0-1.973,0a20.3,20.3,0,0,1-6.618-1.371,19.313,19.313,0,0,1-4.243-2.213,16.956,16.956,0,0,1-2.49-2c-.492-.5-1-.988-1.493-1.493a18.816,18.816,0,0,1-2.742-3.808,17.774,17.774,0,0,1-1.627-3.625,19.119,19.119,0,0,1-1.029-5.264c0-.671-.2-1.347-.151-2.034a24.705,24.705,0,0,1,1.627-7.652,19.738,19.738,0,0,1,1.961-3.661c.533-.777,1.147-1.5,1.737-2.237a12.287,12.287,0,0,1,1.106-1.273,23.7,23.7,0,0,1,4.7-3.47,21.446,21.446,0,0,1,4.068-1.737,30.912,30.912,0,0,1,3.088-.7A23.943,23.943,0,0,1-147.462,241.187Zm1.676,35.147V265.428a22.328,22.328,0,0,1,.09-3.58h2.128a6.122,6.122,0,0,0,2.176-.13,8.68,8.68,0,0,1,.028-1.875,3.535,3.535,0,0,0,.057-1.944h-4.475c0-1.22-.041-2.363.024-3.5a1.4,1.4,0,0,1,.513-.968,3.144,3.144,0,0,1,2.034-.529,17.576,17.576,0,0,1,1.908.37c.122-.574.244-1.045.317-1.53.106-.712.187-1.428.252-2.144a.545.545,0,0,0-.11-.438.545.545,0,0,0-.4-.2c-.753-.09-1.505-.2-2.258-.236-1-.041-2,0-3,0a4.621,4.621,0,0,0-4.292,3.34,11.465,11.465,0,0,0-.3,2.477c-.049,1.1,0,2.209,0,3.425h-2.758c0,1.363-.053,2.612,0,3.824.972.216,1.867-.1,2.738.22V276.35Z"
    //                     transform="translate(169.227 -240.685)"
    //                     className="svg-fill -white-outline"
    //                   ></path>
    //                 </svg>
    //               </a>
    //               <a
    //                 href="https://twitter.com/joshsoftware"
    //                 target="_blank"
    //                 rel="noopener noreferrer"
    //               >
    //                 <svg
    //                   xmlns="http://www.w3.org/2000/svg"
    //                   viewBox="0 0 43.829 43.837"
    //                 >
    //                   <path
    //                     d="M-26.208,283.384a20.775,20.775,0,0,1-14.067-6.395,21.324,21.324,0,0,1-6.195-15.209,21.324,21.324,0,0,1,6.451-15.1,20.681,20.681,0,0,1,15.3-6.122,20.649,20.649,0,0,1,15.214,6.737,20.7,20.7,0,0,1,5.85,15.133,20.983,20.983,0,0,1-6.618,14.99C-14.09,281.131-19.541,283.384-26.208,283.384Zm-9.031-30.575a5.927,5.927,0,0,0-.687,2.441,4.621,4.621,0,0,0,.57,2.469,15.922,15.922,0,0,0,1.505,1.92,3.139,3.139,0,0,1-2.034-.431,4.548,4.548,0,0,0,.753,2.754,5.814,5.814,0,0,0,3.149,2.339c-.61.484-1.326.041-1.908.329a2.673,2.673,0,0,0,.842,1.607,4.983,4.983,0,0,0,3.738,1.749A3.526,3.526,0,0,1-31,269.208a10.507,10.507,0,0,1-5.768,1.1c.407.281.858.472,1.269.7a14.672,14.672,0,0,0,5.752,1.566,13.5,13.5,0,0,0,3.694-.309,13.94,13.94,0,0,0,5.7-2.331,14.049,14.049,0,0,0,2.876-2.652A15.865,15.865,0,0,0-14.96,262.8a13.4,13.4,0,0,0,.927-4.475v-1.163a.773.773,0,0,1,.207-.46c.6-.578,1.22-1.127,1.831-1.7a3.485,3.485,0,0,0,.346-.488c-.932-.057-1.652.594-2.542.407,1.7-1.721,1.826-1.9,1.814-2.563l-2.848,1.066a8.542,8.542,0,0,1-.875-.59,4.674,4.674,0,0,0-4-1.041,5.089,5.089,0,0,0-4.349,5.2,3.112,3.112,0,0,1-.085,1.273A15.222,15.222,0,0,1-35.239,252.81Z"
    //                     transform="translate(46.971 -240.047)"
    //                     className="svg-fill -white-outline"
    //                   ></path>
    //                 </svg>
    //               </a>
    //               <a
    //                 href="http://www.linkedin.com/company/josh-software-private-limited"
    //                 target="_blank"
    //                 rel="noopener noreferrer"
    //               >
    //                 <svg
    //                   xmlns="http://www.w3.org/2000/svg"
    //                   viewBox="0 0 43.91 43.795"
    //                 >
    //                   <path
    //                     d="M100.4,240.59a21.01,21.01,0,0,1,10.17,2.677,24.812,24.812,0,0,1,3.881,2.791,19.933,19.933,0,0,1,3.454,3.909,17.549,17.549,0,0,1,2.616,5.4,27.754,27.754,0,0,1,.871,3.588,19.238,19.238,0,0,1,.207,4.353,22.422,22.422,0,0,1-2.892,9.393,21.3,21.3,0,0,1-9.645,8.775,20.705,20.705,0,0,1-5.65,1.672c-.651.081-1.294.122-1.94.15-.236,0-.468.073-.7.085h-1.22c-.2,0-.407-.09-.606-.09a17.752,17.752,0,0,1-5.288-.9,21.222,21.222,0,0,1-11.707-9.161,22.755,22.755,0,0,1-1.806-3.661,25.434,25.434,0,0,1-.98-3.38,15.2,15.2,0,0,1-.26-1.924c-.065-.553-.151-1.111-.171-1.668a23.57,23.57,0,0,1,.321-3.966,19.864,19.864,0,0,1,1.009-4,20.583,20.583,0,0,1,2.583-4.926,14.8,14.8,0,0,1,1.749-2.123,24.1,24.1,0,0,1,4.031-3.494,20.576,20.576,0,0,1,5.781-2.624,30.721,30.721,0,0,1,3.535-.712C98.573,240.635,99.395,240.647,100.4,240.59Zm2.168,32.1v-7.867a2.953,2.953,0,0,1,1.123-2.494,2.27,2.27,0,0,1,3.734,1.021,14.068,14.068,0,0,1,.329,2.079c.045,2.18,0,4.361,0,6.545,0,.224.037.452.057.667a18.2,18.2,0,0,0,4.422-.1c0-2.8-.02-5.61,0-8.417a7.257,7.257,0,0,0-.578-3.1,4.658,4.658,0,0,0-2.612-2.518,6.741,6.741,0,0,0-2.534-.342,4.194,4.194,0,0,0-2.953,1.22c-.309.289-.586.61-1.017,1.066v-1.888h-4.5c.118,1.627.045,3.189.057,4.759s0,3.108,0,4.662-.407,3.108-.094,4.682Zm-12-.13a19.974,19.974,0,0,0,4.589.041c.138-1.436.085-13.383-.065-14.018a20.226,20.226,0,0,0-4.524.1Zm2.368-16.174a2.091,2.091,0,0,0,1.53-.346,2.389,2.389,0,0,0,.561-3.535,2.7,2.7,0,0,0-3.136-.712,2.331,2.331,0,0,0-1.318,3.214,2.233,2.233,0,0,0,2.38,1.379Z"
    //                     transform="translate(-78.23 -240.09)"
    //                     className="svg-fill -white-outline"
    //                   ></path>
    //                 </svg>
    //               </a>
    //               <a
    //                 href="https://github.com/joshsoftware"
    //                 target="_blank"
    //                 rel="noopener noreferrer"
    //               >
    //                 <svg
    //                   xmlns="http://www.w3.org/2000/svg"
    //                   viewBox="0 0 43.957 42.855"
    //                 >
    //                   <path
    //                     d="M225.936,241.212a21.466,21.466,0,0,0-21.466,21.466h0a21.475,21.475,0,0,0,14.673,20.34c1.074.2,1.464-.468,1.464-1.041s0-2.2-.028-3.995c-5.964,1.3-7.229-2.526-7.229-2.526a5.683,5.683,0,0,0-2.38-3.136c-1.953-1.33.146-1.306.146-1.306a4.52,4.52,0,0,1,3.291,2.209c1.912,3.279,5.02,2.335,6.228,1.782A4.6,4.6,0,0,1,222,272.157c-4.759-.541-9.763-2.384-9.763-10.6a8.319,8.319,0,0,1,2.213-5.772,7.813,7.813,0,0,1,.212-5.7s1.8-.578,5.886,2.2a20.339,20.339,0,0,1,10.739,0c4.092-2.77,5.886-2.2,5.886-2.2a7.786,7.786,0,0,1,.216,5.7,8.283,8.283,0,0,1,2.2,5.756c0,8.238-5.02,10.04-9.8,10.577a5.112,5.112,0,0,1,1.456,3.97c0,2.848-.028,5.191-.028,5.882,0,.57.407,1.22,1.477,1.041a21.446,21.446,0,0,0-6.745-41.806Z"
    //                     transform="translate(-203.97 -240.7)"
    //                     className="svg-fill -white-outline"
    //                   ></path>
    //                 </svg>
    //               </a>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //     <TextDisplay>
    //       And <br />
    //       Disrupt Your Industry
    //     </TextDisplay>
    //   </div>
    // </div>

    <section className="josh-content">
      <div className="contact-us-section d-flex">
        <div className="contact-form-content d-flex flex-column">
          <h3 className="font-weight-bold">Contact us</h3>
          <p className="hello-text-box">
            <img src={wave} alt="waving hand" className="mr-3" />
            Hello, let's get in Touch
          </p>
          <ContactUsForm />
        </div>
        <div className="contact-details py-3 d-flex flex-column">
          <Card className="contact-card">
            <CardBody>
              <img
                src={locationIcon}
                alt="location icon"
                className="position-absolute"
              />
              <h6 className="ofc-heading font-weight-bold mb-2">
                India Office
              </h6>
              <h3 className="mb-3">JOSH SOFTWARE PVT. LTD.</h3>
              <p className="mb-2">
                2nd Floor, I-Space, IT Park, Mumbai Pune Bypass Rd Bavdhan,
                Pune, Maharashtra 411021
              </p>
              <span className="font-weight-bold">+91-7887889902</span>
            </CardBody>
          </Card>
          <Card className="contact-card">
            <CardBody>
              <img
                src={locationIcon}
                alt="location icon"
                className="position-absolute"
              />
              <h6 className="ofc-heading font-weight-bold mb-2">US Office</h6>
              <h3 className="mb-3">JOSH SOFTWARE INC.</h3>
              <p className="mb-2">
                7300 Lone Star Drive, Suite C200, Plano, TX 75024
              </p>
              <span className="font-weight-bold">+1 (469) 300-1564</span>
            </CardBody>
          </Card>
          <Card className="contact-card">
            <CardBody>
              <img
                src={emailIcon}
                alt="location icon"
                className="position-absolute"
              />
              <p className="mb-0 email-text font-weight-bold">
                info@joshsoftware.com
              </p>
            </CardBody>
          </Card>
          <Card className="contact-card">
            <CardBody>
              <img
                src={webIcon}
                alt="location icon"
                className="position-absolute"
              />
              <ul className="list-unstyled pl-0 mb-0 social-media-list-wrap d-flex">
                <li className="social-media-list-item">
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="-insta d-flex"
                  >
                    <div className="media-img"></div>
                  </a>
                </li>
                <li className="social-media-list-item">
                  <a
                    href="https://twitter.com/joshsoftware"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="-twitter d-flex"
                  >
                    <div className="media-img"></div>
                  </a>
                </li>
                <li className="social-media-list-item">
                  <a
                    href="https://facebook.com/joshsoftware"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="-facebook d-flex"
                  >
                    <div className="media-img"></div>
                  </a>
                </li>
                <li className="social-media-list-item">
                  <a
                    href="http://www.linkedin.com/company/josh-software-private-limited"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="-linkedin d-flex"
                  >
                    <div className="media-img"></div>
                  </a>
                </li>
              </ul>
            </CardBody>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
