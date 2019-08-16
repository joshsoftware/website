import React, { Fragment } from "react";
import Media from "react-media";
import { Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

import { PinkDiv, H3Text } from './successStoriesStyledComponents';
import TextImage from './textImage';
import ImageText from './imageText';
import MobileStoryView from './mobileStoryView';
import JoshCarousel from '../home/carousel';
import previousSvg from "../../assets/images/previous.svg";
import nextSvg from "../../assets/images/next.svg";

const FFD = (props) => {
  let storyTitles = ["Freedom from Diabetes"]

  const carouseItems = storyTitles.map(item => {
    return (
      <div class="border-right border-muted text-center">
        <Col>
          <Link to="success_stories" className="text-dark"> {item} </Link>
        </Col>
      </div>
    )
  })

  const NextArrow = (props) => {
    const { className, onClick } = props;
    return (
      <img
        src={nextSvg}
        className={className}
        onClick={onClick}
        alt="Next"
      />
    );
  }

  const PrevArrow = (props) => {
    const { className, onClick } = props;
    return (
      <img
        src={previousSvg}
        className={className}
        onClick={onClick}
        alt="Previous"
      />
    );
  }

  const settings = {
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [{
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        arrows: false,
        dots: true
      }
    },
    {
      breakpoint: 330,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        arrows: false,
        dots: true

      }
    }]
  }

  const carouselMobile = <Row className="w-80 m-auto justify-content-around text-danger pt-2">
    <Col>
      <JoshCarousel items={carouseItems} settings={settings} />
    </Col>
  </Row>

  const carouselWeb = <Row className="w-75 m-auto justify-content-around text-danger pt-2">
    <Col>
      <JoshCarousel items={carouseItems} settings={settings} />
    </Col>
  </Row>

  return (
    <Media query="(max-width: 900px)">
      {matches =>
        matches ? (
          <Fragment>
            <PinkDiv />
            {carouselMobile}
            <H3Text className="mt-5 text-center mb-5" color="#0F0F0F"> {props.title} </H3Text>
            {props.contentKeys.map((key) => {
              return <MobileStoryView text={props[key].text} subHeading={props[key].subHeading} image={props[key].image} />
            })}
          </Fragment>
        ) : (
            <Fragment>
              <PinkDiv />
              {carouselWeb}
              <H3Text className="mt-5 text-center mb-5" color="#CF4338"> {props.title} </H3Text>
              {props.contentKeys.map((key, index) => {
                if (index % 2 === 0) {
                  return <TextImage text={props[key].text} subHeading={props[key].subHeading} image={props[key].image} />
                }
                else
                  return <ImageText text={props[key].text} subHeading={props[key].subHeading} image={props[key].image} />
              })}
            </Fragment>
          )
      }
    </Media>
  )
}

FFD.defaultProps = {
  title: 'ENABLING STORIES OF FREEDOM',
  contentKeys: ['summary', 'challenge', 'insight', 'joshEdge', 'impact'],
  summary: {
    subHeading: 'SUMMARY',
    image: 'summary',
    text: <p>Diabetes is traditionally considered to be an incurable disease, and is a deeply anchored health concern today. Aimed at improving the lives of diabetes patients <strong> Freedom from Diabetes (FFD) was launched in 2013 by Dr. Pramod Tripathi.</strong> <br /><br /> With more than 25 doctors on board, more than 6000 people have given up insulin and sugar tables. What started with a batch of 200 people has now benefited more than 18,000 people. FFD has its headquarters in Pune, and a rapidly growing network of doctors in 10+ cities.</p>
  },

  challenge: {
    subHeading: 'CHALLENGE',
    image: 'challenge',
    text: <p> The number of patients was steadily increasing by 2015, and <strong>maintaining patient records offline was becoming cumbersome</strong>. The need for tech intervention was real, with an objective of digitizing all patient records. Further, the first app that was developed was facing performance lags due to a very high turnaround time for doctor-patient interactions. The overall customer experience, had thus, deteriorated massively. </p>
  },
  insight: {
    subHeading: 'INSIGHT',
    image: 'insight',
    text: <p> The first version of the application could not be modified or scaled up since it was built on a legacy tech stack. The newer version of the app would have to be rebuilt entirely to integrate all patient records in a single database. </p>
  },

  joshEdge: {
    subHeading: 'THE JOSH EDGE',
    image: 'joshEdge',
    text: <p>The entire digital platform was built from scratch on a tech stack of Trailblazer, Ruby on Rails, Mongo and lasticSearch, for Android and iOS. The Josh team also integrated the app with the business's CRM system, enabling a centralized accessible database. A call tracker for marketing teams was introduced, along with a plug-in with WhatsApp patient groups. Communication with doctors was possible through chat, and patients could update their blood test reports every three to four hours. The app also enabled them to connect with mentors who had benefited from the program. Each patient's app is activated as soon as they register for the program, and doctors are notified in real time.</p>
  },

  impact: {
    subHeading: 'IMPACT',
    image: 'impact',
    text: <p> Blood sugar and insulin levels mapped in real time The doctor's turnaround time with patients reduced from a few hours to 10 seconds More than 18,000 users as compared to less than 100 users on the previous app Clean, improved end customer experience with maximum operational efficiency </p>
  }
}

export default FFD;
