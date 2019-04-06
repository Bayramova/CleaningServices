import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "./Header";
import { signOut } from "actions/userActions";

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
  signOutUser: signOut
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderContainer);
