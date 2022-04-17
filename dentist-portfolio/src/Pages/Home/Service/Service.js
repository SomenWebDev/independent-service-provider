import React from "react";
import { Button, Card, Col } from "react-bootstrap";

const Service = ({ service }) => {
  const { name, price, description, img } = service;
  return (
    <div className="mt-5">
      <Col>
        <Card
          style={{ width: "350px", height: "450px" }}
          className="shadow-lg mb-5 bg-body rounded"
        >
          <Card.Img variant="top" src={img} className="w-100" />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
              <p className="pt-2">{description}</p>
            </Card.Text>
            <Button variant="primary">Check Out</Button>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default Service;
