import React, { Component } from "react";
import CompaniesListItem from "./CompaniesListItem";
import "./Catalogue.css";

class CompaniesList extends Component {
  render() {
    return (
      <div className="catalogue__cards">
        {this.props.companies.map(company => (
          <CompaniesListItem
            key={company.id}
            id={company.id}
            logo={company.logo}
            name={company.name}
            address={company.address}
            rating={company.rating / company.reviewsNumber}
            orders={company.orders}
            services={company.services}
          />
        ))}
      </div>
    );
  }
}

export default CompaniesList;
