import React from "react";

import logoDark from '../../images/logo-dark.svg'

function Footer() {
  return (
    <div className="footer-background">
      <div className="footer-wrapper">
        <p className="footer__copyright">
        Copyright © 2015
        </p>
        <div className="footer-company">
        <p className="footer-company__name">SPACE</p>
        <img className="footer-company__logo" src={logoDark} alt="logo" />
        <p className="footer-company__name">cowboy</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
