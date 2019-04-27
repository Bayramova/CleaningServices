import React, { Component } from "react";
import CostCalculationFormContainer from "./CostForm/CostCalculationFormContainer";
import FeedbackList from "./Feedbacks/FeedbackList";
import { Link } from "react-router-dom";
import { Rate, Button } from "antd";
import "./CompanyInfo.css";

class Company extends Component {
  handleClick = event => {
    this.props.selectCompany(this.props.matchPath);
  };
  render() {
    console.log(this.props);
    const serviceTitles = this.props.company.services.map(
      id => this.props.services.find(service => service.id === id).title
    );
    return (
      <div className="company-info__container">
        <div>
          <div>
            <h1 className="company-info__title">{this.props.company.name}</h1>
          </div>
          <div className="company-info__rating-and-orders">
            <div>
              <Rate
                disabled
                defaultValue={
                  this.props.company.rating / this.props.company.reviewsNumber
                }
              />
            </div>
            <span className="company-info__orders">{`${
              this.props.company.ordersNumber
            } orders`}</span>
          </div>
          <div className="company-info__address">
            <h3>{this.props.company.address}</h3>
          </div>
          <div className="wrapper">
            <div className="company-info__card-container">
              <div className="company-info__card">
                <img
                  className="company-info__logo"
                  alt="logo"
                  src={`.${this.props.company.logo}`}
                />
                {this.props.role === "COMPANY" ? (
                  <React.Fragment />
                ) : (
                  <Link to={"/make_order"} onClick={this.handleClick}>
                    <Button
                      type="primary"
                      className="company-info__button--order"
                    >
                      Make order
                    </Button>
                  </Link>
                )}
              </div>
            </div>
            <div className="company-info__description">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>
            </div>
          </div>
        </div>
        <div className="company-info__feedbacks">
          <CostCalculationFormContainer
            services={serviceTitles}
            selectCompany={this.props.selectCompany}
            matchPath={this.props.matchPath}
          />
          <div>
            <FeedbackList feedbacks={this.props.feedbacks} />
          </div>
        </div>
      </div>
    );
  }
}

export default Company;
