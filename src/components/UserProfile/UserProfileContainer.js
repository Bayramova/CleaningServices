import React, { Component } from "react";
import { connect } from "react-redux";
import UserProfile from "./UserProfile";

class UserProfileContainer extends Component {
  render() {
    return <UserProfile role={this.props.auth.user.role} />;
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

export default connect(mapStateToProps)(UserProfileContainer);
