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
    services: state.data.services
  };
};

export default connect(mapStateToProps)(ServiceCardsContainer);
