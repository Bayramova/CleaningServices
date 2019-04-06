import React, { Component } from "react";
import { connect } from "react-redux";
import UserProfile from "./UserProfile";

class UserProfileContainer extends Component {
  render() {
    return (
      <UserProfile
        auth={this.props.auth}
        userData={this.props.auth.additionalUserData}
        orders={this.props.auth.orders}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth,
    userData: state.userData
  };
};

export default connect(mapStateToProps)(UserProfileContainer);
