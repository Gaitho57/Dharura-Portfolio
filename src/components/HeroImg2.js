import React, { Component } from "react";
import heroImage from "../assets/7.png";
import "./HeroImg2Style.css";

class HeroImg2 extends Component {
  render() {
    return (
      <div className="hero-img">
        <div className="hero-tint" />
        <div className="hero-content">
          <h1>{this.props.heading}</h1>
          <p>{this.props.text}</p>
        </div>
        <img src={heroImage} alt="Hero" />
      </div>
    );
  }
}

export default HeroImg2;
