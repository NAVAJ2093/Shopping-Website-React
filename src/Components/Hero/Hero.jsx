import React from "react";
import "./Hero.css";
import arrow_icon from "../Assets/arrow.png";
import bg24_image from "../Assets/bg24_image.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h1 className="hero-title">
          New <span className="hero-title-2">arrivals are here</span>
        </h1>
        <h4 className="hero-description">
          The new arrivals have, well, newly arrived. Check out the latest
          options from our summer small-batch release while they're still in
          stock.
        </h4>
        <div className="hero-latest-btn">
          <div> Shop New Arrivals </div>
          <img src={arrow_icon} alt="" />
        </div>
      </div>
      <div className="hero-right">
        <img src={bg24_image} alt="" />
      </div>
    </div>
  );
};

export default Hero;
