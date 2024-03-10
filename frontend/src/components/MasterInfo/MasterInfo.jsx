import React from "react";

const MasterInfo = ({name, age, info}) => {
  return (
    <div>
      <div className="">Имя: {name}</div>
      <div className="">Возраст: {age}</div>
      <div className="">{info}</div>
    </div>
  );
};

export default MasterInfo;
