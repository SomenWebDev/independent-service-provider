import React from "react";
import { Carousel } from "react-bootstrap";
import banner1 from "../../../images/Banner/banner1.jpg";
import banner2 from "../../../images/Banner/banner2.jpg";
const Banner = () => {
  return (
    <div className="container-fluid">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 img-fluid"
            src={banner1}
            alt="First slide"
          />
          <Carousel.Caption className="d-flex flex-column align-items-center justify-content-center h-100 text-dark fw-bold">
            <h3>Say Everything With Your smile</h3>
            <p>I am a friendly dentist with 12 years experience.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 img-fluid"
            src={banner2}
            alt="Second slide"
          />

          <Carousel.Caption className="d-flex flex-column align-items-center justify-content-center h-100 text-dark fw-bold">
            <h3>Say Everything With Your smile</h3>
            <p>I am a friendly dentist with 12 years experience..</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
