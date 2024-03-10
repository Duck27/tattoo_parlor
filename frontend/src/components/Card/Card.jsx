import React from "react";
import BlinkButton from "./../UI/BlinkButton/BlinkButton";

const Card = ({  onClick, img }) => {
  return (
    <div className="">
      <div>
        <img src={img} alt={"Фотография мастера"}></img>
        <div className="flex justify-center my-5">
          <BlinkButton onClick={onClick}>Подробнее</BlinkButton>
        </div>
      </div>
    </div>
  );
};

export default Card;
