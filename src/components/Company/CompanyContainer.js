import React, { Component } from "react";
import Company from "./Company";
import "./CompanyInfo.css";
import { connect } from "react-redux";
import { selectCompany } from "actions/orderActions";
import { getCompanyData, fetchFeedbacksInfo } from "actions/receiveCompanyInfo";
import { Spin, Alert } from "antd";

class CompanyContainer extends Component {
  componentDidMount() {
    this.props.getCompanyData(this.props.match.params.company);
    this.props.fetchFeedbacksInfo(this.props.match.params.company);
  }
  render() {
    const { loadingCompany, loadingFeedbacks, error } = this.props;
    const matchPath = this.props.match.params.company;
    return (
      <React.Fragment>
        {loadingCompany || loadingFeedbacks ? (
          <Spin className="app__loader" size="large" tip="Loading..." />
        ) : error ? (
          <Alert className="error__message" message={error} type="error" />
        ) : (
          <div>
            <Company
              company={this.props.company}
              feedbacks={this.props.feedbacks}
              services={this.props.services}
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
    services: state.servicesData.services,
    company: state.companyInfo.company,
    feedbacks: state.companyInfo.feedbacks,
    role: state.auth.userData.role,
    loadingCompany: state.companyInfo.loadingCompany,
    loadingFeedbacks: state.companyInfo.loadingFeedbacks,
    error: state.companyInfo.error
  };
};

const mapDispatchToProps = {
  selectCompany,
  getCompanyData,
  fetchFeedbacksInfo
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CompanyContainer);
