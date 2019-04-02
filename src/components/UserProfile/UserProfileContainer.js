import React, { Component } from "react";
import { connect } from "react-redux";
import UserProfile from "./UserProfile";

class UserProfileContainer extends Component {
  render() {
    return <UserProfile auth={this.props.auth} />;
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

export default connect(mapStateToProps)(UserProfileContainer);
