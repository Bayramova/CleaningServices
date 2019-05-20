import React, { Component } from "react";
import "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer-left">
          <ul className="footer__contact">
            <li className="footer__contact__element">
              <a
                href="mailto:cleaningservices@gmail.com"
                className="footer__contact--tel"
              >
                cleaningservices@gmail.com
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-right">
          <ul className="footer__join">
            <li className="footer__join__element">
              <div className="footer__social footer__social--fb" />
            </li>
            <li className="footer__join__element">
              <div className="footer__social footer__social--tw" />
            </li>
            <li className="footer__join__element">
              <div className="footer__social footer__social--gg" />
            </li>
          </ul>
        </div>
      </footer>
    );
  }
}

export default Footer;
