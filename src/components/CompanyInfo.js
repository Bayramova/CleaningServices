import React, { Component } from "react";
import { Icon } from "antd";
import CostCalculationForm from "./CostCalculationForm";
import { Link } from "react-router-dom";

class CompanyInfo extends Component {
  render() {
    const IconText = ({ type, text }) => (
      <span>
        <Icon type={type} style={{ marginRight: 8 }} />
        {text}
      </span>
    );
    return (
      <main className="main company-info__content">
          <div className="company-info__layout">
            <div className="company-info__header">
              <h1 className="company-info__title">Fresh Perspectives</h1>
              <div className="company-info__feedback">
              <ul className='company-info__feedback-links'>
                <li className='company-info__feedback-link'><IconText type="star-o" text="4" /></li>
                <li className='company-info__feedback-link'><IconText type="like-o" text="50" /></li>
                <li className='company-info__feedback-link'><a><IconText type="message" text="2" /></a></li>
              </ul>
              </div>
              <p className="company-info__adress">
                1600 Pennsylvania Avenue, Washington
              </p>
            </div>
            <div className="company-info__body">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <h2>Our Services</h2>
              <ul className='company-info__services-list'>
                <li className='company-info__services-list__item'>Standart Cleaning</li>
                <li className='company-info__services-list__item'>General Cleaning</li>
                <li className='company-info__services-list__item'>Repair Cleaning</li>
              </ul>
              <CostCalculationForm />
              <ul className="button-links">
                <li className="button-links__link">
                  <Link
                    to={"/make_order"}
                    className="button-links__link--order"
                  >
                    Make order
                  </Link>
                </li>
                <li className="button-links__link">
                  <Link to={"/sign_in"} className="button-links__link--sign-in">
                    Sign in
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="company-info__layout__sidebar" />
      </main>
    );
  }
}

export default CompanyInfo;
