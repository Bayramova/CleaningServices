import React, { Component } from "react";
import { connect } from "react-redux";
import SignInForm from "./SignInForm";
import { signInUser, deleteErrors } from "../../../actions/authActions";
import { handleFormChange } from "../../../actions/updateFieldsState";
import { Redirect } from "react-router-dom";

class SignInFormContainer extends Component {
  componentWillUnmount() {
    this.props.deleteErrors();
  }
  render() {
    return this.props.auth.isAuthenticated ? (
      <Redirect to="/" />
    ) : (
      <SignInForm
        signInFormFields={this.props.signInFormFields}
        auth={this.props.auth}
        errors={this.props.errors}
        onChange={this.props.onChange}
        signInUser={this.props.signInUser}
        history={this.props.history}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    signInFormFields: state.signInFormFields,
    auth: state.auth,
    errors: state.errors
  };
};

const mapDispatchToProps = {
  signInUser: signInUser,
  onChange: handleFormChange,
  deleteErrors: deleteErrors
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignInFormContainer);
