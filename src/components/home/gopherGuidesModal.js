import React, {useState} from "react";

import {Modal, ModalHeader, ModalBody } from "reactstrap";

const GopherGuides = (props) => {
  const [showModal, setShowModal] = useState(false)

  const toggle = () => setShowModal((prevValue) => !prevValue)

  return(
    <div className={props.containerClassName}>
      <img src={props.gopherGuideSticker} alt="GopherGuides" onClick={toggle}/>
      <Modal isOpen={showModal} toggle={toggle} className="modal-lg mx-auto modal-dialog-centered">
        <ModalHeader toggle={toggle} className="gopher-guide">Gopher Guides </ModalHeader>
        <ModalBody className="text-center">
          <img src={props.gopherGuideImg} alt="Gopher Guides" class="img-container img-fluid"/>
        </ModalBody>
      </Modal>
    </div>
  )
}

export default GopherGuides

