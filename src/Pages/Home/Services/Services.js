import React from "react";
import video from "../../../video/videoBcg.mp4";
import "./Services.css";

const Services = () => {
  return (
    <div>
      <div className="container pt-5">
        {/* <!-- section title --> */}
        <div className="row mb-5">
          <div className="col d-flex flex-wrap text-uppercase justify-content-center">
            <h1 className="font-weight-bold align-self-center mx-1 mb-0">
              our
            </h1>
            <h1 className="section-title-special mx-1">services</h1>
          </div>
        </div>
        {/* <!-- section title end --> */}
      </div>

      <div
        id="services"
        className="services py-5 d-flex aign-items-center justify-content-center"
      >
        {/* <!-- video container --> */}
        <div className="video-container">
          <video autoPlay loop muted className="video-item">
            <source src={video} type="video/mp4" /> Your browser does onot
            support video tag
          </video>
        </div>
        {/* <!-- video container end --> */}
        {/* <!-- video overlay --> */}
        <div className="video-overlay"></div>
        {/* <!-- video overlay end --> */}

        <div className="container py-5">
          <div className="row my-3 justify-content-center">
            {/* <!-- col --> */}
            <div className="col-8 mx-auto col-lg-4 col-md-4 my-3">
              <div className="service py-5 pl-4">
                <span className="service-icon">
                  <i className="fas fa-cogs"></i>
                </span>
                <h6 className="text-capitalize service-title">vehicle</h6>
                <h5 className="text-uppercase font-weight-bold">repair</h5>
              </div>
            </div>
            {/* <!-- col end --> */}
            {/* <!-- col --> */}
            <div className="col-8 mx-auto col-lg-4 col-md-4 my-3">
              <div className="service py-5 pl-4">
                <span className="service-icon">
                  <i className="fas fa-car-battery"></i>
                </span>
                <h6 className="text-capitalize service-title">bettery</h6>
                <h5 className="text-uppercase font-weight-bold">replecement</h5>
              </div>
            </div>
            {/* <!-- col end --> */}
            {/* <!-- col --> */}
            <div className="col-8 mx-auto col-lg-4 col-md-4 my-3">
              <div className="service py-5 pl-4">
                <span className="service-icon">
                  <i className="fas fa-car-crash"></i>
                </span>
                <h6 className="text-capitalize service-title">roadside</h6>
                <h5 className="text-uppercase font-weight-bold">assistance</h5>
              </div>
            </div>
            {/* <!-- col end --> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
