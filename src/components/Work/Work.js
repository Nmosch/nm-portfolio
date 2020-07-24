import React from "react";
import work from '../../utils/work.json';

const Work = () => {
    return (
        <div class="site-section section-2" id="work-section">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 mb-5">
              <span class="section-sub-title d-block">My Work</span>
              <h2 class="section-title">Projects</h2>
              <p>A sample of work I have completed individually and in a group. Please click the image to view the
          application.</p>
            </div>
          </div>
        </div>
        <div class="owl-carousel nonloop-block-13">
          {work.map(work=>{
            return(
              <a class="work-thumb" href={work.href} target="_blank">
              <div class="work-text">
                <h3>{work.title}</h3>
                <span class="category">{work.type}</span>
                <p class="category">{work.description}</p>
              </div>
              <img src={work.src} alt="Image" class="img-fluid height" />
            </a>
            )
          })}

          {/* <a class="work-thumb" href="https://nmosch.github.io/Weather-Dashboard/" target="_blank">
            <div class="work-text">
              <h3>Weather Dashboard</h3>
              <span class="category">JavaScript/AJAX/Local Storage</span>
              <p class="category">A front end app using AJAX to call third part API and return data to the client. Dynamically rendered page.</p>
            </div>
            <img src="images/WeatherDB.png" alt="Image" class="img-fluid height" />
          </a>
          <a class="work-thumb" href="https://nmosch.github.io/Work-Day-Scheduluer/" target="_blank">
            <div class="work-text">
              <h3>Work Day Scheduler</h3>
              <span class="category">JavaScript/LocalStorage</span>
              <p class="category">A front end app using Local Storage for persistance.</p>
            </div>
            <img src="images/Scheduler.png" alt="Image" class="img-fluid height" />
          </a>
          <a class="work-thumb" href="https://secret-beach-73679.herokuapp.com/" target="_blank">
            <div class="work-text">
              <h3>Eat-Da-Burger!</h3>
              <span class="category">Full Stack/Heroku</span>
              <p class="category">Application allows users to enter in their custom burger and "Devour it". Deployed to Heroku. Using MySQL and RESTful API.</p>
            </div>
            <img src="images/BB2.png" alt="Image" class="img-fluid height" />
          </a>
          <a class="work-thumb" href="https://rotten-potatoes-vm3.herokuapp.com/login" target="_blank">
            <div class="work-text">
              <h3>Rotten Potatoes</h3>
              <span class="category">Full Stack/Node.js/MySQL/Express/chart.js</span>
              <p class="category">Full stack app completed with a team. My focus was back end using sequelize to query our database and return customized information to the client. RESTful API calls.</p>
              <p class="category">Please try for yourself!</p>
              <p class="category"> Username: Rottenpotatoes@test.com PW:1234</p>
            </div>
            <img src="images/RP2.png" alt="Image" class="img-fluid height" />
          </a>
          <a class="work-thumb" href="https://nicks-note-taker.herokuapp.com/" target="_blank">
            <div class="work-text">
              <h3>Note Taker Express</h3>
              <span class="category">Node.js/Express</span>
              <p class="category">Full stack application focusing on CRUD operators when calling the database.</p>
            </div>
            <img src="images/Note_Taker.png" alt="Image" class="img-fluid height" />
          </a> */}
        </div>
      </div>
    );
};

export default Work;