import React from 'react'
import { Button } from "reactstrap";
import { Link } from "react-router-dom";

import JoshCarousel from './carousel.js';
import {
  Heading1,
} from "./homeStyledComponents.js"


const Testimonials = (props) => {
  const { testimonialData } = props;

  const items = testimonialData.map(testimonial => {
    return <TestimonialGridItem {...testimonial} key={testimonial.clientName} />

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
    dotsClass: "slick-dots slick-thumb bottom-50",
    customPaging: () => <div className="rounded-circle orange-color" />,
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

const TestimonialGridItem = (props) => {
  const { description, clientName, designation, projectName } = props;
  return (
    <div className="testimonial-container mx-3">
      <div className="testimonial-grid-item testimony">
        <div className="quotes"><i>&#65282;</i></div>
          <div className="ellipsis">{description}</div>
          <Link to="/testimonials" className="read-more" >
            <Button className="btn btn-outline-danger">
              <span>Read More</span></Button>
          </Link>
      </div>
      <div className="testimonial-grid-item client-name">
        {clientName}
      </div>
      <div className="testimonial-grid-item project-name pl-2">
        {designation}<br /> {projectName}
      </div>
    </div>
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
      "description": "Gautam and his team were a pleasure to work with. They dispel all the common myths of oursourcing. They were forthright with their work . They provided suggestions and feedback before jumping into the work  They held themselves accountable to the work they delivered, in fact, only billing for the work completed. Many firms bill for time, and you never know if that company is working on other projects during your time. Josh Software is great in that sense. These guys know Rails (period).",
      "clientName": "Satjot",
      "designation": "CEO",
      "projectName": "Predikt it"
    }
  ]
}

export default Testimonials;


