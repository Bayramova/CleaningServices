import React, { Component } from "react";
import { connect } from "react-redux";
import SignUpForm from "./SignUpForm";
import { registerUser } from "../../../actions/authActions";
import { handleFormChange } from "../../../actions/updateFieldsState";

class SignInFormContainer extends Component {
  render() {
    return (
      <SignUpForm
        signUpFormFields={this.props.signUpFormFields}
        errors={this.props.errors}
        onChange={this.props.onChange}
        registerUser={this.props.registerUser}
        history={this.props.history}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    signUpFormFields: state.signUpFormFields
  };
};

const mapDispatchToProps = {
  registerUser: registerUser,
  onChange: handleFormChange
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignInFormContainer);
