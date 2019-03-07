import React, { Component } from "react";
import { Icon } from "antd";
import CostCalculationForm from "./CostCalculationForm";
import { Link } from "react-router-dom";
import { Rate } from "antd";
import allCompaniesList from "../data/companies";

class CompanyInfo extends Component {
  state = {
    id: "",
    logo: "",
    name: "",
    adress: "",
    rating: "",
    orders: "",
    servicesList: [],
    services: [],
    reviewsNumber: ""
  };

  componentDidMount() {
    const path = Object.values(this.props.match.params)[0];
    allCompaniesList.map(company => {
      if (company.id === path) {
        this.setState(() => {
          return {
            id: company.id,
            logo: company.logo,
            name: company.name,
            adress: company.adress,
            rating: company.rating,
            orders: company.orders,
            servicesList: company.servicesList,
            services: company.services,
            reviewsNumber: company.reviewsNumber,
          };
        });
      }
    });
  }
  render() {
    return (
      <main className="main">
        <div className="company-info__content">
          <div className="company-info__container">
            <div className="company-info__title">
              <div className="company-info__heading">
                <h1 className="company-info__name">{this.state.name}</h1>
              </div>
            </div>
            <div className="company-info__rating-and-orders">
              <div className="company-info__rating">
                <Rate disabled defaultValue={4} />
                <Link to={"/reviews"} className="company-info__rating-count">
                  ({this.state.reviewsNumber})
                </Link>
              </div>
              <span className="company-info__orders">{`${
                this.state.orders
              } orders`}</span>
            </div>
            <div className="company-info__adress">
              <h3>{this.state.adress}</h3>
            </div>
            <div className="company-info__info">
              <div className="company-info__card-container">
                <div className="company-info__card">
                  <img className="company-info__logo" />
                  <div className="company-info__actions">
                    <div className="company-info__buttons">
                      <Link
                        to={`/uborkakvartir/reviews`}
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
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </div>
              <div className="company-info__services-and-cost">
                <div className="company-info__services">
                  <h2 className="company-info__services-list__title">
                    Our Services
                  </h2>
                  <ul className="company-info__services-list">
                    <li className="company-info__services-list__item">
                      {this.state.servicesList[0]}
                    </li>
                    <li className="company-info__services-list__item">
                      {this.state.servicesList[1]}
                    </li>
                    <li className="company-info__services-list__item">
                      {this.state.servicesList[2]}
                    </li>
                    <li className="company-info__services-list__item">
                      {this.state.servicesList[3]}
                    </li>
                    <li className="company-info__services-list__item">
                      {this.state.servicesList[4]}
                    </li>
                    <li className="company-info__services-list__item">
                      {this.state.servicesList[5]}
                    </li>
                    <li className="company-info__services-list__item">
                      {this.state.servicesList[6]}
                    </li>
                    <li className="company-info__services-list__item">
                      {this.state.servicesList[7]}
                    </li>
                  </ul>
                </div>
                <div className="company-info__cost__form">
                  <CostCalculationForm services={this.state.services} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default CompanyInfo;
