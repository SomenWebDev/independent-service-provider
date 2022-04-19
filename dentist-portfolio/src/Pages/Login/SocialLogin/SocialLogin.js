import { FcGoogle } from "react-icons/fc";
import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import auth from "./../../../firebase.init";

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const navigate = useNavigate();

  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  if (error) {
    toast("Approve Your Google account");
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

      <div>
        <button
          onClick={() => signInWithGoogle()}
          className="btn btn-secondary w-50 d-flex mx-auto px-5"
        >
          <FcGoogle className="mt-1 mx-2" /> Continue With Google
        </button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default SocialLogin;
