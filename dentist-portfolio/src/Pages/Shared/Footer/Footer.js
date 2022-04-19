import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="bg-dark  text-white mt-3 pb-5 pt-3 container-fluid">
      <div className="row">
        <div className="col-lg-4 col-12">
          <div className="d-flex mt-4 justify-content-center">
            <i className="fas fa-tooth fa-2x me-2"></i>
            <h3>Tooth Doctor</h3>
          </div>
          <div>
            <p>Follow me on:</p>
            <div className="d-flex justify-content-center">
              <i className="fab fa-facebook fa-2x me-4"></i>
              <i className="fab fa-twitter fa-2x me-4"></i>
              <i className="fab fa-instagram fa-2x me-4"></i>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-4">
          <h3 className="mt-3 mb-3">Policies</h3>
          <p>Privacy Policies</p>
          <p>Cookie Policies</p>
          <p>Terms of use</p>
        </div>
        <div className="col-12 col-lg-4">
          <h3 className="mt-3 mb-3">For Advertiser</h3>
          <p>Advertise With Us</p>
          <p>Advertising Policies</p>
        </div>
      </div>
      <p className="text-light text-center pb-4">©2022 All Rights Reserved</p>
    </div>
  );
};

export default Footer;
