import React, { Component } from "react";
import { connect } from "react-redux";
import FeedbackForm from "./FeedbackForm";
import { handleFormChange } from "actions/updateFieldsState";
import { leaveFeedback } from "actions/userActions";

class FeedbackFormContainer extends Component {
  render() {
    return (
      <FeedbackForm
        onChange={this.props.onChange}
        leaveFeedback={this.props.leaveFeedback}
        clientId={this.props.location.state.clientId}
        companyId={this.props.location.state.companyId}
        company={this.props.location.state.company_name}
        history={this.props.history}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    orderFormFields: state.orderFormFields,
    auth: state.auth,
    companies: state.data.companies,
    services: state.data.services
  };
};

const mapDispatchToProps = {
  onChange: handleFormChange,
  leaveFeedback
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FeedbackFormContainer);
