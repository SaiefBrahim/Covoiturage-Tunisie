import React from "react";
import { Carousel } from "react-bootstrap";
import hero from "../img/hero.jpg";

const Hero = () => {
  return (
    <Carousel controls={false} indicators={false}>
      <Carousel.Item>
        <img className="d-block w-100 img-fluid" src={hero} alt="Hero" />
        <Carousel.Caption>
          <h1 className="text-light">
            Covoiturez vers des milliers de destinations à petits prix.
          </h1>
          <p className="text-light fs-5">
            Quelle que soit votre destination, il y a un covoiturage pour vous y
            amener à moindre coût.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Hero;
