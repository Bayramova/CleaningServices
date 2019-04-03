import React, { Component } from "react";
import { connect } from "react-redux";
import SignUpForm from "./SignUpForm";
import { signUp, deleteErrors } from "actions/userActions";
import { handleFormChange } from "actions/updateFieldsState";

class SignUpFormContainer extends Component {
  componentWillUnmount() {
    this.props.deleteErrors();
  }

  render() {
    return (
      <SignUpForm
        signUpFormFields={this.props.signUpFormFields}
        auth={this.props.auth}
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
    auth: state.auth
  };
};

const mapDispatchToProps = {
  signUpUser: signUp,
  onChange: handleFormChange,
  deleteErrors: deleteErrors
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUpFormContainer);
