import React from "react";
import mastersInfo from "../../data/mastersInfo.js";
import Modal from "../UI/Modal/Modal.jsx";
import MasterModal from "../MasterModal/MasterModal.jsx";
import { useState } from "react";
import Gallery from "../Gallery/Gallery.jsx";
import MastersPart from "../MastersPart/MastersPart.jsx";
import StudioInfo from "../StudioInfo/StudioInfo.jsx";

const AboutSection = () => {
  const [activeModal, setActiveModal] = useState(false);
  const [currentMasterInfo, setCurrentMasterInfo] = useState(mastersInfo[0]);

  function activateMasterModal(index) {
    setActiveModal(true);
    setCurrentMasterInfo(mastersInfo[index]);
  }

  return (
    <>
      <Modal activeModal={activeModal} setActiveModal={setActiveModal}>
        <MasterModal masterInfo={currentMasterInfo} />
      </Modal>

      <section id="about" className="flex flex-col  bg-black text-white pt-4">
        <StudioInfo />
        <Gallery />
        <MastersPart activateMasterModal={activateMasterModal} />
      </section>
    </>
  );
};

export default AboutSection;
