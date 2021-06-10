import React from "react";

import Rocket from "../../assets/illustrations/rocket_launch_.png";

import "./About.css";

function About() {
  return (
    <div className="AboutContainer">
      <h2>More about Beema</h2>
      <div className="AboutDescription">
        <p className="AboutText">
          Beema is about designing, building and deliverying best quality
          software for your company.
          <br />
          <br />
          We make sure that you get the best software inferstracture and set of
          applications to ensure the best experience of your clients.
          <br />
          <br />
          So wether you are handling thousands of payment transactions or you’re
          just starting out, you are in the right place.
        </p>
        <img className="AboutImage" src={Rocket} alt="A rocket ignition" />
      </div>
    </div>
  );
}

export default About;
