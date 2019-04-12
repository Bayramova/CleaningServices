import React, { Component } from "react";
import { connect } from "react-redux";
import { cancelNewOrder } from "actions/userActions";
import { getCompaniesData, getClientsData } from "actions/receiveData";
import { changeOrder, fetchOrdersInfo } from "actions/userActions";
import UserProfile from "./UserProfile";
import { Spin, Alert } from "antd";

class UserProfileContainer extends Component {
  componentDidMount() {
    this.props.getCompaniesData();
    this.props.getClientsData();
    this.props.fetchOrdersInfo(this.props.auth.userData.id);
  }
  render() {
    const { loadingCompanies, loadingClients, error } = this.props;
    return (
      <React.Fragment>
        {loadingCompanies || loadingClients ? (
          <Spin className="app__loader" size="large" tip="Loading..." />
        ) : error ? (
          <Alert className="error__message" message={error} type="error" />
        ) : (
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
        )}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth,
    userData: state.userData,
    companies: state.data.companies,
    clients: state.data.clients,
    loadingCompanies: state.data.loadingCompanies,
    loadingClients: state.data.loadingClients,
    error: state.data.error
  };
};

const mapDispatchToProps = {
  cancelOrder: cancelNewOrder,
  changeOrderStatus: changeOrder,
  fetchOrdersInfo,
  getCompaniesData,
  getClientsData
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfileContainer);
