import { Img } from "@chakra-ui/react";
import React from "react";
import { Col, Container, Navbar, Row } from "react-bootstrap";
import "./Footer.css";
import {
  FaHome,
  FaMailBulk,
  FaPhone,
  FaGithub,
  FaLinkedin,
  FaMedium,
} from "react-icons/fa";
import Falcon from "../assets/falcon.png";

function Footer() {
  return (
    <Container fluid className="footer">
      <Row className="footerRow">
        <Col className=" links">
          <Navbar.Brand href="/">
            <Img className="myLogo" src={Falcon} />
          </Navbar.Brand>
          <div className="text">FALCON CHAT</div>
        </Col>
        <Col className="mittel">
          <h6>
            <FaHome
              size={20}
              style={{ display: "inline-block", marginRight: "2rem" }}
            />
            <span>Max Meyer Straße, 12353 Berlin</span>
          </h6>
          <div>
            <h6>
              <FaPhone
                size={20}
                style={{ display: "inline-block", marginRight: "2rem" }}
              />
              <span> +49 176 458 843 26</span>
            </h6>
          </div>
          <div>
            <h6>
              <FaMailBulk
                size={20}
                style={{ display: "inline-block", marginRight: "2rem" }}
              />
              <a href="duran.akyol@yahoo.com">duran.akyol@yahoo.com</a>
            </h6>
          </div>
        </Col>
        <Col className="rechts">
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
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
