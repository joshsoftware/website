import React from 'react'
import { Heading1, CurvedCard } from "./homeStyledComponents.js";
import { TabContent, TabPane, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import JoshCarousel from './carousel.js';

const JoshInNews = (props) => {
  const { newsData } = props;

  const items = newsData.map(news => {
    return (
      <CurvedCard body>
        <CardTitle>Special Title Treatment</CardTitle>
        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
        <Button>Go somewhere</Button>
      </CurvedCard>
    )
  })

  return (
    <section id="clientsSlide"
      className="section-home ">
      <Heading1>Josh In News</Heading1>
      <Row>
        <Col md={1} />
        <Col md={10} >
          <JoshCarousel items={items} />
        </Col>
        <Col md={1} />
      </Row>
    </section>
  )
}

JoshInNews.defaultProps = {
  newsData: [
    {
      id: 1,
      title: "KimayaNICU on CNBC Awaaz Enterpreneur"
    },
    {
      id: 2,
      title: "KimayaNICU on CNBC Awaaz Enterpreneur"
    },
    {
      id: 3,
      title: "KimayaNICU on CNBC Awaaz Enterpreneur"
    },
    {
      id: 4,
      title: "KimayaNICU on CNBC Awaaz Enterpreneur"
    },
    {
      id: 5,
      title: "KimayaNICU on CNBC Awaaz Enterpreneur"
    }
  ]
}

export default JoshInNews;
