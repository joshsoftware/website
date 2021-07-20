import React from "react";
import {
  Card,
  Button,
  CardTitle,
  CardText,
  Row,
  Col,
  CardImg,
  CardSubtitle,
} from "reactstrap";
import Navbar from "./navbar.js";

const Component = (props) => {
  const { news } = props;

  const years = Object.keys(news)
    .map((y) => parseInt(y))
    .sort()
    .reverse()
    .map((n) => `${n}`);
  const renderCardItems = () => {
    return years.map((year, index) => (
      <section id={year} key={index}>
        <div className="container">
          <div className="row d-flex justify-content-center">
            <h4 style={{ color: "#CF4338", margin: "60px" }}>
              <b>{year}</b>
            </h4>
          </div>
        </div>
        <Row className="justify-content-center">
          {news[year].map((n, i) => (
            <Col
              sm="4"
              lg="4"
              md="4"
              xs="12"
              className="d-flex align-items-stretch pb-8"
              key={i}
            >
              <Card body>
                {n.image_url.startsWith("http") && (
                  <CardImg
                    top
                    width="100%"
                    height="200px"
                    src={n.image_url}
                    alt={n.title}
                  />
                )}
                <CardTitle>
                  <a
                    href={n.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none" }}
                  >
                    {n.title}
                  </a>
                </CardTitle>
                <CardText className="module line-clamp">
                  {n.description}
                </CardText>
                <CardSubtitle>{n.formatted_date}</CardSubtitle>
                <a
                  href={n.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "black" }}
                  className="d-flex align-items-end"
                >
                  <Button
                    outline
                    color="danger"
                    size="sm"
                    className="align-self-end"
                  >
                    {" "}
                    Know More{" "}
                  </Button>
                </a>
              </Card>
            </Col>
          ))}
        </Row>
      </section>
    ));
  };

  return (
    <div className="section-news">
      <Navbar list={years} />
      <div className="news-content">{renderCardItems()}</div>
    </div>
  );
};

export default Component;
