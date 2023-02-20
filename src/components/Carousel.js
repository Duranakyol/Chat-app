import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import slider1 from "../assets/slider1.jpg";
import slider2 from "../assets/slider2.jpg";
import slider3 from "../assets/slider3.jpg";
import "./Carousel.css";

function myCarousel() {
  return (
    <Carousel>
      <Carousel.Item className="myCarousel">
        <img className="d-block" src={slider3} alt="Third slide" />

        <Carousel.Caption className="myText">
          <h3>Falcon Chat-App</h3>
          <p>
            Sie können einfach benutzen. Erstmal einen Room einloggen und dann
            chatten!
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="myCarousel">
        <img className="d-block" src={slider1} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item className="myCarousel">
        <img className="d-block" src={slider2} alt="Second slide" />
      </Carousel.Item>
    </Carousel>
  );
}

export default myCarousel;
