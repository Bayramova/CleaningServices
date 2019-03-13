import React, { Component } from "react";
import ServiceCardsList from "./ServiceCardsList";
import { Consumer } from "../../../context";

class ServiceCardsContainer extends Component {
  render() {
    return (
      <Consumer>
        {store => (
          <ServiceCardsList services={Object.values(store.serviceTypes)} />
        )}
      </Consumer>
    );
  }
}

export default ServiceCardsContainer;
