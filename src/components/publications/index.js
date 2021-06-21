import React from "react";
import Media from "react-media";
import {
  S3_IMAGS_PATH,
  FACEBOOK_SHARE_URL,
  TWITTER_SHARE_URL,
  LINKED_IN_SHARE_URL,
} from "../../globalConstants.js";
import NewsBanner from "../../shared-components/newsBanner/newsBanner.js";
import ArticleContent from "../../shared-components/articleContent/articleContent.js";
import Article from "../../shared-components/article/article.js";
import { Row, Col, Button, Card, CardBody } from "reactstrap";

const Header = () => (
  <Media query="(max-width: 500px)">
    {(matches) =>
      matches ? (
        <Row className="justify-content-center mt-5 pt-2">
          <Col>
            <h2 align="center" style={{ color: "black" }}>
              <b>OUR PUBLICATIONS</b>
            </h2>
          </Col>
        </Row>
      ) : (
        <Row className="justify-content-center pb-4 pt-4">
          <Col>
            <h2 align="center" style={{ color: "black" }}>
              <b>OUR PUBLICATIONS</b>
            </h2>
          </Col>
        </Row>
      )
    }
  </Media>
);

const Publications = ({ books, dataList, articleList }) => {
  return (
    // <div className='section-content gray-back'>
    //   <Header />
    //   {
    //     books.map((book, i) => (
    //       <div className="container pb-3" key={i}>
    //         <Card style={{border: '2px solid lightgrey'}}>
    //           <CardBody>
    //             <Row className="justify-content-md-center">
    //               <Col md="3" lg="3" sm="6">
    //                 <img src={book.imageUrl} alt={book.title} className="img-fluid img-desktop" />
    //               </Col>
    //               <Col md="6" lg="6" sm="6">
    //                 <a href={book.link} target='_blank' rel="noopener noreferrer" style={{color: 'black'}}>
    //                   <h3 color="black">{book.title}</h3>
    //                 </a>
    //                 <p>{book.description}</p>
    //                 <a href={book.link} target='_blank' rel="noopener noreferrer" style={{color: 'blue', fontSize: 'small'}}>
    //                    <Button outline color="secondary">Continue reading</Button>{' '}
    //                 </a>
    //               </Col>
    //               <Col md="3" lg="3" sm="6">
    //                 {shareCard({book})}
    //               </Col>
    //             </Row>
    //           </CardBody>
    //         </Card>
    //       </div>
    //     ))
    //   }
    // </div>
    <div className="section-content">
      <NewsBanner bannerTitle="Publications" className="publication-banner" />
      <div className="container">
        <div className="article-content-wrapper">
          {articleList.map((articleListItems) => (
            <ArticleContent
              className="publication-content-wrapper"
              cardImg={articleListItems.cardImg}
              cardTitle={articleListItems.cardTitle}
              cardDesc={articleListItems.cardDesc}
              cardBtnText={articleListItems.cardBtnText}
              bookTitle={articleListItems.bookTitle}
              bookPrice={articleListItems.bookPrice}
            />
          ))}
        </div>
      </div>

      <div className="article-list d-flex">
        {dataList.map((dataListItems) => (
          <Article
            articleDesc={dataListItems.articleDesc}
            articleImg={dataListItems.articleImg}
            articleTitle={dataListItems.articleTitle}
          />
        ))}
      </div>
    </div>
  );
};

