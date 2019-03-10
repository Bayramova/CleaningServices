import React, { Component } from "react";
import Company from "./CompaniesListItem";

class CompaniesList extends Component {
  render() {
    return (
      <div className="catalogue__cards">
        {this.props.companies.map(company => (
          <Company
            key={company.id}
            id={company.id}
            logo={company.logo}
            name={company.name}
            address={company.address}
            rating={company.rating}
            orders={company.orders}
            services={company.services}
          />
        ))}
      </div>
    );
  }
}

export default CompaniesList;
