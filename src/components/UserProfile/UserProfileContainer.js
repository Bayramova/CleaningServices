import React, { Component } from "react";
import { connect } from "react-redux";
import { cancelNewOrder } from "../../actions/userActions";
import UserProfile from "./UserProfile";

class UserProfileContainer extends Component {
  render() {
    return (
      <UserProfile
        auth={this.props.auth}
        userData={this.props.auth.additionalUserData}
        orders={this.props.auth.orders}
        companies={this.props.companies}
        cancelOrder={this.props.cancelOrder}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth,
    userData: state.userData,
    companies: state.data.companies
  };
};

const mapDispatchToProps = {
  cancelOrder: cancelNewOrder
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfileContainer);
