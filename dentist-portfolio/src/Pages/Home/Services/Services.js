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
    <div id="services">
      <Container>
        <h1 className="text-primary mt-2">Advanced Dental Care For All Ages</h1>
        <Row xs={12} md={6} lg={3} className="g-3">
          {services.map((service) => (
            <Service service={service} key={service.id}></Service>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Services;
