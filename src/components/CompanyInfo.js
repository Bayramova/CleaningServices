import React, { Component } from "react";
import { Icon } from "antd";
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
      <main className="main">
        <div className="company-info__layout">
          <div className="company-info__header">
            <h1 className="company-info__title">Fresh Perspectives</h1>
            <div className="company-info__feedback">
              <IconText type="star-o" text="4" />
              <IconText type="like-o" text="50" />
              <IconText type="message" text="2" />
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
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <h3 className='company-info__services'>Our Services</h3>
            <ul>
                <li>Standart Cleaning</li>
                <li>General Cleaning</li>
                <li>Repair Cleaning</li>
            </ul>
            {/* Здесь еще расчет цены уборки и две кнопки рассчитать и заказать */}
          </div>
        </div>
        <div className="company-info__layout__sidebar" />
      </main>
    );
  }
}

export default CompanyInfo;
