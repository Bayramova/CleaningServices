import React, { Component } from "react";
import Company from "./Company";
import "./CompanyInfo.css";
import { connect } from "react-redux";
import { selectCompany } from "actions/makeOrder";
import { getCompaniesData } from "actions/receiveData";
import { fetchFeedbacksInfo } from "actions/userActions";

class CompanyContainer extends Component {
  componentDidMount() {
    this.props.fetchFeedbacksInfo(this.props.match.params.company);
  }
  render() {
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
          feedbacks={this.props.feedbacks}
          services={serviceTitles}
          clients={this.props.clients}
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
    clients: state.data.clients,
    feedbacks: state.data.feedbacks,
    role: state.auth.userData.role
  };
};

const mapDispatchToProps = {
  selectCompany,
  getCompaniesData,
  fetchFeedbacksInfo
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CompanyContainer);
