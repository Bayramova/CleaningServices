import React, { Component } from "react";
import { connect } from "react-redux";
import { cancelNewOrder } from "actions/userActions";
import { changeOrder } from "actions/userActions";
import UserProfile from "./UserProfile";

class UserProfileContainer extends Component {
  render() {
    return (
      <UserProfile
        auth={this.props.auth}
        userData={this.props.auth.additionalUserData}
        orders={this.props.auth.orders}
        companies={this.props.companies}
        clients={this.props.clients}
        cancelOrder={this.props.cancelOrder}
        changeOrderStatus={this.props.changeOrderStatus}
        history={this.props.history}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth,
    userData: state.userData,
    companies: state.data.companies,
    clients: state.data.clients
  };
};

const mapDispatchToProps = {
  cancelOrder: cancelNewOrder,
  changeOrderStatus: changeOrder
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfileContainer);
