import React from "react";

const SocialLogin = () => {
  return (
    <div>
      <div className="d-flex align-items-center">
        <div style={{ height: "1px" }} className="bg-primary w-50"></div>
        <p className="mt-2 px-2">Or</p>
        <div style={{ height: "1px" }} className="bg-primary w-50"></div>
      </div>
      <div>
        <button className="btn btn-info w-50 d-flex mx-auto px-5">
          Continue With Google
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
