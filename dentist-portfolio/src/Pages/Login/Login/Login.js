import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "../SocialLogin/SocialLogin";
import auth from "./../../../firebase.init";

const Login = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    signInWithEmailAndPassword(email, password);
  };

  const resetPassword = async () => {
    const email = emailRef.current.value;
    if (email) {
      await sendPasswordResetEmail(email);
      alert("Sent email");
    } else {
      alert("enter your email");
    }
  };

  if (user) {
    navigate(from, { replace: "true" });
  }
  if (loading || sending) {
    return <p>loading .....</p>;
  }
  if (error) {
    console.log(error.message);
  }
  return (
    <div className="container w-50 mx-auto mt-5">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            ref={passwordRef}
            type="password"
            placeholder="Password"
          />
        </Form.Group>

        <Button variant="light" type="submit" className="w-100">
          Login
        </Button>
      </Form>
      <div className="mt-3 text-center">
        <Button
          variant="light"
          className="btn btn-link text-decoration-none"
          onClick={resetPassword}
        >
          Forgot Password
        </Button>

        <p className="mt-2">
          Don't have an account?
          <Link to="/register" className="ps-2 text-decoration-none">
            Please Register
          </Link>
        </p>
      </div>

      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Login;
