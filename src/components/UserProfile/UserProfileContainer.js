import React, { Component } from "react";
import { connect } from "react-redux";
import { cancelNewOrder, handleSortValueChange } from "actions/orderActions";
import { editOrderStatus, getOrdersData } from "actions/orderActions";
import UserProfile from "./UserProfile";
import { Spin, Alert } from "antd";

class UserProfileContainer extends Component {
  componentDidMount() {
    this.props.getOrdersData(this.props.auth.userData.id);
  }
  render() {
    const { loadingOrders, error } = this.props;
    return (
      <React.Fragment>
        {loadingOrders ? (
          <Spin className="app__loader" size="large" tip="Loading..." />
        ) : error ? (
          <Alert className="error__message" message={error} type="error" />
        ) : (
          <UserProfile
            auth={this.props.auth}
            userData={this.props.auth.additionalUserData}
            orders={this.props.auth.userOrders.orders}
            cancelOrder={this.props.cancelOrder}
            changeOrderStatus={this.props.changeOrderStatus}
            onChange={this.props.onChange}
            history={this.props.history}
          />
        )}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth,
    loadingOrders: state.auth.userOrders.loadingOrders,
    error: state.auth.userOrders.error
  };
};

const mapDispatchToProps = {
  cancelOrder: cancelNewOrder,
  changeOrderStatus: editOrderStatus,
  getOrdersData,
  onChange: handleSortValueChange
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfileContainer);
