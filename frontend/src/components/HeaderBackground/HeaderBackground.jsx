import React from "react";
import pathToBackgroundImages from "../../data/pathToBackgroundImages";

const HeaderBackground = ({ backgroundIndex }) => {
  return (
    <div className="logo">
      {pathToBackgroundImages.map((_, index) => (
        <img
          src={pathToBackgroundImages[index]}
          key={index}
          style={{ opacity: index === backgroundIndex ? 1 : 0 }}
          className="logo-image"
        ></img>
      ))}
    </div>
  );
};

export default HeaderBackground;
