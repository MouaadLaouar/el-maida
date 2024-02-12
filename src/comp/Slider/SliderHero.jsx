import React from "react";
import "./SliderHero.scss";

import Slide1 from "../../assets/Slider/Slide1.jpg";
import Slide2 from "../../assets/Slider/Slide2.jpg";
import Slide3 from "../../assets/Slider/Slide3.png";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SliderHero() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const Pic = [1, 2, 3];

  return (
    <div className="SliderHero">
      <Slider {...settings}>
        <div className="Slide1 Slide">1</div>
        <div className="Slide2 Slide">2</div>
        <div className="Slide3 Slide">3</div>
      </Slider>
    </div>
  );
}
