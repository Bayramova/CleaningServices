import React, { Component } from "react";
import { connect } from "react-redux";
import SignUpForm from "./SignUpForm";
import { signUpUser } from "actions/authActions";
import { handleFormChange } from "actions/updateFieldsState";

class SignInFormContainer extends Component {
  render() {
    return (
      <SignUpForm
        signUpFormFields={this.props.signUpFormFields}
        errors={this.props.errors}
        onChange={this.props.onChange}
        signUpUser={this.props.signUpUser}
        history={this.props.history}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    signUpFormFields: state.signUpFormFields,
    errors: state.errors
  };
};

const mapDispatchToProps = {
  signUpUser: signUpUser,
  onChange: handleFormChange
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignInFormContainer);
