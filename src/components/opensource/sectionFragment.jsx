import React, { useState, useEffect, useCallback } from "react";
import { Row, Col } from "reactstrap";
import JoshCarousel from "../home/carousel";
import ImageCarousel from "./imageCarousel";
import Media from "react-media";
import { API_BASE_URL } from "../../globalConstants";
import VideoCarousel from "./videoCarousel";

const SectionFragment = ({
  sectionHeading,
  textInfo,
  index,
  sectionId,
  carouselType,
}) => {
  const [sectionData, setSectionData] = useState([]);
  let alignmentRight = index % 2 === 0;

  // helper function to fetch the data for sepecific section from API
  const fetchSectionData = useCallback(() => {
    return fetch(`${API_BASE_URL}${sectionId}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }).then((response) => response.json());
  }, [sectionId]);

  // helper function to get array of carousel items.
  const getCarouselItems = () => {
    if (sectionData.length !== 0) {
      return sectionData[Object.keys(sectionData)[0]].map((data) =>
        // based on the carousel type for specific section return image or video carousel
        carouselType === "image" ? (
          <ImageCarousel {...data} />
        ) : (
          <VideoCarousel {...data} />
        )
      );
    }
    return [];
  };

  // useEffect for fetching and locally storing the data
  useEffect(() => {
    const promise = fetchSectionData();
    promise
      .then((responseData) => {
        setSectionData(responseData);
      })
      .catch((error) => console.log(error));
  }, [fetchSectionData, sectionId]);

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    dotsClass: "slick-dots bottom-100",
  };

  // get carousel section
  const SectionCarousel = (
    <JoshCarousel items={getCarouselItems()} settings={carouselSettings} />
  );

  // get section textual context ie. heading,description & button
  const SectionDescription = (
    <>
      <h4 className="section-heading">{sectionHeading}</h4>
      <p className="txt-info">{textInfo}</p>
      <button className="btn btn-gray">VIEW ALL</button>
    </>
  );

  const WebView = (
    <>
      <Row className="justify-content-around m-auto d-flex">
        {alignmentRight === true && (
          <>
            <Col md={6}>{SectionCarousel}</Col>
            <Col md={5}>{SectionDescription}</Col>
          </>
        )}
        {alignmentRight === false && (
          <>
            <Col md={5} className="text-right">
              {SectionDescription}
            </Col>
            <Col md={6}>{SectionCarousel}</Col>
          </>
        )}
      </Row>
    </>
  );

  const MobileView = (
    <>
      <Row className="justify-content-between m-auto d-flex">
        <Col>
          <h4 className="section-heading">{sectionHeading}</h4>
          <JoshCarousel
            items={getCarouselItems()}
            settings={carouselSettings}
          />
          <p className="txt-info">{textInfo}</p>
          <div className="btn-wrap">
            <button className="btn btn-gray">VIEW ALL</button>
          </div>
        </Col>
      </Row>
    </>
  );

  return (
    <section
      className={`section-content ${
        alignmentRight === true ? "section-even" : "section-odd"
      }`}
    >
      <div className="container">
        <Media query="(max-width: 500px)">
          {(matches) => (matches ? MobileView : WebView)}
        </Media>
      </div>
    </section>
  );
};

export default React.memo(SectionFragment);
