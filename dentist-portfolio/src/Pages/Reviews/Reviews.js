import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Review from "../Review/Review";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div className="my-5">
      <h1 className="mb-3 text-info">Patient review</h1>

      <Container>
        <Row xs={12} md={6} lg={3} className="g-3">
          {reviews.map((review) => (
            <Review key={review.id} review={review}></Review>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Reviews;
