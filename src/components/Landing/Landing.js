import React, { Component } from "react";
import ServiceCardsContainer from "./ServiceTypes/ServiceCardsContainer";
import "./Landing.css";

class Main extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="section section--about-us">
          <div className="section__promo">
            <div className="section__promo__heading">
              Our House Cleaning Services
            </div>
            <div className="section__promo__title">
              Everything Is Simple!
              <br />
              Make an order and go about your business, we take care of the
              cleaning.
            </div>
          </div>
          <ul className="features-list">
            <li className="feature-list__item feature--time">
              <h3 className="feature-list__name">Convenient Time</h3>
              <p>We will come when you are comfortable. For example, today</p>
            </li>
            <li className="feature-list__item feature--safety">
              <h3 className="feature-list__name">Only The Best Means</h3>
              <p>We use high-quality and safe means for health</p>
            </li>
            <li className="feature-list__item feature--quality">
              <h3 className="feature-list__name">Reliable Performers</h3>
              <p>
                We are confident in those who come to you, because we are a
                family business
              </p>
            </li>
          </ul>
        </section>

        <section className="section">
          <div className="catalogue">
            <ServiceCardsContainer />
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Main;
