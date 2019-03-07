import React, { Component } from "react";
import Company from "./Company";
import allCompaniesList from "../data/companies";

class CompaniesListContainer extends Component {
  state = {
    companies: []
  };

  
  async componentDidMount() {
    const companiesList = [];
    allCompaniesList.map( (company) => {
      if (company.services.includes(this.props.pathname)) {
        companiesList.push(company);
      }
    });
    this.setState(() => {
      return {
        companies: companiesList
      };
    });
  }

  render() {
    return (
      <React.Fragment>
        {this.state.companies.map(company => (
          <Company
            key={company.id}
            id={company.id}
            logo={company.logo}
            name={company.name}
            adress={company.adress}
            rating={company.rating}
            orders={company.orders}
            services={company.services}
          />
        ))}
      </React.Fragment>
    );
  }
}

export default CompaniesListContainer;