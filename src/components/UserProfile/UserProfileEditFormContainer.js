import React, { Component } from "react";
import { connect } from "react-redux";
import UserProfileEditForm from "./UserProfileEditForm";
import { update, deleteErrors, signOut } from "actions/userActions";
import { handleFormChange } from "actions/updateFieldsState";

class UserProfileEditFormContainer extends Component {
  componentWillUnmount() {
    this.props.deleteErrors();
  }

  render() {
    return (
      <UserProfileEditForm
        errors={this.props.auth.errors}
        onChange={this.props.onChange}
        auth={this.props.auth}
        updateUser={this.props.updateUser}
        signOut={this.props.signOut}
        history={this.props.history}
        userData={this.props.auth.additionalUserData}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth,
    errors: state.errors
  };
};

const mapDispatchToProps = {
  updateUser: update,
  onChange: handleFormChange,
  deleteErrors: deleteErrors,
  signOut: signOut
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfileEditFormContainer);
