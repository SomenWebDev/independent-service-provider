import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Service = ({ service }) => {
  const { name, price, description, img } = service;
  return (
    <div className="mt-5">
      <Col>
        <Card
          style={{ height: "450px" }}
          // className="shadow-lg mb-5 bg-body rounded"
        >
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
              <p className="pt-2">{description}</p>
              <p>Price: ${price}</p>
            </Card.Text>
            <Link to="/checkout">
              <Button variant="primary" className="w-100">
                Check Out
              </Button>
            </Link>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default Service;
