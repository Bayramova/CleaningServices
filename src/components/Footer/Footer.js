import React, { Component } from "react";
import "./Footer.css";
import Toast from "popup-messages";
import "popup-messages/css/index.css";

class Footer extends Component {
  showToast = e => {
    new Toast("Sample message", "error").show(Toast.toastsContainer);
    new Toast("Sample message", "warning").show(Toast.toastsContainer);
    new Toast("Sample message", "success").show(Toast.toastsContainer);
    new Toast("Sample message", "info").show(Toast.toastsContainer);
  };
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
              <div
                className="footer__social footer__social--fb"
                // onClick={this.showToast()}
              />
            </li>
            <li className="footer__join__element">
              <div
                className="footer__social footer__social--tw"
                // onClick={this.showToast()}
              />
            </li>
            <li className="footer__join__element">
              <div
                className="footer__social footer__social--gg"
                // onClick={this.showToast()}
              />
            </li>
          </ul>
        </div>
      </footer>
    );
  }
}

export default Footer;
