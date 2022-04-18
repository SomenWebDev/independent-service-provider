import React from "react";
import { Carousel } from "react-bootstrap";
import banner1 from "../../../images/Banner/banner1.jpg";
import banner2 from "../../../images/Banner/banner2.jpg";
const Banner = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={banner1} alt="First slide" />
          <Carousel.Caption className="d-flex flex-column align-items-center justify-content-center h-100 text-dark fw-bold">
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={banner2} alt="Second slide" />

          <Carousel.Caption className="d-flex flex-column align-items-center justify-content-center h-100 text-dark fw-bold">
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
