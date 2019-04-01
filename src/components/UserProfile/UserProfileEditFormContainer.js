import React, { Component } from "react";
import { connect } from "react-redux";
import UserProfileEditForm from "./UserProfileEditForm";
import { updateUserInfo } from "../../actions/userProfileActions";
import { handleFormChange } from "../../actions/updateFieldsState";

class UserProfileEditFormContainer extends Component {
  render() {
    return (
      <UserProfileEditForm
        errors={this.props.errors}
        onChange={this.props.onChange}
        auth={this.props.auth}
        updateUserInfo={this.props.updateUserInfo}
        history={this.props.history}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth,
    errors: state.errors,
    user: state.user
  };
};

const mapDispatchToProps = {
  updateUserInfo: updateUserInfo,
  onChange: handleFormChange
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfileEditFormContainer);
