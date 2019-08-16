import React, { Fragment } from 'react'
import { Button } from "reactstrap";
import { Link } from "react-router-dom";

import JoshCarousel from './carousel.js';
import {
  Heading1,
  TestimonialBox,
  TestimonialBoxText,
  ClientDesignationBox,
  ClientNameBox,
  Quotes,
  ClientName,
} from "./homeStyledComponents.js"


const Testimonials = (props) => {
  const { testimonialData } = props;

  const items = testimonialData.map(testimonial => {
    return <Testimonial {...testimonial} key={testimonial.clientName} />

  })

  const settings = {
    dots: true,
    centerMode: true,
    infinite: true,
    speed: 500,
    centerPadding: "10px",
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    dotsClass: "slick-dots slick-thumb orange-color",
    // variableWidth: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div>
      <Heading1>Here’s what our clients are saying</Heading1>
      <div className="row">
        <div className="col-md-1" />
        <div className="col-md-10 height-adjust">
          <JoshCarousel items={items} settings={settings}></JoshCarousel>
        </div>
        <div className="col-md-1" />
      </div>
    </div>
  )
}

const Testimonial = (props) => {
  const { description, clientName, designation, projectName } = props;
  /** To adjust description in box, we are only 260 characters from the description */
  // const descriptionText = description.length > 280 ? `${description.substr(0, 280)}...` : description

  return (
    <Fragment>
      <TestimonialBox >
        <Quotes><i>&#65282;</i></Quotes>
        <TestimonialBoxText >
          <span className="ellipsis">{description}</span>
          <Link to="/testimonials" className="read-more" >
            <Button className="btn btn-outline-danger">
              <span>Read More</span></Button>
          </Link>
        </TestimonialBoxText>
      </TestimonialBox>
      <ClientNameBox>
        <ClientName>{clientName}</ClientName>
      </ClientNameBox>
      <ClientDesignationBox ><span>{designation}<br />{projectName}</span></ClientDesignationBox>
    </Fragment>
  )
}

