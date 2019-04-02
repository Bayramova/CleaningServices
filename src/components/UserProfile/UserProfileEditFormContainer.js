import React, { Component } from "react";
import { connect } from "react-redux";
import UserProfileEditForm from "./UserProfileEditForm";
import { updateUser } from "actions/userProfileActions";
import { handleFormChange } from "actions/updateFieldsState";

class UserProfileEditFormContainer extends Component {
  render() {
    return (
      <UserProfileEditForm
        errors={this.props.errors}
        onChange={this.props.onChange}
        auth={this.props.auth}
        updateUser={this.props.updateUser}
        history={this.props.history}
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
  updateUser: updateUser,
  onChange: handleFormChange
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfileEditFormContainer);
