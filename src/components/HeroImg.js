import "./HeroImgStyles.css";
import React from "react";
import IntroImg from "../assets/2.png";

const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="intro-img" src={IntroImg} alt="Dharura Introduction" />
      </div>
      <div className="content">
        <h1>Discover Dharura</h1>
        <p>
          Dharura is your go-to solution for emergency response and community
          engagement. Stay informed about local events, connect with neighbors,
          and contribute to a safer community.
        </p>
      </div>
    </div>
  );
};

export default HeroImg;
