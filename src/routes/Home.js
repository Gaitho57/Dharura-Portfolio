import React from "react";
import Navbar from "../components/NavBar";
import HeroImg from "../components/HeroImg";
import Footer from "../components/Footer";
import GetStarted from "../components/GetStarted";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroImg />
      <GetStarted />
      <Footer />
    </div>
  );
};

export default Home;
