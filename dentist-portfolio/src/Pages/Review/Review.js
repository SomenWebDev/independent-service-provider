import React from "react";
import { Card, Col } from "react-bootstrap";

const Review = ({ review }) => {
  const { title, name, description } = review;
  return (
    <div>
      <Col>
        <Card style={{ height: "300px" }} className="bg-secondary">
          <Card.Body>
            <Card.Title>
              <h3 className="text-start">{title}</h3>
            </Card.Title>
            <Card.Text className="mt-3">
              <p className="text-start fst-italic">{description}</p>
              <p className="text-white text-start">{name}</p>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default Review;
