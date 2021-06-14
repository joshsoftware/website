import React from "react";
import Article from "../../shared-components/article/article";
import MediaItem from "../../shared-components/media/media";
import NewsBanner from "../../shared-components/newsBanner/newsBanner";

const Talks = (props) => {
  const { data } = props;

  const { dataList } = props;

  // const VideoFrame = ({ url, video }) => (
  //   <div>
  //     <iframe
  //       src={url}
  //       width="100%"
  //       height="300px"
  //       title={video.topic}
  //       frameBorder="0"
  //       allowFullScreen
  //     />
  //     <div>
  //       <a
  //         href={`https://www.youtube.com/watch?v=${video.videoId}`}
  //         target="_blank"
  //         rel="noopener noreferrer"
  //         style={{ color: "black" }}
  //       >
  //         {video.topic}
  //       </a>
  //       <br />
  //       <b>At {video.event}</b>
  //       <br />
  //       By {video.speaker} ({video.date})
  //     </div>
  //   </div>
  // );

  return (
    <div className="section-content">
      {/* <br />
      <Row className="col-lg-12 col-sm-12 padding-row">
        {data.map((video) => {
          const url = video.link
            ? video.link
            : `https://www.youtube.com/embed/${video.videoId}`;
          return (
            (
              <Media query="(max-width: 500px)" key={video.videoId}>
                {(matches) =>
                  matches ? (
                    <Col sm="12" className="pt-2 pb-2">
                      <VideoFrame url={url} video={video} />
                    </Col>
                  ) : (
                    <Col lg="4" md="4" className="pt-2 pb-2">
                      <VideoFrame url={url} video={video} />
                    </Col>
                  )
                }
              </Media>
            )
          );
        })}
      </Row> */}

      <NewsBanner bannerTitle="talks" />

      <div className="media-wrapper justify-content-center">
        {data.map((video) => {
          const url = video.link
            ? video.link
            : `https://www.youtube.com/embed/${video.videoId}`;
          return (
            <MediaItem
              url={url}
              topic={video.topic}
              speaker={video.speaker}
              date={video.date}
              event={video.event}
              videoId={video.videoId}
            />
          );
        })}
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

Talks.defaultProps = {
  data: [
    {
      event: "Gophercon UK 2019",
      date: "2 October 2019",
      topic: "Impossible Go",
      speaker: "Gautam Rege",
      videoId: "jZ1ZsULRyE0",
    },
    {
      event: "RCI 2019",
      date: "19 January 2019",
      topic: "Keynote",
      speaker: "Gautam Rege",
      videoId: "NKdEx5ZPsFU",
    },
    {
      event: "RubyConf Philippines 2018",
      date: "2 April 2018",
      topic: "Standup Comedy and Ruby Programming",
      speaker: "Gautam Rege",
      videoId: "N98cnuW0bm0",
    },
    {
      date: "29 Jan 2017",
      event: "GCRC",
      topic: "Dark Side of Ruby",
      speaker: "Gautam Rege",
      videoId: "-oorcRJ2Kfg",
    },
    {
      event: "RubyConf Philippines 2017",
      date: "21 June 2017",
      topic: "GoFFIng Around with Ruby",
      speaker: "Gautam Rege",
      videoId: "_tF_brVZwUE",
    },
    {
      date: "26 April 2016",
      event: "RCI  2016",
      topic: "To fear or not to fear: That is the question ",
      speaker: "Shweta and Anuja ware",
      videoId: "-NT8muf-N7g",
    },
    {
      event: "Deccan rubyconf 2016",
      date: "31 August 2016",
      topic: "Lost while developing API's in Rails?",
      speaker: "Pramod SHinde",
      videoId: "QRz3TjH-xCg",
    },
    {
      event: "Agile india 2016",
      date: "23 April 2017",
      topic: "Rewarding Open Sourse with $$$",
      speaker: "Gautam Rege",
      videoId: "8nU08YDOb58",
    },
    {
      event: "XP Conference India 2016",
      date: "26 September 2016",
      topic: "Gamifying Open Source",
      speaker: "Gautam Rege",
      videoId: "o3fZys_POno",
    },
    {
      event: "Web Summit 2015",
      date: "4 Dec 2015",
      topic: "Gopher it",
      speaker: "Gautam Rege",
      videoId: "OtfyLtsrmCA",
    },
    {
      date: "2 Nov 2015",
      event: "",
      topic: "KimayaNICU on CNBC Awaaz Enterpreneur",
      speaker: "Gautam Rege",
      videoId: "6FbmpdJrZxc",
    },
    {
      event: "Deccan Rubyconf 2015",
      date: "25 August 2015",
      topic: "Panel Discussion",
      speaker: "Gautam Rege, Satish Talim",
      videoId: "xfWg5IiBSQI",
    },
    {
      event: "Tech Summit",
      date: "8 Dec 2015",
      topic: "Affordable Smart Housing - the new revolution",
      speaker: "Gautam Rege",
      videoId: "MQNoXkBUL1A",
    },
    {
      event: "Agile India 2015",
      date: "April 17 2015",
      topic: "Don't Test Your Code",
      speaker: "Gautam Rege",
      videoId: "YPzyra_Sx1Q",
    },
    {
      event: "Rubyconf Portugal 2015",
      date: "4 Sept 2015",
      topic: "Why Ruby must Go",
      speaker: "Gautam Rege",
      videoId: "e_7qhUMJJ8k",
    },
    {
      event: "Red Dot Ruby 2014",
      date: "21 July 2014",
      topic: "The Dark Side of Ruby",
      speaker: "Gautam Rege",
      videoId: "_KgcQMXIqM4",
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
  ],

  dataList: [
    {
      articleTitle: "Publications",
      articleDesc:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore",
      articleImg: "talks.jpeg",
    },
    {
      articleTitle: "Media Coverage",
      articleDesc:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore",
      articleImg: "publication.jpeg",
    },
    {
      articleTitle: "Our White papers",
      articleDesc:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore",
      articleImg: "our_white_paper.jpeg",
    },
  ],
};

export default Talks;
