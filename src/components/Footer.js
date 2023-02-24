import { Img } from "@chakra-ui/react";
import React from "react";
import { Navbar } from "react-bootstrap";
import "../assets/styles/Footer.css";
import {
  FaHome,
  FaMailBulk,
  FaPhone,
  FaGithub,
  FaLinkedin,
  FaMedium,
} from "react-icons/fa";
import Falcon from "../assets/img/falcon.png";

function Footer() {
  return (
    <div className="footerRow">
      <div className="links">
        <Navbar.Brand href="/">
          <Img className="myLogo" src={Falcon} />
        </Navbar.Brand>
        <div className="text">FALCON CHAT</div>
      </div>
      <div className="mittel">
        <h6>
          <FaHome
            size={20}
            style={{ display: "inline-block", marginRight: "2rem" }}
          />
          Max Meyer Straße, 12353/Berlin
        </h6>

        <h6>
          <FaPhone
            size={20}
            style={{ display: "inline-block", marginRight: "2rem" }}
          />
          +4917645884325
        </h6>

        <h6>
          <FaMailBulk
            size={20}
            style={{ display: "inline-block", marginRight: "2rem" }}
          />
          <a href="duran.akyol@yahoo.com">duran.akyol@yahoo.com</a>
        </h6>
      </div>
      <div className="rechts">
        <h5>Sie können uns einfach erreichen.</h5>
        <h6>Alle Rechte vorbehalten.</h6>
        <div className="social-media">
          <a href="https://github.com/Duranakyol" target="blank">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/duranakyol/">
            <FaLinkedin />
          </a>
          <a href="https://medium.com/@duranakyol71">
            <FaMedium />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
