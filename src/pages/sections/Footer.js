import React from "react";
import BeemaLogo from "assets/logo/logo_croped.png";

import style from "./Footer.module.css";

function Footer() {
  return (
    <footer className={style.Container}>
      <div className={style.LogoContainer}>
        <img className={style.LogoImg} src={BeemaLogo} alt="An abstract logo" />
        <div className={style.LogoText}>
          <h1>Beema</h1>
        </div>
      </div>
      <div className={style.TextContainer}>
        <h2>
          Just say the magical word <br />
          and we will do the rest
        </h2>
      </div>
      <div className={style.ButtonContainer}>
        <button>Start your project</button>
      </div>
      <hr />
      <div className={style.Footer}>
        <div className={style.FooterCenter}>
          <p>Stephano Hernandez</p>
        </div>
        <div className={style.FooterLeft}>
          <p>Twitter</p>
          <p>Linkedin</p>
        </div>
        <div className={style.FooterRight}>
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
          <p>Contact</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
