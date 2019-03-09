import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer-left">
          <ul className="footer__contact">
            <li className="footer__contact__element">
              <a href="tel:+375336393823" className="footer__contact--tel">
                +375336393823
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-right">
          <ul className="footer__join">
            <li className="footer__join__element">
              <a className="footer__social footer__social--fb" />
            </li>
            <li className="footer__join__element">
              <a className="footer__social footer__social--tw" />
            </li>
            <li className="footer__join__element">
              <a className="footer__social footer__social--gg" />
            </li>
          </ul>
        </div>
      </footer>
    );
  }
}

export default Footer;
