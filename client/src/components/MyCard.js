import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import "../assets/styles/MyCard.css";
import AboutChat from "../assets/img/aboutChat.png";

function myCard() {
  return (
    <Card className="cardContainer">
      <Card.Img variant="top" src={AboutChat} />
      <Card.Body style={{ textAlign: "center" }}>
        <Card.Title>Sichere Chatten!</Card.Title>
        <Card.Text>
          In unserem Page können Sie sichere und schneller chatten.
        </Card.Text>
        <Link to="/contact">
          <Button variant="primary">Contact</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

export default myCard;
