import React, { Component } from "react";
import ServiceCardsList from "./ServiceCardsList";
import { connect } from "react-redux";

class ServiceCardsContainer extends Component {
  render() {
    return <ServiceCardsList services={Object.values(this.props.services)} />;
  }
}

const mapStateToProps = state => {
  return {
    services: state.servicesData.services
  };
};

export default connect(mapStateToProps)(ServiceCardsContainer);
