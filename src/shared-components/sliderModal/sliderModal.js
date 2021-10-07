import React from "react";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import JoshCarousel from "../../components/home/carousel";
import IndustryMediaCard from "../indusrtyMediaCard/industryMediaCard";
import businessLogo from "../../assets/images/domainExpertise/business.svg";
import domainLogo from "../../assets/images/domainExpertise/Solution.svg";
import impactLogo from "../../assets/images/domainExpertise/Impact.svg";
import TileTags from "../tileTags/tileTags";
import "./sliderModal.css";

const SliderModal = (props) => {
  const { isOpen, toggle, items } = props;
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    adaptiveHeight: true,
    initialSlide: props.projectIndex || 0,
  };
  const flattenItems = items.flat();
  const itemList = flattenItems.map((item) => {
    return (
      <div>
        <img
          src={require(`../../assets/images/revampImages/${item.logo}`)}
          alt="modal img"
          className="modal-img"
        />
        <TileTags tileTags={item.techStack} />

        <h5 className="text-uppercase font-weight-bold">{item.title}</h5>

        {item.description && <p>{item.description}</p>}

        <div className="industry-media-card-wrap">
          {item.business && (
            <IndustryMediaCard
              mediaLogo={businessLogo}
              mediaTitle="Business"
              mediaDesc={item.business}
            />
          )}

          {item.domain && (
            <IndustryMediaCard
              mediaLogo={domainLogo}
              mediaTitle="Solution"
              mediaDesc={item.domain}
            />
          )}
          {item.impact && (
            <IndustryMediaCard
              mediaLogo={impactLogo}
              mediaTitle="Impact"
              mediaDesc={item.impact}
            />
          )}
        </div>
      </div>
    );
  });
  return (
    <Modal isOpen={isOpen} modalClassName="slider-modal" scrollable={true}>
      <ModalHeader toggle={toggle} className="border-0"></ModalHeader>
      <ModalBody className="slider-modal-body d-flex align-items-center flex-column">
        <JoshCarousel items={itemList} settings={settings}></JoshCarousel>
      </ModalBody>
    </Modal>
  );
};

export default SliderModal;
