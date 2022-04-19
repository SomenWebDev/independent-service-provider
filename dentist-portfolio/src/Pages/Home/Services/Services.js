import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import { Container } from "react-bootstrap";
import Service from "../Service/Service";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="mt-5">
      <Container>
        <h1 className="text-dark mt-2">
          <span>-----</span>WHAT I OFFER<span>-----</span>
        </h1>
        <Row xs={12} md={6} lg={3} className="g-3">
          {services.map((service) => (
            <Service key={service.id} service={service}></Service>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Services;
