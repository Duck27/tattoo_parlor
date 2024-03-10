import React from "react";

const Modal = ({ children, activeModal, setActiveModal }) => {
  return (
    <div
      className={`top-0 left-0 w-screen h-screen bg-black/50 fixed  flex items-cemter justify-center transition-opacity duration-500 ${
        activeModal ? "opacity-100 z-50" : "opacity-0 -z-50"
      }`}
      onClick={() => {
        setActiveModal(false);
      }}
    >
      <div
        className={`m-20 rounded-2xl bg-white w-3/4 lg:w-1/2  h-3/4 transition-opacity duration-500 ${
          activeModal ? "opacity-100" : "opacity-0"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
