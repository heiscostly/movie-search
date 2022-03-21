import React from "react";
import "./styles/heroSection.scss";
import bgImg from "./../asset/bg.png";

const HeroSection = () => {
  return (
    <div
      className="hero__container"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="hero__content">
        <h1>
          Watch <br /> something
          <br /> incredible.
        </h1>
      </div>
    </div>
  );
};

export default HeroSection;
