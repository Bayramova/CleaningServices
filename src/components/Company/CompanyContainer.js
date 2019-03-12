import React, { Component } from "react";
import { Consumer } from "../../context";
import Company from "./Company";

class CompanyContainer extends Component {
  render() {
    return (
      <Consumer>
        {store => {
          const company = store.companies.find(
            company => company.id === this.props.pathname
          );
          const serviceTitles = company.services.map(
            id => store.serviceTypes[id].title
          );
          return <Company company={company} services={serviceTitles} />;
        }}
      </Consumer>
    );
  }
}

export default CompanyContainer;
