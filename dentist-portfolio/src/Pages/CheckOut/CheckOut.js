import React from "react";
import { useParams } from "react-router-dom";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";

const CheckOut = () => {
  const { checkoutName } = useParams();
  return (
    <div>
      <div className="container w-25 mx-auto border border-dark rounded my-3 p-5">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="text" placeholder="Your Name" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control type="email" placeholder="Your Email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control type="text" placeholder="Mobile Number" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Accept terms and condition" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default CheckOut;
