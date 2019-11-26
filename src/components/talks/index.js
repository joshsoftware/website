import React from 'react';
import Media from "react-media";
import { Row, Col } from 'reactstrap';
import {
  Card, CardText, CardBody, CardSubtitle, CardHeader,
} from 'reactstrap';

const Talks = (props) => {
  const {data} = props;

  return (
    <div className='section-content'>
    <Row>
      {
        data.map((video) => {
          const url = video.link ? video.link : `https://www.youtube.com/embed/${video.videoId}`;
          return (
            (
                <Media query="(max-width: 500px)" key={video.videoId}>
                  {matches =>
                    matches
                    ? (
                      <Col sm="12" className="pt-2 pb-2">
                        <Card>
                          <CardHeader tag="h6"><b>{video.topic}</b></CardHeader>
                          <CardBody>
                            <CardText>
                              <iframe width="360" height="260" src={url} title={video.topic}/>
                            </CardText>
                            <CardSubtitle>By {video.speaker} - At {video.event}</CardSubtitle>
                            <CardSubtitle>{video.date}</CardSubtitle>
                          </CardBody>
                        </Card>
                      </Col>
                    )
                    : (
                      <Col lg="4" className="pt-3 pb-3">
                        <Card>
                          <CardHeader tag="h6"><b>{video.topic}</b></CardHeader>
                          <CardBody>
                            <CardText>
                              <iframe width="360" height="260" src={url} title={video.topic}/>
                            </CardText>
                            <CardSubtitle>By {video.speaker} - At {video.event}</CardSubtitle>
                            <CardSubtitle>{video.date}</CardSubtitle>
                          </CardBody>
                        </Card>
                      </Col>
                    )
                  }
                </Media>
            )
          )
        })
      }
      </Row>
    </div>
  )
}

Talks.defaultProps = {
  data: [
    {
      event: "Gophercon Uk 2019",
      date: "2 October 2019",
      topic: "Impossible Go",
      speaker: "Gautam Rege",
      videoId: "jZ1ZsULRyE0"
    },
    {
      event: "RCI 2019",
      date: "19 January 2019",
      topic: "keynote",
      speaker: "Gautam Rege",
      videoId: "NKdEx5ZPsFU"
    },
    {
      event: "RubyConf Philippines 2018",
      date: "2 April 2018",
      topic: "Standup Comedy and Ruby Programmin",
      speaker: "Gautam Rege",
      videoId: "N98cnuW0bm0"
    },
    {
      date: '29 Jan 2017',
      event: 'GCRC',
      topic: 'Dark Side of Ruby',
      speaker: 'Gautam Rege',
      videoId: '-oorcRJ2Kfg',
    },
    {
      event: "RubyConf Philippines 2017",
      date: "21 June 2017",
      topic: "GoFFIng Around with Ruby",
      speaker: "Gautam Rege",
      videoId: "_tF_brVZwUE"
    },
    {
      date: '26 April 2016',
      event: 'RCI  2016',
      topic: 'To fear or not to fear: That is the question ',
      speaker: 'Shweta and Anuja ware',
      videoId: '-NT8muf-N7g',
    },
    {
      event: "Deccan rubyconf 2016",
      date: "31 August 2016",
      topic: "Lost while developing API's in Rails?",
      speaker: "Pramod SHinde",
      videoId: "QRz3TjH-xCg"
    },
    {
      event: "Agile india 2016",
      date: "23 April 2017",
      topic: "Rewarding Open Sourse with $$$",
      speaker: "Gautam Rege",
      videoId: "8nU08YDOb58"
    },
    {
      event: "XP Conference India 2016",
      date: "26 September 2016",
      topic: "Gamifying Open Source",
      speaker: "Gautam Rege",
      videoId: "o3fZys_POno"
    },
    {
      event: "Web Summit 2015",
      date: "4 Dec 2015",
      topic: "Gopher it",
      speaker: "Gautam Rege",
      videoId: "OtfyLtsrmCA"
    },
    {
      date: '2 Nov 2015',
      event: '',
      topic: 'KimayaNICU on CNBC Awaaz Enterpreneur',
      speaker: 'Gautam Rege',
      videoId: '6FbmpdJrZxc',
    },
    {
      event: "Deccan Rubyconf 2015",
      date: "25 August 2015",
      topic: "Panel Discussion",
      speaker: "Gautam Rege, Satish Talim",
      videoId: "xfWg5IiBSQI"
    },
    {
      event: "Tech Summit",
      date: "8 Dec 2015",
      topic: "Affordable Smart Housing - the new revolution",
      speaker: "Gautam Rege",
      videoId: "MQNoXkBUL1A"
    },
    {
      event: "Agile India 2015",
      date: "April 17 2015",
      topic: "Don't Test Your Code",
      speaker: "Gautam Rege",
      videoId: "YPzyra_Sx1Q"
    },
    {
      event: "Rubyconf Portugal 2015",
      date: "4 Sept 2015",
      topic: "Why Ruby must Go",
      speaker: "Gautam Rege",
      videoId: "e_7qhUMJJ8k"
    },
    {
      event: "Red Dot Ruby 2014",
      date: "21 July 2014",
      topic: "The Dark Side of Ruby",
      speaker: "Gautam Rege",
      videoId: "_KgcQMXIqM4"
    },
    {
      event: "Rubyconf India 2012 ",
      date: "May 2012",
      topic: "Push it push it some more",
      speaker: "Gautam Rege",
      link: "https://dev.tube/video/HDvk9PZx2t8",
    },
    // {
    //   event: "Lone Star RubyCOnf 2010",
    //   date: "2010",
    //   topic: "Mobile Value Added Services",
    //   speaker: "Gautam Rege",
    //   link: "https://confreaks.tv/videos/lsrc2010-mobile-value-added-service-vas"
    // },
  ]
}

export default Talks;
