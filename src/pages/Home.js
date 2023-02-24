import React from "react";
import Carousel from "../components/Carousel";
import OurTeam from "../components/OurTeam";
import "../assets/styles/Home.css";

const Home = () => {
  return (
    <div className="home">
      <Carousel />
      <OurTeam />
    </div>
  );
};

export default Home;
