import React, { Component } from "react";
import { connect } from "react-redux";
import SignInForm from "./SignInForm";
import { signInUser } from "actions/authActions";
import { handleFormChange } from "actions/updateFieldsState";

class SignInFormContainer extends Component {
  render() {
    return (
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
  onChange: handleFormChange
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignInFormContainer);
