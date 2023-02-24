import React from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Card1 from "../assets/img/card1.jpg";
import Card2 from "../assets/img/card2.jpg";
import Card3 from "../assets/img/card3.jpg";
import "../assets/styles/OurTeam.css";

const OurTeam = () => {
  return (
    <div className="ourteam">
      <h1>OUR TEAM</h1>
      <GroupExample />
    </div>
  );
};

export default OurTeam;

function GroupExample() {
  return (
    <CardGroup>
      <Card className="myCards">
        <Card.Img variant="top" src={Card1} />
        <Card.Body>
          <Card.Title className="title">Tony Klusterman</Card.Title>
          <Card.Text classname="cardText">
            Er ist ein Web Designer. Seit 4 Jahren ist er in unserem Unternehmen
            Er hat in diesem Projekt gearbeitet.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <div className="text-muted small">Siephi Software Solutions</div>
        </Card.Footer>
      </Card>
      <Card className="myCards">
        <Card.Img variant="top" src={Card2} />
        <Card.Body>
          <Card.Title className="title">Julia Frank</Card.Title>
          <Card.Text classname="cardText">
            Sie ist ein Frontend Developer. Seit 5 Jahren ist sie in unserem
            Unternehmen. Sie hat in diesem Projekt gearbeitet.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <div className="text-muted small">Siephi Software Solutions</div>
        </Card.Footer>
      </Card>
      <Card className="myCards">
        <Card.Img variant="top" src={Card3} />
        <Card.Body>
          <Card.Title className="title">Helga Hoffmann</Card.Title>
          <Card.Text classname="cardText">
            Sie ist ein Backend Developer. Seit 7 Jahren ist sie in unserem
            Unternehmen. Sie hat in diesem Projekt gearbeitet.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <div className="text-muted small">Siephi Software Solutions</div>
        </Card.Footer>
      </Card>
    </CardGroup>
  );
}
