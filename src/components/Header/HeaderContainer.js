import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "./Header";
import { signOutUser } from "actions/authActions";

class HeaderContainer extends Component {
  render() {
    return (
      <Header
        auth={this.props.auth}
        signOutUser={this.props.signOutUser}
        history={this.props.history}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

const mapDispatchToProps = {
  signOutUser: signOutUser
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderContainer);
