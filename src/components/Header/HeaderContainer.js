import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "./Header";
import { logoutUser } from "../../actions/authActions";

class HeaderContainer extends Component {
  render() {
    return (
      <Header
        auth={this.props.auth}
        logoutUser={this.props.logoutUser}
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
  logoutUser: logoutUser
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderContainer);
