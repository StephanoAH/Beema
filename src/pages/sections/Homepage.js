import React from "react";
import Landing from "./Landing";
import Services from "./Services";
import About from "./About";
import Footer from "./Footer";

import "./Homepage.css";

function Homepage() {
  return (
    <div className="Container">
      <Landing />
      <Services />
      <About />
      <Footer />
    </div>
  );
}

export default Homepage;
