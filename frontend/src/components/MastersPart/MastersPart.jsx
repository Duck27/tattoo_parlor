import React from "react";
import Card from "../Card/Card.jsx";
import mastersInfo from "../../data/mastersInfo.js";

const MastersPart = ({ activateMasterModal }) => {
  return (
    <>
      <div className="mt-8 text-center text-3xl" id="masters">
        <span className="side_lines relative">Наши мастера</span>
      </div>
      <div className="flex justify-around my-10 flex-wrap">
        {mastersInfo.map((masterInfo, index) => {
          return (
            <Card
              onClick={() => activateMasterModal(index)}
              img={`/imgs/masters/m${index + 1}.png`}
              key={masterInfo.id}
            />
          );
        })}
      </div>
    </>
  );
};

export default MastersPart;
