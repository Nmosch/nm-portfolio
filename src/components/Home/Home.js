import React from "react";

const HomeSection = () => {
    return(
        <div class="intro-section" id="home-section">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-4 mr-auto" data-aos="fade-up">
              <h1>Full-stack web developer focusing on MERN Stack</h1>
              <p><a href="#work-section" class="btn btn-outline-light py-3 px-5">View Projects</a></p>
            </div>
            <div class="col-lg-2 ml-auto" data-aos="fade-up" data-aos-delay="100">
              <figure class="img-absolute">
                <img src="images/Prof_pic.jpg" alt="Image" class="img-fluid" />
              </figure>
            </div>
          </div>
        </div>
      </div>
    );
};

export default HomeSection;