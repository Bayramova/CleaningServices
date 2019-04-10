import React, { Component } from "react";
import Company from "./Company";
import "./CompanyInfo.css";
import { connect } from "react-redux";
import { selectCompany } from "actions/makeOrder";
import { getCompaniesData } from "actions/receiveData";

class CompanyContainer extends Component {
  render() {
    console.log(this.props);
    const matchPath = this.props.match.params.company;
    const company = this.props.companies.find(
      company => company.id === parseInt(this.props.match.params.company)
    );
    const serviceTitles = company.services.map(
      id => this.props.services.find(service => service.id === id).title
    );
    return (
      <div>
        <Company
          company={company}
          services={serviceTitles}
          matchPath={matchPath}
          selectCompany={this.props.selectCompany}
          role={this.props.role}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    services: state.data.services,
    companies: state.data.companies,
    role: state.auth.userData.role
  };
};

const mapDispatchToProps = {
  selectCompany,
  getCompaniesData
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CompanyContainer);
