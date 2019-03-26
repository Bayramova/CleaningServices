import React, { Component } from "react";
import { connect } from "react-redux";
import SignInForm from "./SignInForm";
import { loginUser } from "../../../actions/authActions";
import { handleFormChange } from "../../../actions/updateFieldsState";

class SignInFormContainer extends Component {
  render() {
    return (
      <SignInForm
        signInFormFields={this.props.signInFormFields}
        auth={this.props.auth}
        errors={this.props.errors}
        onChange={this.props.onChange}
        loginUser={this.props.loginUser}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    signInFormFields: state.signInFormFields,
    auth: state.auth
  };
};

const mapDispatchToProps = {
  loginUser: loginUser,
  onChange: handleFormChange
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignInFormContainer);
