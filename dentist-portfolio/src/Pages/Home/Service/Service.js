import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Service = ({ service }) => {
  const { name, price, description, img } = service;
  const navigate = useNavigate();
  const handleCheckOut = (name) => {
    navigate(`/checkout/${name}`);
    // <Link to="/home" />;
  };
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

            <Button
              onClick={() => handleCheckOut(name)}
              variant="warning"
              className="w-100"
            >
              Check Out
            </Button>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default Service;
