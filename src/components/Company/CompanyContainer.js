/* eslint-disable eqeqeq */
import React, { Component } from "react";
import Company from "./Company";
import "./CompanyInfo.css";
import { connect } from "react-redux";
import { selectCompany } from "actions/makeOrder";

class CompanyContainer extends Component {
  render() {
    const matchPath = this.props.match.params.company;
    const company = this.props.companies.find(
      company => company.id == this.props.match.params.company
    );
    const serviceTitles = company.services.map(
      id => this.props.serviceTypes.find(service => service.id === id).title
    );
    return (
      <div>
        <Company
          company={company}
          services={serviceTitles}
          matchPath={matchPath}
          selectCompany={this.props.selectCompany}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    serviceTypes: state.data.serviceTypes,
    companies: state.data.companies
  };
};

const mapDispatchToProps = {
  selectCompany
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CompanyContainer);
