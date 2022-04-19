import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "./../../../firebase.init";

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const navigate = useNavigate();
  let errorElement;
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  if (error) {
    errorElement = (
      <div>
        <p className="text-danger">Error: {error.message}</p>
      </div>
    );
  }
  if (user) {
    navigate(from, { replace: true });
  }
  return (
    <div>
      <div className="d-flex align-items-center">
        <div style={{ height: "1px" }} className="bg-primary w-50"></div>
        <p className="mt-2 px-2">Or</p>
        <div style={{ height: "1px" }} className="bg-primary w-50"></div>
      </div>
      {errorElement}
      <div>
        <button
          onClick={() => signInWithGoogle()}
          className="btn btn-info w-50 d-flex mx-auto px-5"
        >
          Continue With Google
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
