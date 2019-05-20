import React, { Component } from "react";
import { connect } from "react-redux";
import ResetPasswordForm from "./ResetPasswordForm";
import { reset, resend, deleteErrors } from "actions/userActions";
import { handleFormChange } from "actions/updateFieldsState";

class ResetPasswordFormContainer extends Component {
  componentWillUnmount() {
    this.props.deleteErrors();
  }

  render() {
    return (
      <ResetPasswordForm
        auth={this.props.auth}
        onChange={this.props.onChange}
        signUpUser={this.props.signUpUser}
        resetPassword={this.props.resetPassword}
        resendEmail={this.props.resendEmail}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

const mapDispatchToProps = {
  resetPassword: reset,
  resendEmail: resend,
  onChange: handleFormChange,
  deleteErrors: deleteErrors
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ResetPasswordFormContainer);
