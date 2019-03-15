import React, { Component } from "react";
import ServiceCardsList from "./ServiceCardsList";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    serviceTypes: state.serviceTypes
  };
};

class ServiceCardsContainer extends Component {
  render() {
    return <ServiceCardsList services={this.props.serviceTypes} />;
  }
}

export default connect(mapStateToProps)(ServiceCardsContainer);
