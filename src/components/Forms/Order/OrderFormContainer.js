import React, { Component } from "react";
import { connect } from "react-redux";
import OrderForm from "./OrderForm";
import { handleFormChange } from "actions/updateFieldsState";

class OrderFormContainer extends Component {
  render() {
    const buttonText = this.props.location.state.fromSelectedCompany
      ? "Place Order"
      : "Show Options";
    return (
      <OrderForm
        orderFormFields={this.props.orderFormFields}
        onChange={this.props.onChange}
        buttonText={buttonText}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    orderFormFields: state.orderFormFields
  };
};

const mapDispatchToProps = {
  onChange: handleFormChange
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrderFormContainer);
