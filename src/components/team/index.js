import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';

import * as routeConstants from '../../routeConstants';
import { Heading1 } from '../home/homeStyledComponents';

const IMAGE_BASE_URL = "http://new.joshsoftware.com:8080/images/";
const LINKED_IN_BASE_URL = "https://www.linkedin.com/in/";
const GITHUB_BASE_URL = "https://github.com/";
const JOSH_CAREER_URL = "http://careers.joshsoftware.com/";

const OurTeam = (props) => {
  const { leaders, members } = props;

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
                return (
                  <div className="col-lg-4 col-sm-6" key={leader.name}>
                    <div className="card card-team">
                      <img src={`${IMAGE_BASE_URL}${leader.profilePic}`} alt={leader.name} className="img-fluid" />
                      <div className="card-body">
                        <div className="person-info">
                          <h5>{leader.name}</h5>
                          <p className="designation">{leader.designation}</p>
                        </div>
                        <div className="professional-platforms">
                          {
                            leader.linkedinId && <a href={`${LINKED_IN_BASE_URL}${leader.linkedinId}`} target="_blank" rel="noopener noreferrer">
                              <i className="icon-linkedin"></i>
                            </a>
                          }
                          {
                            leader.githubId && <a href={`${GITHUB_BASE_URL}${leader.githubId}`} target="_blank" rel="noopener noreferrer">
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
                return (
                  <div className="col-lg-3 col-md-6 col-6" key={member.name}>
                    <div className="card card-team">
                      <img src={`${IMAGE_BASE_URL}${member.profilePic}`} alt={member.name} className="img-fluid" />
                      <div className="card-body">
                        <div className="person-info -nerds">
                          <h5>{member.name}</h5>
                        </div>
                        <div className="professional-platforms">
                          {
                            member.githubId && <a href={`${GITHUB_BASE_URL}${member.githubId}`} target="_blank" rel="noopener noreferrer">
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

OurTeam.defaultProps = {
  leaders: [
    {
      profilePic: "core-gautam-rege@2x.jpg",
      name: "Gautam Rege",
      designation: "Co-Founder & Director",
      linkedinId: "gautamrege",
      githubId: "gautamrege"
    },
    {
      profilePic: "core-sethu@2x.jpg",
      name: "Sethupathi Asokan",
      designation: "Co-Founder & Director",
      linkedinId: "sethupathia",
      githubId: "sethu"
    },
    {
      profilePic: "core-vaibhavi@2x.jpg",
      name: "Vaibhavi Rege",
      designation: "Director",
      linkedinId: "",
      githubId: ""
    },
    {
      profilePic: "core-sundari@2x.jpg",
      name: "Maragatha Sundari",
      designation: "Director",
      linkedinId: "",
      githubId: ""
    },
    {
      profilePic: "core_satish-talim@2x.jpg",
      name: "Satish Talim",
      designation: "Director",
      linkedinId: "satishtalim",
      githubId: "IndianGuru"
    },
    {
      profilePic: "core-sameer@2x.jpg",
      name: "Sameer Tilak",
      designation: "VP of Engineering",
      linkedinId: "sameer-tilak-425a825",
      githubId: "Sameer-Tilak"
    },
    {
      profilePic: "core_sachin@2x.jpg",
      name: "Sachin Shintre",
      designation: "VP of Engineering",
      linkedinId: "shintre",
      githubId: "shintre"
    },
    {
      profilePic: "core_shailesh@2x.jpg",
      name: "Shailesh Patil",
      designation: "Software Architect",
      linkedinId: "shaileshspatil",
      githubId: "spatil"
    },
    {
      profilePic: "core_avadhoot@2x.jpg",
      name: "Avadhoot Bhatye",
      designation: "Head of Operations- Smart Cities",
      linkedinId: "avadhoot-bhatye-78082312",
      githubId: ""
    }
  ],
  members: [
    {
      profilePic: "swapnil_chincholkar@2x.jpg",
      name: "Swapnil Chincholkar",
      githubId: "swapnilchincholkar"
    }, {
      profilePic: "harish-patankar@2x.jpg",
      name: "Harish Patankar",
      githubId: "harishspatankar"
    }, {
      profilePic: "suraj-jagtap@2x.jpg",
      name: "Suraj Jagtap",
      githubId: "SurajSJagtap"
    }, {
      profilePic: "ajay-anarse@2x.jpg",
      name: "Ajay Anarse",
      githubId: "ajaysudhakaranarse"
    }, {
      profilePic: "shirish@2x.jpg",
      name: "Shirish Bankar",
      githubId: "shirishbankar1"
    }, {
      profilePic: "mohit-pawar@2x.jpg",
      name: "Mohit Pawar",
      githubId: "Mohit-Pawar"
    }, {
      profilePic: "geetanjali-kokate@2x.jpg",
      name: "Geetanjali Kokate",
      githubId: "Geetakokate"
    }, {
      profilePic: "akshaykumar-kakade@2x.jpg",
      name: "AkshayKumar Kakade",
      githubId: "kakadeaa"
    }, {
      profilePic: "yogesh-khater@2x.jpg",
      name: "Yogesh Khater",
      githubId: "yogeshjain999"
    }, {
      profilePic: "anuja-joshi@2x.jpg",
      name: "Anuja Joshi",
      githubId: "anuja-joshi"
    }, {
      profilePic: "pramod-shinde@2x.jpg",
      name: "Pramod Shinde",
      githubId: "pramodshinde"
    }, {
      profilePic: "nikhil-pathak@2x.jpg",
      name: "Nikhil Pathak",
      githubId: ""
    }, {
      profilePic: "varsha-yadav@2x.jpg",
      name: "Varsha Yadav",
      githubId: "varshayadav"
    }, {
      profilePic: "payal-bhalerao@2x.jpg",
      name: "Payal Bhalerao",
      githubId: "Payal13"
    }, {
      profilePic: "anusha-bhat@2x.jpg",
      name: "Anusha Bhat",
      githubId: "A9u"
    }, {
      profilePic: "sahil-bhatia@2x.jpg",
      name: "Sahil Bhatia",
      githubId: "sahilbhatia"
    }, {
      profilePic: "krishnakant-kumar@2x.jpg",
      name: "Krishnakant Kumar",
      githubId: "Krishnakant-android"
    }, {
      profilePic: "rahul-jadhav@2x.jpg",
      name: "Rahul Jadhav",
      githubId: "pain11"
    }, {
      profilePic: "shweta-kale@2x.jpg",
      name: "Shweta Kale",
      githubId: "Shwetakale"
    }, {
      profilePic: "amol-udage@2x.jpg",
      name: "Amol Udage",
      githubId: "amoludage"
    }, {
      profilePic: "chandrashekhar-sahu@2x.jpg",
      name: "Chandrashekhar Sahu",
      githubId: "shekhar12020"
    }, {
      profilePic: "ganesh-sagare@2x.jpg",
      name: "Ganesh Sagare",
      githubId: "SagareGanesh"
    }, {
      profilePic: "swati-jadhav@2x.jpg",
      name: "Swati Jadhav",
      githubId: "SwatiJadhav46"
    }, {
      profilePic: "anil-kumar@2x.jpg",
      name: "Anil Kumar",
      githubId: "anilmaurya"
    }, {
      profilePic: "pooja-mane@2x.jpg",
      name: "Pooja Mane",
      githubId: "pooja-mane"
    }, {
      profilePic: "anuja-ware@2x.jpg",
      name: "Anuja Ware",
      githubId: "anujaware"
    }, {
      profilePic: "amit-kumar@2x.jpg",
      name: "Amit Kumar",
      githubId: "amitk"
    }, {
      profilePic: "megha-brid@2x.jpg",
      name: "Megha Brid",
      githubId: ""
    }, {
      profilePic: "neha-vyas@2x.jpg",
      name: "Neha Vyas",
      githubId: ""
    }, {
      profilePic: "seema-jha@2x.jpg",
      name: "Seema Jha",
      githubId: "seemajha"
    }, {
      profilePic: "ashvini-vibhute@2x.jpg",
      name: "Ashvini Vibhute",
      githubId: "ashviniv"
    }, {
      profilePic: "kiran-deshmukh@2x.jpg",
      name: "Kiran Deshmukh",
      githubId: "kirandeshmukh"
    }, {
      profilePic: "tejasvini-gambhire@2x.jpg",
      name: "Tejasvini Gambhire",
      githubId: "tejaswini-gambhire"
    }, {
      profilePic: "sai-pradhan-lohar@2x.jpg",
      name: "Sai Pradhan",
      githubId: ""
    }, {
      profilePic: "umesh-kanchan@2x.jpg",
      name: "Umesh Kanchan",
      githubId: ""
    }, {
      profilePic: "arvind-mahale@2x.jpg",
      name: "Arvind Mahale",
      githubId: ""
    }, {
      profilePic: "akshay-birajdar@2x.jpg",
      name: "Akshay Birajdar",
      githubId: ""
    }, {
      profilePic: "amit-dhadse@2x.jpg",
      name: "Amit Dhadse",
      githubId: "dhadseamit"
    }, {
      profilePic: "anuj-verma.jpg",
      name: "Anuj Verma",
      githubId: "anuj-verma"
    }, {
      profilePic: "ninad-nehete@2x.jpg",
      name: "Ninad Nehete",
      githubId: "ninadnehete"
    }, {
      profilePic: "paritosh-botre@2x.jpg",
      name: "Paritosh Botre",
      githubId: "paritoshbotre"
    }, {
      profilePic: "pinky-rout@2x.jpg",
      name: "Pinky Rout",
      githubId: ""
    }, {
      profilePic: "priyanka-yadav@2x.jpg",
      name: "Priyanka Yadav",
      githubId: ""
    }, {
      profilePic: "raj-kamal-lashkari@2x.jpg",
      name: "Raj Kamal Lashkari",
      githubId: "rajlash"
    }, {
      profilePic: "tanya-saroha@2x.jpg",
      name: "Tanya Saroha",
      githubId: "tanya-saroha"
    }, {
      profilePic: "anurag.jpg",
      name: "Anurag",
      githubId: "apsc92"
    }, {
      profilePic: "bhagyashri.jpg",
      name: "Bhagyashri",
      githubId: "bhagyashriSawkar"
    }, {
      profilePic: "bhuvna.jpg",
      name: "Bhuvna",
      githubId: "pegasusflyhigh"
    }, {
      profilePic: "kiran-mhale.jpg",
      name: "Kiran Mhale",
      githubId: "kiranmahale"
    }, {
      profilePic: "rahul-ojha.jpg",
      name: "Rahul Ojha",
      githubId: "aaark"
    }, {
      profilePic: "rishul.jpg",
      name: "Rishul",
      githubId: ""
    }, {
      profilePic: "rohit.jpg",
      name: "Rohit",
      githubId: ""
    }, {
      profilePic: "rupali.jpg",
      name: "Rupali",
      githubId: ""
    }, {
      profilePic: "shailendra.jpg",
      name: "Shailendra Kanherkar",
      githubId: ""
    }, {
      profilePic: "shivam.jpg",
      name: "Shivam",
      githubId: "shivamkumarsingh"
    }, {
      profilePic: "suhas-more.jpg",
      name: "Suhas More",
      githubId: "suhas010"
    }, {
      profilePic: "vikas-khichar.jpg",
      name: "Vikas Khichar",
      githubId: ""
    }
  ]
}

export default OurTeam;
