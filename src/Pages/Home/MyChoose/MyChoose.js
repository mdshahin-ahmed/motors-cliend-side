import React from "react";
import "./MyChoose.css";

const MyChoose = () => {
  return (
    // <!-- skills section -->
    <section id="skills" class="skills py-5 my-5">
      <div class="container">
        {/* <!-- section title --> */}
        <div class="row mb-5">
          <div class="col d-flex flex-wrap text-uppercase justify-content-center">
            <h1 class="font-weight-bold align-self-center mx-1 mb-0">
              my choose
            </h1>
            <h1 class="section-title-special mx-1">car delar</h1>
          </div>
        </div>
        {/* <!-- section title end --> */}
        <div class="row">
          {/* <!-- single skill --> */}
          <div class="col-sm-6 col-lg-3 text-center my-3">
            <a href="#" class="skills-icon p-2 rounded-circle">
              <i class="fas fa-car fa-fw"></i>
            </a>
            <h6 class="text-uppercase font-width-bold my-3">all brands</h6>
            <div class="skills-underline"></div>
            <p class="w-75 mx-auto text-muted">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita,
              voluptatum.
            </p>
          </div>
          {/* <!-- single skill end --> */}
          {/* <!-- single skill --> */}
          <div class="col-sm-6 col-lg-3 text-center my-3">
            <a href="#" class="skills-icon p-2 rounded-circle">
              <i class="fas fa-comments fa-fw"></i>
            </a>
            <h6 class="text-uppercase font-width-bold my-3">free support</h6>
            <div class="skills-underline"></div>
            <p class="w-75 mx-auto text-muted">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita,
              voluptatum.
            </p>
          </div>
          {/* <!-- single skill end --> */}
          {/* <!-- single skill --> */}
          <div class="col-sm-6 col-lg-3 text-center my-3">
            <a href="#" class="skills-icon p-2 rounded-circle">
              <i class="fas fa-people-carry fa-fw"></i>
            </a>
            <h6 class="text-uppercase font-width-bold my-3">caring</h6>
            <div class="skills-underline"></div>
            <p class="w-75 mx-auto text-muted">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita,
              voluptatum.
            </p>
          </div>
          {/* <!-- single skill end --> */}
          {/* <!-- single skill --> */}
          <div class="col-sm-6 col-lg-3 text-center my-3">
            <a href="#" class="skills-icon p-2 rounded-circle">
              <i class="fas fa-wallet fa-fw"></i>
            </a>
            <h6 class="text-uppercase font-width-bold my-3">affordable</h6>
            <div class="skills-underline"></div>
            <p class="w-75 mx-auto text-muted">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita,
              voluptatum.
            </p>
          </div>
          {/* <!-- single skill end --> */}
        </div>
      </div>
    </section>
    // <!-- skills section end -->
  );
};

export default MyChoose;
