import React from "react";
import { useState, useRef, useEffect } from "react";
import "./SliderHero.scss";

import Slide1 from "../../assets/Slider/Slide1.jpg";
import Slide2 from "../../assets/Slider/Slide2.jpg";
import Slide3 from "../../assets/Slider/Slide3.jpg";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SliderHero() {

  let sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  useEffect(() => {
    sliderRef.slickPlay();
  }, []);

  return (
    <div className="SliderHero">
      <Slider ref={(slider) => (sliderRef = slider)} {...settings}>
        <div className="Slide1 Slide">
          <img src={Slide1} alt="" />
        </div>
        <div className="Slide2 Slide">
          <img src={Slide2} alt="" />
        </div>
        <div className="Slide3 Slide">
          <img src={Slide3} alt="" />
        </div>
      </Slider>
    </div>
  );
}
