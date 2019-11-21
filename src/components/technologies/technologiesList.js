import React from 'react'
import { Link } from 'react-router-dom';

import TechnologyDetails from './technologyDetails';
import { SERVICES_URL } from "../../routeConstants.js";
import {TECHNOLOGIES_USED} from "../../globalConstants"

const TechnologiesList = (props) => {
  const { technologies } = props;

  return (
    <section id="technologies" className="section-technologies section-content">
      <div className="container">
        <div className="card-wrap -striped">
          {
            technologies.map(technology => <TechnologyDetails key={technology.name} {...technology} />)
          }
        </div>
        <div className="btn-wrap">
          <Link to={SERVICES_URL} className="btn btn-gray">Services</Link>
          <a href="industries.html" className="btn btn-outline-gray">Industries</a>
        </div>
      </div>
    </section>
  )
}

TechnologiesList.defaultProps = {
  technologies: [{
    name: TECHNOLOGIES_USED.iot,
    logo: "iot.png",
    description: "With the well-known benefits of AI in the world of technology, we cater to deliver robust IoT-led solutions to our clients aligned with achieving data-driven capitalism. We build simple and smart web-based and mobile-based applications for our clients from different verticals and further help them with utmost assistance and sustainable solutions.  "
  },
  {
    name: TECHNOLOGIES_USED.openSource,
    logo: "opensource.png",
    description: "We believe in giving back, we believe in opensource! We always try to encourage, motivate developers to get actively involve into the opensource community and contribute to various projects. Knowing that everyone needs motivation &amp; help to upskill thier work, we always come up with new ideas like Opensource Fridays &amp; codecuriosity."
  },
  {
    name: TECHNOLOGIES_USED.ai,
    logo: "ai.png",
    description: "AI in a simple definition is the ability of computers to perform tasks that otherwise takes human intelligence to do. We ensure that we are aligned with our motive of making robust solutions for clients to cater them with easier accessibility in meeting their business goal."
  },
  {
    name: TECHNOLOGIES_USED.ml,
    logo: "machine-learning.png",
    description: "Machine learning is a development of algorithms that provides systematic ability to automatically learn and improve from experiences without being explicitly programmed. Focuses on the development of computer programs that can access data, analyze it, learn from it."
  },
  {
    name: TECHNOLOGIES_USED.cloud,
    logo: "cloud.png",
    description: "Cloud computing has evolved business computing and software architectures into an iterative, scalable set of applications that constantly transform to meet the needs of companies and consumers. We, at Josh, help in providing simplified solutions to our clients who are in search of pre-integrated agile cloud solutions to face the complexities in business. "
  },
  {
    name: TECHNOLOGIES_USED.rubyOnRails,
    logo: "ruby.png",
    description: "From last 10 years, we have delivered solutions using RoR open source technology, which helps in building web applications and back-end api applications (for mobile apps) in lightening fast time period, resulting in highly maintainable &amp; efficient systems in cost effective manner."
  },
  {
    name: TECHNOLOGIES_USED.go,
    logo: "go.png",
    description: "Golang is a very powerful language when it comes to processing data at real time. Initially it helped us to parse complex excel sheets within seconds which used to take lot of time in ruby. Later we build various applications in robotics, IOT and Web app in Golang. Golang is perfect for those who want to combine both concurrency and simplycity together."
  },
  {
    name: TECHNOLOGIES_USED.react,
    logo: "react.png",
    description: "We provide solutions using ReactJS which is a cost effective, adhere to modern architecture which not only provide a great user experience but also helps to build maintainable &amp; tech vivid solution for clients. React not only helps in building high performing, scalable systems in less time but also guides towards more effective and efficient solutions to the businesses."
  },
  {
    name: TECHNOLOGIES_USED.angular,
    logo: "angular.png",
    description: "AngularJs is superheroic javascript framework. It has extraordinarily expressive, readable, and quick to develop environment. We provide solutions for web, mobile web, native mobile and native desktop using  AngularJs's reusable, productive and scalable infrastructure. AngularJs frequently derives some great ideas to improve itself and this motivates us to improvise our solutions."
  },
  {
    name: TECHNOLOGIES_USED.android,
    logo: "android.png",
    description: "Android is most popular mobile operating system across the globe and when it comes to architectural standard, our android app development service is best in class. We build scalable , sustainable , light weight and secured android apps that includes both phones and tablets. Also, we try and give back to the community by making contributions in various android open source packages and actively getting involved in conferences."
  },
  {
    name: TECHNOLOGIES_USED.ios,
    logo: "img_ios.png",
    description: "We are one of the leading iPhone app development companies as we build secure, high performance, and engaging iPhone app solutions. With our knowledge of disrupting technology, tools, industry's best practices and designs, we intent to provide sustainable iPhone and iPad app solutions to our customers."
  }]
}

export default TechnologiesList;
