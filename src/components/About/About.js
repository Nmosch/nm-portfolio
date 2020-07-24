import React from "react";

const About = () => {
    return(
        <div class="site-section section-1">
        <div class="container">
          <div class="row">
            <div class="col-lg-5 mr-auto mb-5">
              <div class="mb-5">
                <span class="section-sub-title d-block">About Nick</span>
                <h2 class="section-title">JavaScript Developer</h2>
                <p id="tech">Proficient in HTML5, CSS3, Bootstrap, JavaScript, JQuery, MERN, MySQl</p>
                <p>I have used my time and experience in the University of Arizona web development bootcamp to hone my skills in leading technologies with a focus on the MERN stack.</p>
                <p>In my free time I spend time with my children, hike the mountains of Arizona, and travel.</p>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="image-absolute-box">
                <div class="box" data-aos="fade-up">
                  <div class="icon-wrap"><span class="flaticon-vector"></span></div>
                  <h3>Value drives Success</h3>
                  <blockquote>
                    <p>“Strive not to be a success, but rather to be of value.”</p><cite>- Albert Einstein</cite>
                  </blockquote>
                </div>
                <img src="images/about_1.jpg" alt="Image" class="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default About;