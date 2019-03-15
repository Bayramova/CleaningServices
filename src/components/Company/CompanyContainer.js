import React, { Component } from "react";
import Company from "./Company";
import { connect } from "react-redux";

const mapStateToProps = state => {
  const company = state.companies.find(
    company => company.id === this.props.pathname
  );
  const serviceTitles = company.services.map(
    id => state.serviceTypes[id].title
  );
  return {
    company,
    services: serviceTitles
  };
};

class CompanyContainer extends Component {
  render() {
    return (
      <Company
        company={this.props.company}
        services={this.props.serviceTitles}
      />
    );
  }
}

export default connect(mapStateToProps)(CompanyContainer);
