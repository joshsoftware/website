import React from "react";
// import {
//   Card,
//   Button,
//   CardTitle,
//   CardText,
//   Col,
//   CardImg,
//   CardSubtitle,
// } from "reactstrap";

import { MediaCard } from "../../shared-components";
import news from "./test.json";

const Component = (props) => {
  //   const { news } = props;

  //   const years = Object.keys(news)
  //     .map((y) => parseInt(y))
  //     .sort()
  //     .reverse()
  //     .map((n) => `${n}`);
  //   const renderCardItems = () => {
  //     return years.map((year, index) => (
  //       <div id={year} key={index}>
  //         <div className="media-grid d-flex flex-wrap justify-content-center">
  //           {news[year].map((n, i) => (
  //             <>
  //               <Col sm="4" className="d-flex align-items-stretch pb-8" key={i}>
  //                 <Card body>
  //                   {n.image_url.startsWith("http") && (
  //                     <CardImg
  //                       top
  //                       width="100%"
  //                       height="200px"
  //                       src={n.image_url}
  //                       alt={n.title}
  //                     />
  //                   )}
  //                   <CardTitle>
  //                     <a
  //                       href={n.link}
  //                       target="_blank"
  //                       rel="noopener noreferrer"
  //                       style={{ textDecoration: "none" }}
  //                     >
  //                       {n.title}
  //                     </a>
  //                   </CardTitle>
  //                   <CardText className="module line-clamp">
  //                     {n.description}
  //                   </CardText>
  //                   <CardSubtitle>{n.formatted_date}</CardSubtitle>
  //                   <a
  //                     href={n.link}
  //                     target="_blank"
  //                     rel="noopener noreferrer"
  //                     style={{ color: "black" }}
  //                     className="d-flex align-items-end"
  //                   >
  //                     <Button
  //                       outline
  //                       color="danger"
  //                       size="sm"
  //                       className="align-self-end"
  //                     >
  //                       {" "}
  //                       Know More{" "}
  //                     </Button>
  //                   </a>
  //                 </Card>
  //               </Col>
  //             </>
  //           ))}
  //         </div>
  //       </div>
  //     ));
  //   };

  return (
    <>
      {/* {renderCardItems()} */}
      {news.map((n) => (
        <MediaCard
          photo={n.image_url}
          headline={n.title}
          bodycopy={n.description}
          url={n.link}
          date={n.formatted_date}
        />
      ))}
    </>
  );
};

export default Component;
