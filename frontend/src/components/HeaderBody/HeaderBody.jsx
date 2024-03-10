import React from "react";
import pathToBackgroundImages from "../../data/pathToBackgroundImages.js";
import RoundScroller from "../RoundScroller/RoundScroller.jsx";
import BlinkButton from "../UI/blinkButton/blinkButton";
import Navbar from "../Navbar/Navbar";

const HeaderBody = ({ setBackgroundIndex }) => {
  return (
    <div className="absolute inset-x-0 inset-y-0 flex flex-col w-full h-full">
      <header className="flex h-[3rem] text-white">
        <Navbar />
      </header>
      <div className="grow flex">
        <div className="my-auto ml-4 mr-10 md:ml-20">
          <BlinkButton className="relative" йцу="qwe">
            <a
              href="#contact"
              className="flex items-center justify-center w-full h-full"
            >
              Подписаться
            </a>
          </BlinkButton>
        </div>
        <div className="m-auto mr-36">
          <RoundScroller
            backImageArray={pathToBackgroundImages}
            changeBackImage={setBackgroundIndex}
          />
        </div>
      </div>
    </div>
  );
};

export default HeaderBody;
