import React, { Component } from "react";
import CompaniesList from "./CompaniesList";
import { Consumer } from "../context";

class CompaniesListContainer extends Component {
  render() {
    return (
      <Consumer>
        {store => {
          const companiesList = [];
          store.companies.map(company => {
            if (company.services.includes(this.props.pathname)) {
              companiesList.push(company);
            }
          });
          return <CompaniesList companies={companiesList} />;
        }}
      </Consumer>
    );
  }
}

export default CompaniesListContainer;
