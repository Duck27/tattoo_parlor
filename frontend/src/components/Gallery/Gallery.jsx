import React from "react";
import Carousel from "../Carousel/Carousel.jsx";

const Gallery = () => {
  return (
    <div
      id="gallery"
      className="flex justify-center items-center mt-10 relative"
    >
      <div className="w-3/4 lg:w-2/3 h-1/2">
        <Carousel />
      </div>
    </div>
  );
};

export default Gallery;
