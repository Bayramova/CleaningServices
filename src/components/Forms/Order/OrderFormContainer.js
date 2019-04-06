import React, { Component } from "react";
import { connect } from "react-redux";
import OrderForm from "./OrderForm";
import { handleFormChange } from "actions/updateFieldsState";
import { makeOrder } from "actions/userActions";

class OrderFormContainer extends Component {
  render() {
    const address = this.props.auth.isAuthenticated
      ? this.props.auth.additionalUserData.address
      : this.props.orderFormFields.address.value;
    const clientId = this.props.auth.isAuthenticated
      ? this.props.auth.additionalUserData.id
      : null;
    return (
      <OrderForm
        orderFormFields={this.props.orderFormFields}
        onChange={this.props.onChange}
        address={address}
        services={this.props.services}
        companies={this.props.companies}
        makeOrder={this.props.makeOrder}
        clientId={clientId}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    orderFormFields: state.orderFormFields,
    auth: state.auth,
    companies: state.data.companies,
    services: state.data.serviceTypes
  };
};

const mapDispatchToProps = {
  onChange: handleFormChange,
  makeOrder
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrderFormContainer);
