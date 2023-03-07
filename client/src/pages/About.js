import React from "react";
import "../assets/styles/About.css";
import MyCard from "../components/MyCard";

const About = () => {
  return (
    <div className="about">
      <div className="paragraph">
        Falcon ist ein Vogel. Vogel bringt immer eine Nachricht. Deswegen hat
        mein Page dieser Name genommen.
      </div>
      <MyCard />
    </div>
  );
};

export default About;
