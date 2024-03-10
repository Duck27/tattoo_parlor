import React, { useState } from "react";
import styles from "./RoundScroller.module.css";

const RoundScroller = ({ backImageArray, changeBackImage }) => {
  const [active, setActive] = useState(0);

  return (
    <div className="flex flex-col">
      {backImageArray.map((_, i) => (
        <div
          key={i}
          onClick={() => {
            setActive(i);
            changeBackImage(i);
          }}
          className={
            active === i
              ? `${styles.active} w-[30px] h-[30px] mt-5 border rounded-full transition-colors duration-500`
              : `${styles.nonactive} w-[30px] h-[30px] mt-5 border rounded-full transition-colors duration-500`
          }
        ></div>
      ))}
    </div>
  );
};

export default RoundScroller;
