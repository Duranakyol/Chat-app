import { Img } from "@chakra-ui/react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {
  BsHouseDoorFill,
  BsFillChatTextFill,
  BsFillTelephoneFill,
  BsFileTextFill,
} from "react-icons/bs";
import { FcGallery } from "react-icons/fc";
import "../assets/styles/Navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Falcon from "../assets/img/falcon.png";

function myNavbar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/">
          <Img className="myLogo" src={Falcon} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className=" myNavbar me-auto my-2 my-lg-0"
            style={{ maxHeight: "400px" }}
            navbarScroll
          >
            <Nav.Link href="/">
              <BsHouseDoorFill
                style={{
                  display: "inline-block",
                  marginBottom: "3px",
                  marginRight: "5px",
                }}
              />
              Home
            </Nav.Link>
            <Nav.Link href="/chatpage">
              <BsFillChatTextFill
                style={{
                  display: "inline-block",
                  marginBottom: "3px",
                  marginRight: "5px",
                }}
              />
              ChatPage
            </Nav.Link>

            <Nav.Link href="/about">
              <BsFileTextFill
                style={{
                  display: "inline-block",
                  marginBottom: "3px",
                  marginRight: "5px",
                }}
              />
              About
            </Nav.Link>
            <Nav.Link href="/contact">
              <BsFillTelephoneFill
                style={{
                  display: "inline-block",
                  marginBottom: "3px",
                  marginRight: "5px",
                }}
              />
              Contact
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
            <Nav.Link href="/gallery">
              <FcGallery className="galleryIcon" />
            </Nav.Link>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default myNavbar;
