import React, { Component } from "react";
import { connect } from "react-redux";
import OrderForm from "./OrderForm";
import { handleFormChange } from "actions/updateFieldsState";

class OrderFormContainer extends Component {
  render() {
    let buttonText = "";
    //let company = {};
    if (this.props.location.state.fromSelectedCompany) {
      buttonText = "Place order";
      // company = this.props.companies.find(
      //   company => company.id == this.props.location.state.companyId
      // );
    } else {
      buttonText = "Show options";
    }
    const address = this.props.auth.isAuthenticated
      ? this.props.auth.additionalUserData.address
      : this.props.orderFormFields.address.value;
    return (
      <OrderForm
        orderFormFields={this.props.orderFormFields}
        onChange={this.props.onChange}
        buttonText={buttonText}
        address={address}
        services={this.props.services}
        // company={company}
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
  onChange: handleFormChange
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrderFormContainer);