Testimonials.defaultProps = {
  testimonialData: [
    {
      "description": "Josh Team has been able to turnaround our CRM and mobile App by understanding our needs, engaging in continuous dialogue during development phase to align the output and giving a product which is working with wonderful speed and ease for our doctors and patients. Deeper listening, long term view, flexibility and timely output have been some qualities that have made this a mutually beneficial experience!",
      "clientName": "Dr. Pramod Tripathi",
      "designation": "Founder",
      "projectName": "FFD"
    },
    {
      "description": "If a house has strong foundation and pillars, the house stands the test of time. My experience with Josh has been akin to that. If you want to build a technology house with strong foundations, it has to be with Josh. Every brick is put in with a lot of thought process and deliberation. Every feature is cemented well. Unexpected cracks don't emerge and even if they do, the team is quick to respond.My good wishes are with them and expect them to take the game higher in coming times by experimenting, innovating and leading in newer technologies!",
      "clientName": "Dr. Atish Laddad",
      "designation": "Pediatrician and Mentor",
      "projectName": "Docterz"
    },
    {
      "description": "The Josh team are great partners and technically adept at what they do. They are professional, responsive and fun to work with. The team has been effective at helping us build 3rd party integrations and connectors, and I can't recommend this team enough.",
      "clientName": "Mehul Shah",
      "designation": "Co-Founder",
      "projectName": "Blueshift Labs"
    },
    {
      "description": "We engaged Josh Software two years ago to provide both web development utilizing Ruby on Rails and Mobile development on Android. Since then we have released two highly customized ERP solutions and a subscription based Android app with a subscription management backend. The people at Josh are not just experienced and excellent professionals, but working with them has been an enjoyable experience. They have been able to meet our targets despite strict requirements and tight timelines on all three projects. Due to the highly customized nature of the ERP solutions and the Android app, requirements were often increased in scope or new requirements added as the projects progressed. Despite all these, Josh Software delivered and we are more than happy to work with them on upcoming projects.",
      "clientName": "Wee Tien Guan",
      "designation": "Manager (Projects and Quality)",
      "projectName": "Synergy"
    },
    {
      "description": "Before getting Josh on board for our startup , we had done a lot of homework on IT vendors as well as tackled the question of whether to inhouse or outsource tech . The points which were in Josh's favour were Very competent &amp; experienced team<br>B. Use of efficient, robust &amp; thorough processes/tools like pivotal tracker , github etc<br>C. They had worked with a lot of startups across the world with good customer feedback on quality as well as timelines. We had a heard a lot of horror stories faced by startups about outsourced tech work so we kept our fingers crossed after they started work , but to our absolute delight Josh has functioned as an extended IT dept of our startup. They are very good at execution as well as providing suggestions/advice. They have delivered as per their estimates and forecasts of time and effort .I will strongly recommend them for any startup who wants to be lean and efficient.",
      "clientName": "Amol Patkar",
      "designation": "Founder & Director",
      "projectName": "Fundamentor"
    },
    {
      "description": " Josh has provided DealSignal with highly experienced engineering management, disciplined development processes, talented developers, and have always excellent project management and client communications.The Josh team consistently delivers nearly flawless, well documented code. They can quickly understand product requirements, and breakdown development tasks to ensure rapid execution. The team sets good expectations on delivery timeframes and always meets expectations. In many urgent situations, Josh managers and developers have gone many extra miles to make a deliverable happen by a key deadline. With regard to technology, the Josh team's knowledge of Ruby, Postgres, Rest APIs, AWS, Regex, web crawling, data management, and systems integration far exceed all other non-US resources and frankly have proven to be much better than many Silicon Valley developers that we have worked with in the past. Along with modern software development stack, Josh team also uses modern development tools including Pivotaltracker, Github and provide detailed status updates to manage the project and keep our executives informed. The Josh team takes great pride in their work, takes great care to ensure their clients' success, and we have grown to feel strongly that our Josh team is part of the family in our venture. We would recommend Josh team for any server side development project and have already referred other entrepreneurs we know to engage them.",
      "clientName": "Rob Weedn",
      "designation": "Founder & CEO",
      "projectName": "DealSignal, Inc."
    },
    {
      "description": "Josh has been responsible for both the support of our products and there on-going development for the last two years.Communication between us is key and Josh have worked hard, not only to understand our product, but also our philosophy. We would be hard-pressed indeed to find another partner of this quality.",
      "clientName": "Sarah Sedgwick",
      "designation": "Managing Director",
      "projectName": "Clubbuzz"
    },
    {
      "description": "I got Josh on board for the development of the website for a startup in partnership with one of the biggests Italian VC, off-shore a project is never that easy especially for a project like that because it required complex backend and frontend development but what impressed me, apart from their RoR skills adn knowledge, is that they have always been committed to meet the project requirements, both in terms of timeline, budget and quality, so at the end it has revealed the best choice to work with them.",
      "clientName": "Gabriele Antoniazzi",
      "designation": "CWO",
      "projectName": "ShowMe"
    },
    {
      "description": "Gautam and his team were a pleasure to work with. They dispel all the common myths of oursourcing. &gt; They were forthright with their work &gt; They provided suggestions and feedback before jumping into the work &gt; They held themselves accountable to the work they delivered, in fact, only billing for the work completed. Many firms bill for time, and you never know if that company is working on other projects during your time. Josh Software is great in that sense. &gt; These guys know Rails (period).",
      "clientName": "Satjot",
      "designation": "CEO",
      "projectName": "Predikt it"
    },
    {
      "description": "Gautam and his guys are a smart set of people. They helped us out at a critical time, when our company needed immediate growth. Enjoyed working with them.",
      "clientName": "Saqib Rasool",
      "designation": "CEO",
      "projectName": "Conceivian"
    },
    {
      "description": "Josh Software is a great company and I highly recommend them. They are very professional, responsive and easy to work with. In addition, they are very responsive and reliable.",
      "clientName": "Dave Kaiser",
      "designation": "Co-Founder",
      "projectName": "The Deal Pages"
    },
    {
      "description": "We worked with Gautam (biz) and Sethu (Project Manager) to develop a product roadmap for The Deal Pages and tracked the development process through pivotal tracker for organization. Josh Software is a leader in RoR development in India and they often hold Ruby learning sessions. Even though they were based in India (far from North America) we found that they broke all stereotypes for outsourced software development. Communication was great and we could skype everyday to review work completed and deal with hurdles that came up.",
      "clientName": "Chi Chen",
      "designation": "Co-Founder and CEO",
      "projectName": "The Deal Pages"
    },
    {
      "description": "These guys are the most passionate team that I have ever seen dedicated to a technology, and they take immense pride in their expertise on RoR. At multiple times, the team has stood up to the challenges and delivered on aggressive timelines with good quality. The team with different skillsets helps a lot when you can get in a facebook development expert to come in and tweak your fb related code, whereas someone else would actually come in and fix in the rendering issues that are being faced on IE and go back to his regular assighments (which might not be your project). A good focus on writing test cases and automating them helps catch some bugs beforehand. All in all, an awesome, well balanced team. Strongly recommended.",
      "clientName": "Hetal Rach",
      "designation": "Founder",
      "projectName": "GroupGyaan.com"
    },
    {
      "description": "Josh team is significantly different from other outsourced teams I have worked with. Josh works exclusively with Ruby on Rails. Hence, the team has deep understanding about the framework and all supplementary libraries from the ecosystem. Another difference, which sets this team apart, is that Josh works more as partner than a service provider. More than once, team has gone extra mile to deliver project on time and on budget. Gautam's relaxed manner of project management worked well with our agile and fast pace of product development. I have found him flexible and accommodating with spec changes and timeline changes. Josh is also leading the Rails interest groups in their community. I am sure the efforts helping them attract best talent and keep themselves up to date with latest from the Rails world.",
      "clientName": "Kunal Mahajan",
      "designation": "Project Lead",
      "projectName": "Conceivian"
    },
    {
      "description": "I was looking for an offshore partner specialising in Ruby on Rails, but also with a knowledge of more mainstream web languages such as .NET. As such Josh fit the bill perfectly. They have proved to be extremely proficient in their knowledge of Ruby and how quickly they picked up our working methods and the complexities of our client's sites. We're looking forward to a long term and productive relationship.",
      "clientName": "Mark Godfrey",
      "designation": "Head of eCommerce",
      "projectName": "Twenty Ci Limited"
    },
    {
      "description": "We asked Josh Software to join the execution phase of a complex project in partnership with a very relevant national brand in India. The project required a tight level of back-end integration with existing technical assets/systems that we made available, and was managed with mutual satisfaction.",
      "clientName": "Antongiulio La Corte",
      "designation": "International Development Director ",
      "projectName": "H-Farm"
    },
    {
      "description": "In addition to the technical expertise, the Josh team comes across as a team with thinking brains. Throughout the development lifecycle, I have seen them getting their heads around to deliver an enhanced functionality, which at times meant increased complexity and incremental developmental efforts. I am impressed with their degree of involvement and proactive approach to conceive solutions.",
      "clientName": "Anand Kulkarni",
      "designation": "Founder",
      "projectName": "Paisamatters.com"
    },
    {
      "description": "As a startup, TourConnect hired Josh to take out concept and wireframes and turn it into a product. They have done a fantastic job! They did an excellent job of asking good questions and then running with the requirements with minimal supervision. They know their technology, they are excellent communicator and produced a great product with very few issues. Highly Recommended.",
      "clientName": "Robert Patterson",
      "designation": "Partner",
      "projectName": "TourConnect"
    }
  ]
}

export default Testimonials;


