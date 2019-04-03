import React, { Component } from "react";
import { connect } from "react-redux";
import OrderForm from "./OrderForm";
import { handleFormChange } from "actions/updateFieldsState";

class OrderFormContainer extends Component {
  render() {
    const buttonText = this.props.location.state.fromSelectedCompany
      ? "Place Order"
      : "Show Options";
    const address = this.props.auth.isAuthenticated
      ? this.props.auth.additionalUserData.address
      : this.props.orderFormFields.address.value;
    return (
      <OrderForm
        orderFormFields={this.props.orderFormFields}
        onChange={this.props.onChange}
        buttonText={buttonText}
        address={address}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    orderFormFields: state.orderFormFields,
    auth: state.auth
  };
};

const mapDispatchToProps = {
  onChange: handleFormChange
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrderFormContainer);
