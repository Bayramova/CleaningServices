import React, { Component } from "react";
import { Consumer } from "../context";
import Company from "./Company";

class CompanyContainer extends Component {
  render() {
    let companyInfo = {};
    let serviceTitles = [];
    return (
      <Consumer>
        {store => {
          store.companies.map(company => {
            if (company.id === this.props.pathname) {
              companyInfo = {
                ...company
              };
              serviceTitles = company.services.map(
                id => store.serviceTypes[id].title
              );
            }
          });
          return (
            <Company company={companyInfo} services={serviceTitles} />
          );
        }}
      </Consumer>
    );
  }
}

export default CompanyContainer;
