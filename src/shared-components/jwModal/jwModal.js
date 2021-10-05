import React from "react";
import { Modal, ModalHeader, ModalBody, Button } from "reactstrap";
import TileTags from "../tileTags/tileTags";
import "./jwModal.css";

const JwModal = (props) => {
  const { isOpen, toggle, imgSrc, tileTags, title, description } = props;

  return (
    <Modal isOpen={isOpen} modalClassName="jw-modal" scrollable={true}>
      <ModalHeader toggle={toggle} className="border-0"></ModalHeader>
      <ModalBody className="jw-modal-body d-flex align-items-center justify-content-center flex-column">
        <img
          src={require(`../../assets/images/revampImages/${imgSrc}`)}
          alt="modal img"
        />
        <TileTags tileTags={tileTags} />

        <h5 className="text-uppercase font-weight-bold">{title}</h5>

        <p>{description}</p>
      </ModalBody>
    </Modal>
  );
};

export default JwModal;
