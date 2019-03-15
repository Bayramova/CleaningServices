import React, { Component } from "react";
import CompaniesList from "./CompaniesList";
import { connect } from "react-redux";

const mapStateToProps = state => {
  const companiesList = state.companies.filter(company =>
    company.services.includes(this.props.pathname)
  );
  return {
    companies: companiesList
  };
};

class CompaniesListByTypeContainer extends Component {
  render() {
    return <CompaniesList companies={this.props.companiesList} />;
  }
}

export default connect(mapStateToProps)(CompaniesListByTypeContainer);