const shareCard = ({ book }) => (
  <div className="book-share-card justify-content-center">
    <a
      href={book.link}
      target="_blank"
      rel="noopener noreferrer"
      style={{ color: "black" }}
    >
      <h5>{book.title}</h5>
    </a>
    <br />
    <Row style={{ color: "#ec6611" }}>
      <Col md="6" lg="6" sm="6" xs="6">
        Book
      </Col>
      <Col md="6" lg="6" sm="6" xs="6">
        <svg
          id="i-book"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          width="32"
          height="30"
          fill="none"
          stroke="currentcolor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        >
          <path d="M16 7 C16 7 9 1 2 6 L2 28 C9 23 16 28 16 28 16 28 23 23 30 28 L30 6 C23 1 16 7 16 7 Z M16 7 L16 28" />
        </svg>
      </Col>
    </Row>
    <Row style={{ color: "blue" }}>
      <Col>
        <p>
          <b>{book.price}</b>
        </p>
      </Col>
    </Row>
    <Row>
      <Button
        color="danger"
        size="lg"
        block
        style={{ width: "100%", backgroundColor: "#CF4338" }}
      >
        <a
          href={book.link}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "white" }}
        >
          Buy Now
        </a>
      </Button>
    </Row>
    <br />
    <Row className="text-center">
      <Col md="4" lg="4" sm="2" xs="4">
        <a
          href={`${FACEBOOK_SHARE_URL}${book.link}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 43.882 43.705"
            width="32"
            height="30"
          >
            <path
              d="M-147.462,241.187h1a15.748,15.748,0,0,1,4.548.594,19.41,19.41,0,0,1,4.475,1.692,17.844,17.844,0,0,1,3.726,2.518c.708.635,1.44,1.249,2.1,1.932a19.169,19.169,0,0,1,3.1,4.3,21.344,21.344,0,0,1,1.806,4.328,28.883,28.883,0,0,1,.7,3.535,15.67,15.67,0,0,1,.138,3.018,25.364,25.364,0,0,1-.382,3.6,19.813,19.813,0,0,1-2.152,5.964,18.012,18.012,0,0,1-2.571,3.706c-.476.492-.871,1.062-1.367,1.521a23.724,23.724,0,0,1-4.881,3.523,21.512,21.512,0,0,1-5.626,2.062,13.528,13.528,0,0,1-3.511.407c-.655-.028-1.314,0-1.973,0a20.3,20.3,0,0,1-6.618-1.371,19.313,19.313,0,0,1-4.243-2.213,16.956,16.956,0,0,1-2.49-2c-.492-.5-1-.988-1.493-1.493a18.816,18.816,0,0,1-2.742-3.808,17.774,17.774,0,0,1-1.627-3.625,19.119,19.119,0,0,1-1.029-5.264c0-.671-.2-1.347-.151-2.034a24.705,24.705,0,0,1,1.627-7.652,19.738,19.738,0,0,1,1.961-3.661c.533-.777,1.147-1.5,1.737-2.237a12.287,12.287,0,0,1,1.106-1.273,23.7,23.7,0,0,1,4.7-3.47,21.446,21.446,0,0,1,4.068-1.737,30.912,30.912,0,0,1,3.088-.7A23.943,23.943,0,0,1-147.462,241.187Zm1.676,35.147V265.428a22.328,22.328,0,0,1,.09-3.58h2.128a6.122,6.122,0,0,0,2.176-.13,8.68,8.68,0,0,1,.028-1.875,3.535,3.535,0,0,0,.057-1.944h-4.475c0-1.22-.041-2.363.024-3.5a1.4,1.4,0,0,1,.513-.968,3.144,3.144,0,0,1,2.034-.529,17.576,17.576,0,0,1,1.908.37c.122-.574.244-1.045.317-1.53.106-.712.187-1.428.252-2.144a.545.545,0,0,0-.11-.438.545.545,0,0,0-.4-.2c-.753-.09-1.505-.2-2.258-.236-1-.041-2,0-3,0a4.621,4.621,0,0,0-4.292,3.34,11.465,11.465,0,0,0-.3,2.477c-.049,1.1,0,2.209,0,3.425h-2.758c0,1.363-.053,2.612,0,3.824.972.216,1.867-.1,2.738.22V276.35Z"
              transform="translate(169.227 -240.685)"
              className="svg-fill"
            ></path>
          </svg>
        </a>
      </Col>
      <Col md="4" lg="4" sm="2" xs="4">
        <a
          href={`${TWITTER_SHARE_URL}${book.link}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 43.829 43.837"
            width="32"
            height="30"
          >
            <path
              d="M-26.208,283.384a20.775,20.775,0,0,1-14.067-6.395,21.324,21.324,0,0,1-6.195-15.209,21.324,21.324,0,0,1,6.451-15.1,20.681,20.681,0,0,1,15.3-6.122,20.649,20.649,0,0,1,15.214,6.737,20.7,20.7,0,0,1,5.85,15.133,20.983,20.983,0,0,1-6.618,14.99C-14.09,281.131-19.541,283.384-26.208,283.384Zm-9.031-30.575a5.927,5.927,0,0,0-.687,2.441,4.621,4.621,0,0,0,.57,2.469,15.922,15.922,0,0,0,1.505,1.92,3.139,3.139,0,0,1-2.034-.431,4.548,4.548,0,0,0,.753,2.754,5.814,5.814,0,0,0,3.149,2.339c-.61.484-1.326.041-1.908.329a2.673,2.673,0,0,0,.842,1.607,4.983,4.983,0,0,0,3.738,1.749A3.526,3.526,0,0,1-31,269.208a10.507,10.507,0,0,1-5.768,1.1c.407.281.858.472,1.269.7a14.672,14.672,0,0,0,5.752,1.566,13.5,13.5,0,0,0,3.694-.309,13.94,13.94,0,0,0,5.7-2.331,14.049,14.049,0,0,0,2.876-2.652A15.865,15.865,0,0,0-14.96,262.8a13.4,13.4,0,0,0,.927-4.475v-1.163a.773.773,0,0,1,.207-.46c.6-.578,1.22-1.127,1.831-1.7a3.485,3.485,0,0,0,.346-.488c-.932-.057-1.652.594-2.542.407,1.7-1.721,1.826-1.9,1.814-2.563l-2.848,1.066a8.542,8.542,0,0,1-.875-.59,4.674,4.674,0,0,0-4-1.041,5.089,5.089,0,0,0-4.349,5.2,3.112,3.112,0,0,1-.085,1.273A15.222,15.222,0,0,1-35.239,252.81Z"
              transform="translate(46.971 -240.047)"
              className="svg-fill"
            ></path>
          </svg>
        </a>
      </Col>
      <Col md="4" lg="4" sm="2" xs="4">
        <a
          href={`${LINKED_IN_SHARE_URL}${book.link}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 43.91 43.795"
            width="32"
            height="30"
          >
            <path
              d="M100.4,240.59a21.01,21.01,0,0,1,10.17,2.677,24.812,24.812,0,0,1,3.881,2.791,19.933,19.933,0,0,1,3.454,3.909,17.549,17.549,0,0,1,2.616,5.4,27.754,27.754,0,0,1,.871,3.588,19.238,19.238,0,0,1,.207,4.353,22.422,22.422,0,0,1-2.892,9.393,21.3,21.3,0,0,1-9.645,8.775,20.705,20.705,0,0,1-5.65,1.672c-.651.081-1.294.122-1.94.15-.236,0-.468.073-.7.085h-1.22c-.2,0-.407-.09-.606-.09a17.752,17.752,0,0,1-5.288-.9,21.222,21.222,0,0,1-11.707-9.161,22.755,22.755,0,0,1-1.806-3.661,25.434,25.434,0,0,1-.98-3.38,15.2,15.2,0,0,1-.26-1.924c-.065-.553-.151-1.111-.171-1.668a23.57,23.57,0,0,1,.321-3.966,19.864,19.864,0,0,1,1.009-4,20.583,20.583,0,0,1,2.583-4.926,14.8,14.8,0,0,1,1.749-2.123,24.1,24.1,0,0,1,4.031-3.494,20.576,20.576,0,0,1,5.781-2.624,30.721,30.721,0,0,1,3.535-.712C98.573,240.635,99.395,240.647,100.4,240.59Zm2.168,32.1v-7.867a2.953,2.953,0,0,1,1.123-2.494,2.27,2.27,0,0,1,3.734,1.021,14.068,14.068,0,0,1,.329,2.079c.045,2.18,0,4.361,0,6.545,0,.224.037.452.057.667a18.2,18.2,0,0,0,4.422-.1c0-2.8-.02-5.61,0-8.417a7.257,7.257,0,0,0-.578-3.1,4.658,4.658,0,0,0-2.612-2.518,6.741,6.741,0,0,0-2.534-.342,4.194,4.194,0,0,0-2.953,1.22c-.309.289-.586.61-1.017,1.066v-1.888h-4.5c.118,1.627.045,3.189.057,4.759s0,3.108,0,4.662-.407,3.108-.094,4.682Zm-12-.13a19.974,19.974,0,0,0,4.589.041c.138-1.436.085-13.383-.065-14.018a20.226,20.226,0,0,0-4.524.1Zm2.368-16.174a2.091,2.091,0,0,0,1.53-.346,2.389,2.389,0,0,0,.561-3.535,2.7,2.7,0,0,0-3.136-.712,2.331,2.331,0,0,0-1.318,3.214,2.233,2.233,0,0,0,2.38,1.379Z"
              transform="translate(-78.23 -240.09)"
              className="svg-fill"
            ></path>
          </svg>
        </a>
      </Col>
    </Row>
  </div>
);

Publications.defaultProps = {
  books: [
    {
      title: "Ruby and MongoDB Web Development Beginner's Guide",
      link: "https://www.packtpub.com/in/web-development/ruby-and-mongodb-web-development-beginners-guide",
      description:
        "MongoDB is a high-performance, open source, schema-free document-oriented database. Ruby is an object- oriented scripting language. Ruby and MongoDB are an ideal partnership for building scalable web Ruby and MongoDB Web Development Beginner's Guide is a fast-paced, hands-on guide to get started with web application development using Ruby and MongoDB.applications.",
      imageUrl: `${S3_IMAGS_PATH}/Publications/ruby_mongodb.jpg`,
      price: "Rs. 299.00",
    },
    {
      title: "Hands-on Microservices with Go and MongoDB",
      link: "https://www.packtpub.com/web-development/hands-on-microservices-with-go-and-mongodb-video",
      description:
        "How do you build a service-oriented architecture, using microservices system that should not only be scalable with high performance but also handle frequently changing features? This is a real-world problem and it’s important that you empower yourself with the knowledge, tools, and skills today, so that you can build these systems with confidence!",
      imageUrl: `${S3_IMAGS_PATH}/Publications/go_mongodb.png`,
      price: "$10.00",
    },
    {
      title: "Learning Mongoid",
      link: "https://www.packtpub.com/in/big-data-and-business-intelligence/learning-mongoid",
      description:
        "Mongoid helps you to leverage the power of schema-less and efficient document-based design, dynamic queries, and atomic modifier operations. Mongoid eases the work of Ruby developers while they are working on complex frameworks. Starting with why and how you should use Mongoid, this book covers the various components of Mongoid.you will be able to build robust and large-scale web applications with Mongoid and Rails.",
      imageUrl: `${S3_IMAGS_PATH}/Publications/mongodb.jpg`,
      price: "Rs. 299.00",
    },
  ],
  dataList: [
    {
      articleTitle: "Talks",
      articleDesc:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore",
      articleImg: "talks.jpeg",
    },
    {
      articleTitle: "Publications",
      articleDesc:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore",
      articleImg: "publication.jpeg",
    },
    {
      articleTitle: "Media Coverage",
      articleDesc:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore",
      articleImg: "media_coverage.jpeg",
    },
  ],

  articleList: [
    {
      cardImg: "ruby_mongodb.png",
      cardTitle: "Ruby and MongoDB Web Development Beginner’s Guide",
      cardDesc:
        "MongoDB is a high-performance, open source, schema-free document-oriented database. Ruby is an object- oriented scripting language. Ruby and MongoDB are an ideal partnership for building scalable web Ruby and MongoDB Web Development Beginner’s Guide is a fast-paced, hands-on guide to get started with web application development using Ruby and MongoDB.applications.",
      cardBtnText: "Read",
      bookTitle: "Ruby and MongoDb Web Development Beginner's Guide",
      bookPrice: "Rs. 299.00",
    },
    {
      cardImg: "microservives.png",
      cardTitle: "Hands-on Microservices with Go and MongoDB",
      cardDesc:
        "How do you build a service-oriented architecture, using microservices system that should not only be scalable with high performance but also handle frequently changing features? This is a real-world problem and it’s important that you empower yourself with the knowledge, tools, and skills today, so that you can build these systems with confidence!",
      cardBtnText: "Read",
      bookTitle: "Hands on Microdervices with Go and MangoDB",
      bookPrice: "Rs. 10.00",
    },
  ],
};
export default Publications;
