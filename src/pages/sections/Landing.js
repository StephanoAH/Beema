import React from "react";
import BeemaLogo from "assets/logo/logo_croped.png";

import "./Landing.css";

function Landing() {
  return (
    <section className="Container">
      <div className="ContainerOverlay">
        <div className="LogoContainer">
          <img className="LogoImg" src={BeemaLogo} alt="An abstract logo" />
          <div className="LogoText">
            <h1>Beema</h1>
          </div>
        </div>
        <div className="TextContainer">
          <h2>
            Software Development <br />
            From the best in the industry
          </h2>
        </div>
        <div className="ButtonContainer">
          <button>Start your project</button>
        </div>
      </div>
    </section>
  );
}

export default Landing;
