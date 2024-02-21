// IntroductionSection.js
import React from "react";
import "./Introduction.css";

const IntroductionSection = () => (
  <div className="introduction-section">
    <div className="banner">
      {/* Use a video or dynamic content for the banner */}
      <video src={require("../assets/video.mp4")} autoPlay loop muted />
      <div className="banner-text">
        <h3>Dharura - Your Disaster Response Platform</h3>
      </div>
    </div>
    <p>
      {/* Display live data feeds or user testimonials */}
      Discover real-time incident updates, customizable dashboards, and seamless
      communication to empower your response efforts.
    </p>
    <button>Get Involved</button>
  </div>
);

export default IntroductionSection;
