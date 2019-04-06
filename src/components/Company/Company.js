import React, { Component } from "react";
import CostCalculationFormContainer from "./CostForm/CostCalculationFormContainer";
import CompanyServicesList from "./ServicesList/CompanyServicesList";
import { Link } from "react-router-dom";
import { Rate } from "antd";
import "./CompanyInfo.css";

class Company extends Component {
  handleClick = event => {
    // event.preventDefault();
    this.props.selectCompany(this.props.matchPath);
  };
  render() {
    return (
      <div className="company-info__container">
        <div>
          <div>
            <h1 className="company-info__title">{this.props.company.name}</h1>
          </div>
          <div className="company-info__rating-and-orders">
            <div>
              <Rate disabled defaultValue={this.props.company.rating} />
              <Link to={"/reviews"}>({this.props.company.reviewsNumber})</Link>
            </div>
            <span className="company-info__orders">{`${
              this.props.company.orders
            } orders`}</span>
          </div>
          <div className="company-info__address">
            <h3>{this.props.company.address}</h3>
          </div>
          <div className="company-info__card-container">
            <div className="company-info__card">
              <img
                className="company-info__logo"
                alt="logo"
                src={`.${this.props.company.logo}`}
              />
              <div className="company-info__buttons">
                <Link
                  to={`/uborkakvartir/reviews`}
                  className="company-info__button--feedback"
                >
                  Leave feedback
                </Link>

                <Link
                  to={{
                    pathname: "/make_order",
                    state: {
                      fromSelectedCompany: true
                    }
                  }}
                  onClick={this.handleClick}
                  className="company-info__button--order"
                >
                  Make order
                </Link>
              </div>
            </div>
          </div>
          <div className="company-info__description">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
        <div>
          <div>
            <h2 className="services-list__title">Our Services</h2>
            <CompanyServicesList services={this.props.services} />
          </div>
          <CostCalculationFormContainer services={this.props.services} />
        </div>
      </div>
    );
  }
}

export default Company;
