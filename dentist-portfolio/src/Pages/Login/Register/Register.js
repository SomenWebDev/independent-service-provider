import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "./../../../firebase.init";
import { sendEmailVerification } from "firebase/auth";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import SocialLogin from "../SocialLogin/SocialLogin";

const Register = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  const nameRef = useRef("");
  const emailRef = useRef("");
  const passwordRef = useRef("");

  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  const navigateLogin = () => {
    navigate("/login");
  };

  if (user) {
    navigate(from, { replace: true });
  }

  if (loading) {
    return <p>loading....</p>;
  }
  if (error) {
    console.log("invalid email password");
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    await createUserWithEmailAndPassword(email, password);

    await sendEmailVerification();
    alert("send email");
  };

  return (
    <div className="container w-50 mx-auto mt-5">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control ref={nameRef} type="text" placeholder="Your name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            ref={emailRef}
            type="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            ref={passwordRef}
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <div className="text-center">
          <Button variant="primary" type="submit" className="w-50">
            Register
          </Button>
        </div>
      </Form>
      <p className="text-center mt-2">
        Already have an account?
        <Link
          to="/login"
          onClick={navigateLogin}
          className="text-decoration-none"
        >
          Login
        </Link>
      </p>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Register;
