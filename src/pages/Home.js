import React from "react";
import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";
import OurTeam from "../components/OurTeam";
import Footer from "../components/Footer";
import "./Home.css";
const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Carousel />
      <OurTeam />
      <Footer />
    </div>
  );
};

export default Home;
