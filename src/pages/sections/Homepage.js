import React from "react";
import Landing from "./Landing";
import Services from "./Services";
import "./Homepage.css";

function Homepage() {
  return (
    <div className="Container">
      <Landing />
      <Services />
    </div>
  );
}

export default Homepage;
