import React from "react";

const MasterModal = ({ masterInfo }) => {
  return (
    <div className="p-7 flex flex-col  h-full w-full justify-center text-xl overflow-auto ">
      <div className="container mx-auto">
        <div className="h-1 bg-black"></div>
      </div>
      <div className="mt-4">
        <b>Имя:</b> {masterInfo.name}
      </div>
      <div className="mt-4">
        <b>Возраст:</b> {masterInfo.age}
      </div>
      <div className="mt-4">{masterInfo.info}</div>
      <div className="mt-4">
        <b>Контактная информация:</b> {masterInfo.contact}
      </div>
      <div className="container mx-auto mt-4">
        <div className="h-1 bg-black"></div>
      </div>
    </div>
  );
};

export default MasterModal;
