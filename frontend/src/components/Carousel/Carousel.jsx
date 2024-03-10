import "/node_modules/slick-carousel/slick/slick.css";
import "/node_modules/slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import Slider from "react-slick";
import pathToCarouselImages from "../../data/pathToCarouselImages.js";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div>
        <Slider {...settings}>
          {pathToCarouselImages.map((el, ind) => (
            <div className="!flex justify-center" key={ind}>
              <img
                className="h-[400px] md:h-[500px] lg:h-[700px]"
                src={pathToCarouselImages[ind]}
                alt={"Изображение работы в салоне"}
              ></img>
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}
