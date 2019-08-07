import React, { Fragment } from 'react'
import ProjectDetails from './projectDetails';
import WhatWeDo from './whatWeDo';

const Services = (props) => {
  const { projects } = props;

  const projectsList = projects.map((project) => <ProjectDetails key={project.title} {...project} />)

  return (
    <Fragment>
      <WhatWeDo />
      <section id="ourWork" className="section-services section-content">
        <div className="container">
          <h2 className="section-heading">Our Work</h2>
          <div className="card-wrap -striped">
            {
              projectsList
            }
          </div>
        </div>
      </section>
    </Fragment>
  )
}

Services.defaultProps = {
  projects: [
    {
      title: "Quickinsure",
      logo: "prj_quickinsure.png",
      description: "QuickInsure is a specially developed platform for convenience in buying motor vehicle insurance and third party insurance. Buying an insurance for vehicles can sometimes be a time-consuming task for both vehicle owners and the professional who provides insurance policy options available in the market. QuickInsure is a B2C platform which provides that ease and convenience."
    }, {
      title: "ThePediatricNetwork",
      logo: "prj_tpn.png",
      description: "This portal helps the doctors to shorten the consultation time as well as automate the process right from registering the patient till the prescription of drugs and referring the patient to other doctors if need be."
    },
    {
      title: "We3Health",
      logo: "prj_we3health.png",
      description: "The journey of We3 health started with the birth of Will to Scott Bolick and Brittany Lothe. Will was born premature in the 24 th week of Brittany’s pregnancy at only 770 grams, and he spent his first five months of life in the ICN (Intensive Care Nursery) also called the NICU (Neonatal Intensive Care Unit). They experienced first-hand the complexities and challenges parents face when they have to see their child fighting for his/her life."
    },
    {
      title: "Groupbuzz",
      logo: "prj_groupbuzz.png",
      description: "GroupBuzz is dedicated to creating an optimum end user experience for group owners and members. To achieve this, the owners wanted to build a portal that meets the demands of groups of all shapes and sizes wanting a professional website to manage their members and member payments. They also worked towards making GroupBuzz a platform open for different groups where they can plan various meet ups, activities, exchange ideas and manage payments and accounts hassle free, efficiently and fast."
    },
    {
      title: "Fundamentor",
      logo: "prj_fundamentor.png",
      description: "Fundamentor is an innovative web application that enhances the Quantitative, Verbal, Data inference &amp; Creative thinking aptitude in school students It uses methods which students enjoy, ensuring effective aptitude development."
    },
    {
      title: "Brandscope",
      logo: "prj_brandscope.png",
      description: "Brandscope Pty. Ltd. is focused on providing a streamline solution and maximizes the selling process for suppliers, retailers and agents in Australian fashion and Action Sports industry. Through this platform a supplier gets immediate access to quality retailers using unique and dynamic online tools to launch their brand with speed and efficiency giving them the competitive edge as well as a retailer gets the desired brands where they can view and buy product for their stores."
    },
    {
      title: "Phalcomm",
      logo: "prj_phalcom.png",
      description: "Phalcomm is an E-Commerce Platform which offers online buying of real estate, real time brokerage and generates project specific report. It is used by over 500+ distributor and agents of phalcomm. Software provides real time information of about various bookings in progress across the nation and thus avoid double booking of same property. It also tracks the workflow from booking till allotment of the unit to customer."
    },
    {
      title: "SimplySmart",
      logo: "simplysmart.png",
      description: "Billing and Management portal which handle hardware devices installed  across multiple sites and based on the data it generate the bill and accept the payments."
    },
    {
      title: "Freedom from Diabetes",
      logo: "prj_ffd.png",
      description: "The Freedom from Diabetes app provides education, inspiration and support to its registered diabetic patients and an unique and easy way to stay connected with Dr. Pramod Tripathi and the team of doctors, dieticians, and mentors in the Freedom from Diabetes program. Also provides a way to manage patients data like medical history, payments etc."
    },
    {
      title: "Deal Signal",
      logo: "prj_dealsignal.png",
      description: "DealSignal provides the most powerful, automated and elegant way to build pipeline on-the-go with a real-time lead feed, leads list, and suggested actions"
    },
    {
      title: "Swalekhan",
      logo: "prj_swalekhan.png",
      description: "This product is ahead of the world. It is 100% accessible Android application used to coach visually challenged kids to learn typying"
    },
    {
      title: "Yumbox",
      logo: "prj_yumbox.png",
      description: "Yuhmbox is a weekly subscription service that delivers healthy, organic, ready to eat dinners to schools and offices for busy professional to take home with them"
    },
    {
      title: "Get a Limo",
      logo: "prj_getalimo.png",
      description: "This product is build to help Limousine drivers to “page out” jobs if they are busy and give a prompt service to regular customers thus creating a win-win situation for drives themselves, customers and other fellow limo drives"
    },
    {
      title: "SkoutDeals",
      logo: "prj_skoutdeals.png",
      description: "The only deal finding app you’ll ever need! Finding that great deal is a rush. Yet, finding those great deals from local merchants is not easy. Until now. It starts with having all nearby deals in a single location. No more time spent having to hunt through multiple apps, websites, emails, flyers, newspapers, or direct mail to find that great deal. Some call us the best deal-finding app, ever!"
    },
    {
      title: "Inmate Aid",
      logo: "prj_inmateaid.png",
      description: "Help before, during, and after prison. Save money on phone calls. Send magazines, photos, letters, photos, postcards, greeting cards, money."
    }

  ]
}

export default Services;
