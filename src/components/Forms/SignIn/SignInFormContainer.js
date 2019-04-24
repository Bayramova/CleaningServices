import React, { Component } from "react";
import { connect } from "react-redux";
import SignInForm from "./SignInForm";
import { signIn, deleteErrors } from "actions/userActions";
import { handleFormChange } from "actions/updateFieldsState";
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
        auth={this.props.auth}
        onChange={this.props.onChange}
        signInUser={this.props.signInUser}
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
  signInUser: signIn,
  onChange: handleFormChange,
  deleteErrors: deleteErrors
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignInFormContainer);
