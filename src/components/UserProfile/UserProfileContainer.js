import React, { Component } from "react";
import { connect } from "react-redux";
import { cancelNewOrder } from "actions/userActions";
import { getClientsData } from "actions/receiveData";
import { changeOrder, fetchOrdersInfo } from "actions/userActions";
import UserProfile from "./UserProfile";

class UserProfileContainer extends Component {
  componentDidMount() {
    // this.props.getClientsData();
    this.props.fetchOrdersInfo(this.props.auth.userData.id);
  }
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
  changeOrderStatus: changeOrder,
  fetchOrdersInfo,
  getClientsData
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfileContainer);
