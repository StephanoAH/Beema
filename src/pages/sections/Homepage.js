import React from "react";
import Landing from "./Landing";
import Services from "./Services";
import About from "./About";

import "./Homepage.css";

function Homepage() {
  return (
    <div className="Container">
      <Landing />
      <Services />
      <About />
    </div>
  );
}

export default Homepage;
