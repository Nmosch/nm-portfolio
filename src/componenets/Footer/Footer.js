import React from "react";

const Footer = () => {
    return (
        <footer class="footer-section" id="footer-section">
            <div class="container">
              <div class="row">
                <div class="col-md-4">
                  <h3>Contact Info</h3>
                  <ul class="list-unstyled footer-links">
                    <li>Email: Nmosch@gmail.com</li>
                    <li>Phone: 631-220-8384</li>
                    <li><a href="./documents/Nicholas_Moschouris_Resume.pdf" target="_blank">Resume</a></li>
                  </ul>
                </div>
                <div class="col-md-4 ml-auto">
                  <h3>Links</h3>
                  <ul class="list-unstyled footer-links">
                    <li><a href="https://github.com/Nmosch" target="_blank">Github</a></li>
                    <li><a href="https://www.linkedin.com/in/nicholas-moschouris" target="_blank">LinkedIn</a></li>
                    <li><a href="https://www.facebook.com/nick.moschouris.7" target="_blank">Facebook</a></li>
                  </ul>
                </div>
                <div class="col-md-3">
                  <h3>Repos</h3>
                  <ul class="list-unstyled footer-links">
                    <li><a href="https://github.com/Nmosch/Cal.culator" target="_blank">Cal.culator</a></li>
                    <li><a href="https://github.com/Nmosch/Weather-Dashboard" target="_blank">Weather Dashboard</a></li>
                    <li><a href="https://github.com/Nmosch/Work-Day-Scheduluer" target="_blank">Work Day Scheduler</a></li>
                    <li><a href="https://github.com/Nmosch/burger" target="_blank">Eat-Da-Burger</a></li>
                    <li><a href="https://github.com/Nmosch/P2_Valar_Morghulis_Movie_Ranker" target="_blank">Rotten
                  Potatoes</a></li>
                    <li><a href="https://github.com/Nmosch/Note_Taker" target="_blank">Note Taker Express</a></li>
                  </ul>
                </div>
              </div>
              <div class="row pt-5 mt-5 text-center">
                <div class="col-md-12">
                  <div class="border-top pt-5">
                    <p>
                      {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                Copyright Nick Moschouris&copy;
                <script>document.write{new Date().getFullYear()};</script> All rights reserved | This template is made
                with <i class="icon-heart" aria-hidden="true"></i> by <a href="https://colorlib.com"
                        target="_blank">Colorlib</a>
                      {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </footer>
    );
};

export default Footer;