import React, { Component } from "react";
import { connect } from "react-redux";
import OrderForm from "./OrderForm";
import { handleFormChange } from "actions/updateFieldsState";
import { order } from "actions/orderActions";

class OrderFormContainer extends Component {
  render() {
    return (
      <OrderForm
        auth={this.props.auth}
        orderFormFields={this.props.orderFormFields}
        onChange={this.props.onChange}
        services={this.props.services}
        companies={this.props.companies}
        company={this.props.company}
        makeOrder={this.props.makeOrder}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    orderFormFields: state.orderFormFields,
    auth: state.auth,
    companies: state.companiesData.companies,
    company: state.companyInfo.company,
    services: state.servicesData.services
  };
};

const mapDispatchToProps = {
  onChange: handleFormChange,
  makeOrder: order
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrderFormContainer);
