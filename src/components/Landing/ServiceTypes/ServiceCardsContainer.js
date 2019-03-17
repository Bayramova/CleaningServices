import React, { Component } from 'react';
import ServiceCardsList from './ServiceCardsList';
import { connect } from 'react-redux';

class ServiceCardsContainer extends Component {
  render() {
    return (
      <ServiceCardsList services={Object.values(this.props.serviceTypes)} />
    );
  }
}

const mapStateToProps = state => {
  return {
    serviceTypes: state.data.serviceTypes
  };
};

export default connect(mapStateToProps)(ServiceCardsContainer);
