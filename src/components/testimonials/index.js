import React from "react";

import TestimonialItem from "../../shared-components/testimonialItem/testimonialItem";
import * as routes from "../../routeConstants.js";
import arrowImg from "../../assets/images/revampImages/next-arrow.png";

const TestimonialsList = (props) => {
  const { testimonialList } = props;
  return (
    <>
      <div className="josh-content">
        <div className="testimonial-banner">
          <h2 className="mb-0 font-weight-bold text-center">Testimonials</h2>
        </div>
        <section className="testimonial-section">
          <div className="container">
            <div className="testimonial-card-wrap">
              {testimonialList.map((testimonialItems, i) => (
                <TestimonialItem
                  key={i}
                  clientLogo={testimonialItems.clientLogo}
                  clientName={testimonialItems.clientName}
                  clientCompany={testimonialItems.projectName}
                  clientDesignation={testimonialItems.designation}
                  clientProfile={testimonialItems.clientProfile}
                  clientDesc={testimonialItems.description}
                />
              ))}
            </div>
          </div>
        </section>
        <div className="link-item-wrap">
          <ul className="link-item-list list-unstyled mb-0 position-relative d-flex align-items-center justify-content-center">
            <li className="link-item d-flex">
              <a
                href={routes.OUR_TEAM_URL}
                className="text-center text-decoration-none -leadership"
              >
                Josh Leadership
                <img
                  src={arrowImg}
                  alt="arrow icon"
                  className="ml-3 arrow-img"
                />
              </a>
            </li>
            <li className="link-item d-flex">
              <a
                href={routes.CONTACT_US_URL}
                className="text-center text-decoration-none -contact-us"
              >
                Contact Us
                <img
                  src={arrowImg}
                  alt="arrow icon"
                  className="ml-3 arrow-img"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

TestimonialsList.defaultProps = {
  testimonialList: [
    {
      description: (
        <div>
          <p className="para-text">
            At this moment I would like to take the opportunity to say thanks to
            the entire Josh Team who have been part of this journey. I must say
            that it has been the most comfortable engagements ever in my
            experience so far.
          </p>
          <p className="para-text">
            I must say I am thoroughly impressed with Josh team. They have
            managed the expectation very well from the engagement perspective.
            They are technically very sound on the project as well as
            professional in delivering the output yet keeping things very
            informal and comfortable for the client. All in all, it was a
            thorough satisfying journey with Josh so far in my experience.
          </p>
        </div>
      ),
      clientName: "Mr. Prakash Pandey",
      designation: "Head of Technology",
      projectName: "BCSG/Legalzoom UK",
      clientLogo: require("../../assets/images/clients/new/bcsg@2x.png"),
    },
    {
      description: (
        <div>
          <p className="para-text">
            The search for a development partner can be a daunting task. You are
            not just looking for the right skill set and experience, you need a
            team you can trust. My search finished a little over 6 years ago
            when I found Josh. Since the early days of Brandscope, the Josh team
            have been with us all the way. They have worked with us, not for us,
            and have helped transform Brandscope into something we are all proud
            of.
          </p>
          <p className="para-text">
            It's great to have had them with us for the journey. We'll be
            sticking with them for many years to come.
          </p>
        </div>
      ),
      clientName: "Hec Heenan",
      designation: "CTO",
      projectName: "Brandscope, Inc., Australia",
      clientLogo: require("../../assets/images/clients/new/brandscope@2x.png"),
    },
    {
      description:
        "Josh Team has been able to turnaround our CRM and mobile App by understanding our needs, engaging in continuous dialogue during development phase to align the output and giving a product which is working with wonderful speed and ease for our doctors and patients. Deeper listening, long term view, flexibility and timely output have been some qualities that have made this a mutually beneficial experience!",
      clientName: "Dr. Pramod Tripathi",
      designation: "Founder",
      projectName: "FFD",
      clientLogo: require("../../assets/images/clients/new/ffd@2x.png"),
    },
    {
      description:
        "If a house has strong foundation and pillars, the house stands the test of time. My experience with Josh has been akin to that. If you want to build a technology house with strong foundations, it has to be with Josh. Every brick is put in with a lot of thought process and deliberation. Every feature is cemented well. Unexpected cracks don't emerge and even if they do, the team is quick to respond.My good wishes are with them and expect them to take the game higher in coming times by experimenting, innovating and leading in newer technologies!",
      clientName: "Dr. Atish Laddad",
      designation: "Pediatrician and Mentor",
      projectName: "The Pediatric Network",
      clientLogo: require("../../assets/images/clients/new/the-pediatric-network@2x.png"),
    },
    {
      description:
        "The Josh team are great partners and technically adept at what they do. They are professional, responsive and fun to work with. The team has been effective at helping us build 3rd party integrations and connectors, and I can't recommend this team enough.",
      clientName: "Mehul Shah",
      designation: "Co-Founder",
      projectName: "Blueshift Labs",
      clientLogo: require("../../assets/images/clients/new/blueshift@2x.png"),
    },
    {
      description: (
        <div>
          <p className="para-text">
            We engaged Josh Software two years ago to provide both web
            development utilizing Ruby on Rails and Mobile development on
            Android. Since then we have released two highly customized ERP
            solutions and a subscription based Android app with a subscription
            management backend.
          </p>
          <br />
          <p className="para-text">
            The people at Josh are not just experienced and excellent
            professionals, but working with them has been an enjoyable
            experience. They have been able to meet our targets despite strict
            requirements and tight timelines on all three projects. Due to the
            highly customized nature of the ERP solutions and the Android app,
            requirements were often increased in scope or new requirements added
            as the projects progressed. Despite all these, Josh Software
            delivered and we are more than happy to work with them on upcoming
            projects.
          </p>
        </div>
      ),
      clientName: "Wee Tien Guan",
      designation: "Manager (Projects and Quality)",
      projectName: "Synergy Design Solutions Pte.Ltd",
      clientLogo: require("../../assets/images/clients/new/synergy-design@2x.png"),
    },
    {
      description: (
        <div>
          <p className="para-text">
            Before getting Josh on board for our startup , we had done a lot of
            homework on IT vendors as well as tackled the question of whether to
            inhouse or outsource tech . The points which were in Josh's favour
            were
          </p>
          <p className="para-text">
            A. Very competent & experienced team
            <br />
            B. Use of efficient, robust & thorough processes/tools like pivotal
            tracker , github etc
            <br />
            C. They had worked with a lot of startups across the world with good
            customer feedback on quality as well as timelines.
          </p>
          <p className="para-text">
            We had a heard a lot of horror stories faced by startups about
            outsourced tech work so we kept our fingers crossed after they
            started work , but to our absolute delight Josh has functioned as an
            extended IT dept of our startup. They are very good at execution as
            well as providing suggestions/advice. They have delivered as per
            their estimates and forecasts of time and effort .
          </p>
          <p className="card-text">
            I will strongly recommend them for any startup who wants to be lean
            and efficient.
          </p>
        </div>
      ),
      clientName: "Amol Patkar",
      designation: "Founder & Director",
      projectName: "Fundamentor",
      clientLogo: require("../../assets/images/clients/new/fundamentor@2x.png"),
    },
    {
      description: (
        <div>
          <p className="para-text">
            Josh has provided DealSignal with highly experienced engineering
            management, disciplined development processes, talented developers,
            and have always excellent project management and client
            communications.
          </p>
          <p className="para-text">
            The Josh team consistently delivers nearly flawless, well documented
            code. They can quickly understand product requirements, and
            breakdown development tasks to ensure rapid execution. The team sets
            good expectations on delivery timeframes and always meets
            expectations. In many urgent situations, Josh managers and
            developers have gone many extra miles to make a deliverable happen
            by a key deadline.
          </p>
          <p className="para-text">
            With regard to technology, the Josh team's knowledge of Ruby,
            Postgres, Rest APIs, AWS, Regex, web crawling, data management, and
            systems integration far exceed all other non-US resources and
            frankly have proven to be much better than many Silicon Valley
            developers that we have worked with in the past. Along with modern
            software development stack, Josh team also uses modern development
            tools including Pivotaltracker, Github and provide detailed status
            updates to manage the project and keep our executives informed.
          </p>
          <p className="card-text">
            The Josh team takes great pride in their work, takes great care to
            ensure their clients' success, and we have grown to feel strongly
            that our Josh team is part of the family in our venture. We would
            recommend Josh team for any server side development project and have
            already referred other entrepreneurs we know to engage them.
          </p>
        </div>
      ),
      clientName: "Rob Weedn",
      designation: "Founder& CEO",
      projectName: "DealSignal, Inc.",
      clientLogo: require("../../assets/images/clients/new/dealsignal@2x.png"),
    },
    {
      description: (
        <div>
          <p className="para-text">
            Josh has been responsible for both the support of our products and
            there on-going development for the last two years.
          </p>
          <p className="para-text">
            Their performance in both areas has been excellent. In support I
            would go further and describe it as exceptional. When there is a
            problem, Josh are onto it; serious issues are dealt with at whatever
            time of day or night.
          </p>
          <p className="card-text">
            Communication between us is key and Josh have worked hard, not only
            to understand our product, but also our philosophy. We would be
            hard-pressed indeed to find another partner of this quality.
          </p>
        </div>
      ),
      clientName: "Sarah Sedgwick",
      designation: "Managing Director",
      projectName: "Clubbuzz",
      clientLogo: require("../../assets/images/clients/new/clubbuzz@2x.png"),
    },
    {
      description:
        "I got Josh on board for the development of the website for a startup in partnership with one of the biggests Italian VC, off-shore a project is never that easy especially for a project like that because it required complex backend and frontend development but what impressed me, apart from their RoR skills adn knowledge, is that they have always been committed to meet the project requirements, both in terms of timeline, budget and quality, so at the end it has revealed the best choice to work with them.",
      clientName: "Gabriele Antoniazzi",
      designation: "CWO",
      projectName: "ShowMe",
      clientLogo: require("../../assets/images/clients/new/showme@2x.png"),
    },
    {
      description:
        "Gautam and his team were a pleasure to work with. They dispel all the common myths of oursourcing. > They were forthright with their work > They provided suggestions and feedback before jumping into the work >They held themselves accountable to the work they delivered, in fact, only billing for the work completed. Many firms bill for time, and you never know if that company is working on other projects during your time. Josh Software is great in that sense. >These guys know Rails.",
      clientName: "Satjot",
      designation: "CEO",
      projectName: "Predikt it",
      clientLogo: require("../../assets/images/clients/new/predictit@2x.png"),
    },
    {
      description:
        "Gautam and his guys are a smart set of people. They helped us out at a critical time, when our company needed immediate growth. Enjoyed working with them.",
      clientName: "Saqib Rasool",
      designation: "CEO",
      projectName: "Conceivian",
      clientLogo: require("../../assets/images/clients/new/conceivian@2x.png"),
    },
    {
      description:
        "Josh Software is a great company and I highly recommend them. They are very professional, responsive and easy to work with. In addition, they are very responsive and reliable.",
      clientName: "Dave Kaiser",
      designation: "Co-Founder",
      projectName: "The Deal Pages",
    },
    {
      description:
        "We worked with Gautam (biz) and Sethu (Project Manager) to develop a product roadmap for The Deal Pages and tracked the development process through pivotal tracker for organization. Josh Software is a leader in RoR development in India and they often hold Ruby learning sessions. Even though they were based in India (far from North America) we found that they broke all stereotypes for outsourced software development. Communication was great and we could skype everyday to review work completed and deal with hurdles that came up.",
      clientName: "Chi Chen",
      designation: "Co-Founder and CEO",
      projectName: "The Deal Pages",
    },
    {
      description:
        "Josh team is significantly different from other outsourced teams I have worked with. Josh works exclusively with Ruby on Rails. Hence, the team has deep understanding about the framework and all supplementary libraries from the ecosystem. Another difference, which sets this team apart, is that Josh works more as partner than a service provider. More than once, team has gone extra mile to deliver project on time and on budget. Gautam's relaxed manner of project management worked well with our agile and fast pace of product development. I have found him flexible and accommodating with spec changes and timeline changes. Josh is also leading the Rails interest groups in their community. I am sure the efforts helping them attract best talent and keep themselves up to date with latest from the Rails world.",
      clientName: "Kunal Mahajan",
      designation: "Project Lead",
      projectName: "Conceivian",
      clientLogo: require("../../assets/images/clients/new/conceivian@2x.png"),
    },
    {
      description:
        "I was looking for an offshore partner specialising in Ruby on Rails, but also with a knowledge of more mainstream web languages such as .NET. As such Josh fit the bill perfectly. They have proved to be extremely proficient in their knowledge of Ruby and how quickly they picked up our working methods and the complexities of our client's sites. We're looking forward to a long term and productive relationship.",
      clientName: "Mark Godfrey",
      designation: "Head of eCommerce",
      projectName: "Twenty Ci Limited",
      clientLogo: require("../../assets/images/clients/new/twentyci@2x.png"),
    },
    {
      description:
        "We asked Josh Software to join the execution phase of a complex project in partnership with a very relevant national brand in India. The project required a tight level of back-end integration with existing technical assets/systems that we made available, and was managed with mutual satisfaction.",
      clientName: "Antongiulio La Corte",
      designation: "International Development Director ",
      projectName: "H-Farm",
      clientLogo: require("../../assets/images/clients/new/h-farm@2x.png"),
    },
    {
      description:
        "In addition to the technical expertise, the Josh team comes across as a team with thinking brains. Throughout the development lifecycle, I have seen them getting their heads around to deliver an enhanced functionality, which at times meant increased complexity and incremental developmental efforts. I am impressed with their degree of involvement and proactive approach to conceive solutions.",
      clientName: "Anand Kulkarni",
      designation: "Founder",
      projectName: "Paisamatters.com",
      clientLogo: require("../../assets/images/clients/new/paisa-matters@2x.png"),
    },
    {
      description:
        "As a startup, TourConnect hired Josh to take out concept and wireframes and turn it into a product. They have done a fantastic job! They did an excellent job of asking good questions and then running with the requirements with minimal supervision. They know their technology, they are excellent communicator and produced a great product with very few issues. Highly Recommended.",
      clientName: "Robert Patterson",
      designation: "Partner",
      projectName: "TourConnect",
      clientLogo: require("../../assets/images/clients/new/tourconnect@2x.png"),
    },
  ],
};

export default TestimonialsList;
