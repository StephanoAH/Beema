import React from "react";
import BeemaLogo from "assets/logo/logo_croped.png";

import "./Footer.css";

function Footer() {
  return (
    <footer className="FooterContainer">
      <div className="LogoFooterContainer">
        <img className="LogoFooterImg" src={BeemaLogo} alt="An abstract logo" />
        <div className="LogoFooterText">
          <h1>Beema</h1>
        </div>
      </div>
      <div className="TextFooterContainer">
        <h2>
          Just say the magical word <br />
          and we will do the rest
        </h2>
      </div>
      <div className="ButtonFooterContainer">
        <button>Start your project</button>
      </div>
      <hr />
      <div className="Footer">
        <div className="FooterCenter">
          <p>Stephano Hernandez</p>
        </div>
        <div className="FooterLeft">
          <p>Twitter</p>
          <p>Linkedin</p>
        </div>
        <div className="FooterRight">
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
          <p>Contact</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
