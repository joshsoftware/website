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
    text: <><p><strong>The International Diabetes Federation projects that the number of diabetes patients in the South East Asian region will double by 2045. Currently, 8.8% of the Indian adult population suffers from diabetes. This is cause for extreme concern.</strong></p><p>Traditionally incurable, diabetes is a deeply rooted health concern making millions miserable. But when the best of tech and medicine come together, there&#39;s hope for radical improvement. Freedom From Diabetes (FFD), launched in 2013 by Dr. Pramod Tripathi has a singular aim: not just cure diabetes, but eliminate it completely. The program has 18,000 diabetes-free success stories to its credit and this number is only growing with each passing year. With a steadily increasing number of medical practitioners on board, FFD, headquartered in Pune, now has a network in more than 10 Indian cities. </p> </>
  },

  challenge: {
    subHeading: 'CHALLENGE',
    image: 'challenge',
    text: <p>The number of patients grew incrementally in the first two years of the program, and by 2015 there were a few thousand knocking on FFD’s door. The biggest challenge was maintaining patient records offline, and the need for digitisation meant only one thing: tech intervention. The first version of the CRM and mobile application was built, but it failed at scale. Both doctors and patients were using this app, at the cost of a high turnaround time, major performance lags and extremely poor customer experience.</p>
  },
  insight: {
    subHeading: 'INSIGHT',
    image: 'insight',
    text: <p>Revamping the initial applications was not possible, since it had been built on a legacy tech stack that was not connected to FFD’s other digital systems. A new version of the app backed by new age tech was the need of the hour. </p>
  },

  joshEdge: {
    subHeading: 'THE JOSH EDGE',
    image: 'joshEdge',
    text: <p>Keeping the rescue mission philosophy in mind, the Josh team started building the app from scratch. We built the CRM system on the backs of Trailblazer, Ruby on Rails, Mongo and ElasticSearch, along with Android and iOS compatibility. The foundation of the application was implemented one step at a time. A centrally accessible database was also created to enable seamless integration of patient records with the existing website & marketing systems. The team also introduced a call tracker for the in house marketing teams to stay updated in real time. A chat module was also rolled out to enable round the clock communication between doctors and patients. The app ensured that patients could upload blood test reports every 3 to 4 hours. The doctors were also notified about patient behaviour in real time, ensuring a transparent, efficient treatment program. Designed to scale up with the program, the app is a huge success with all stakeholders, new and old! </p>
  },

  impact: {
    subHeading: 'IMPACT',
    image: 'impact',
    text: <><p>Reduced turnaround time. Doctor-patient interactions in seconds, not hours. </p> <p>No wait time for patients, with a provision to share reports and readings digitally.</p> <p>More than 18,000 active users.</p><p>Real time mapping of blood sugar and insulin levels.</p><p>Improved end customer experience with maximum operational efficiency and no performance lags.</p></>
  }
}

export default FFD;
