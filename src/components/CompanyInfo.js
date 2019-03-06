import React, { Component } from "react";
import { Icon } from "antd";
import CostCalculationForm from "./CostCalculationForm";
import { Link } from "react-router-dom";
import { Rate } from "antd";

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
        <div className="company-info__content">
          <div className="company-info__header">
            <div className="company-info__container">
              <div className="company-info__title">
                <div className="company-info__heading">
                  <h1 className="company-info__name">Fresh Perspectives</h1>
                </div>
              </div>
              <div className="company-info__rating-and-orders">
                <div className="company-info__rating">
                  <Rate disabled defaultValue={4} />
                  <a className="company-info__rating-count">(25)</a>
                </div>
                <span className="company-info__orders">50 orders</span>
              </div>
              <div className="company-info__adress">
                <h3>1600 Pennsylvania Avenue, Washington</h3>
              </div>
              <div className="company-info__info">
                <div className="company-info__card-container">
                  <div className="company-info__card">
                    <img className="company-info__logo" />
                    <div className="company-info__actions">
                      <div className="company-info__buttons">
                        <Link
                          to={"/feedback"}
                          className="company-info__button--feedback"
                        >
                          Leave feedback
                        </Link>

                        <Link
                          to={"/make_order"}
                          className="company-info__button--order"
                        >
                          Make order
                        </Link>
                      </div>
                      <div className="company-info__social">
                        <div className="company-info__btn-group">
                          <div className="company-info__btn-group__item">
                            Join Us
                          </div>
                          <a className="company-info__btn-group__item company-info__btn-group__item--fb" />
                          <a className="company-info__btn-group__item company-info__btn-group__item--tw" />
                          <a className="company-info__btn-group__item company-info__btn-group__item--gg" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="company-info__description">
                  <p className="company-info__description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="company-info__sidebar">
            <div className="company-info__services">
              <h2 className="company-info__services-list__title">
                Our Services
              </h2>
              <ul className="company-info__services-list">
                <li className="company-info__services-list__item">
                  Standart Cleaning
                </li>
                <li className="company-info__services-list__item">
                  General Cleaning
                </li>
                <li className="company-info__services-list__item">
                  Repair Cleaning
                </li>
              </ul>
            </div>

            <div className="company-info__cost-calc">
              <div className="company-info__cost-calc__form">
              <CostCalculationForm />
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default CompanyInfo;
