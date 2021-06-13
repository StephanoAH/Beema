import React from "react";

import WebDev from "../../assets/illustrations/web_development_.png";
import Mobil from "../../assets/illustrations/mobile_phone.png";
import Bug from "../../assets/illustrations/bug_fixed.png";

import "./Services.css";

function Services() {
  return (
    <section className="ServicesContainer">
      <h2>Best Quality Software</h2>
      <div className="ItemContainer">
        <div className="ItemDescriptions">
          <h3>Fully integrated services</h3>
          <p>
            We build and deliver fully interacted webapps <br />
            with customized control panels that fit <br />
            your company needs
          </p>
        </div>
        <img
          className="WebDev"
          src={WebDev}
          alt="An illustrations of two men building a web page"
        />
      </div>
      <div className="ItemContainer">
        <img
          className="Mobil"
          src={Mobil}
          alt="An illustrations of a mobile phone"
        />
        <div className="ItemDescriptions">
          <h3>Mobile optimized</h3>
          <p>
            All our apps are optimized for mobile devices <br />
            making possibly to acces your software <br />
            from everywhere anytime
          </p>
        </div>
      </div>
      <div className="ItemContainer">
        <div className="ItemDescriptions">
          <h3>Quality is our priority</h3>
          <p>
            We have teams of professional developers, designers <br />
            and managers that ensures delivering the best <br />
            software quality for your company
          </p>
        </div>
        <img
          className="Bug"
          src={Bug}
          alt="An illustrations of a hand holding a hammer over a bug inside of a monitor"
        />
      </div>
    </section>
  );
}

export default Services;
