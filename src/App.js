import React from 'react';
import Navbar from './componenets/Navbar/Navbar';
import HomeSection from './componenets/Home/Home';
import Work from './componenets/Work/Work';
import Footer from './componenets/Footer/Footer';
import './App.css';
import About from './componenets/About/About';

function App() {
  return (
    <div className="App">
      <body data-spy="scroll" data-target=".site-navbar-target" data-offset="300">
        <div class="site-wrap">
          <div class="site-mobile-menu site-navbar-target">
            <div class="site-mobile-menu-header">
              <div class="site-mobile-menu-close mt-3">
                <span class="icon-close2 js-menu-toggle"></span>
              </div>
            </div>
            <div class="site-mobile-menu-body"></div>
          </div>
          <Navbar />
          <HomeSection />
          <About />
          <Work />
          <Footer />
        </div>
      </body>
    </div>
  );
}

export default App;
