import React, { Component } from "react";
import Company from "./Company";
import "./CompanyInfo.css";
import { connect } from "react-redux";
import { selectCompany } from "actions/makeOrder";
import { getCompaniesData, getClientsData } from "actions/receiveData";
import { fetchFeedbacksInfo } from "actions/userActions";
import { Spin, Alert } from "antd";

class CompanyContainer extends Component {
  componentDidMount() {
    this.props.getCompaniesData();
    this.props.getClientsData();
    this.props.fetchFeedbacksInfo(this.props.match.params.company);
  }
  render() {
    const { loadingCompanies, loadingClients, error } = this.props;
    const matchPath = this.props.match.params.company;
    const company = this.props.companies.find(
      company => company.id === parseInt(this.props.match.params.company)
    );
    return (
      <React.Fragment>
        {loadingCompanies || loadingClients ? (
          <Spin className="app__loader" size="large" tip="Loading..." />
        ) : error ? (
          <Alert className="error__message" message={error} type="error" />
        ) : (
          <div>
            <Company
              company={company}
              feedbacks={this.props.feedbacks}
              services={this.props.services}
              clients={this.props.clients}
              matchPath={matchPath}
              selectCompany={this.props.selectCompany}
              role={this.props.role}
            />
          </div>
        )}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    services: state.data.services,
    companies: state.data.companies,
    clients: state.data.clients,
    feedbacks: state.data.feedbacks,
    role: state.auth.userData.role,
    loadingCompanies: state.data.loadingCompanies,
    loadingClients: state.data.loadingClients,
    error: state.data.error
  };
};

const mapDispatchToProps = {
  selectCompany,
  getCompaniesData,
  getClientsData,
  fetchFeedbacksInfo
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CompanyContainer);
