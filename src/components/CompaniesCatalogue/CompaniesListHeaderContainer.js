import React, { Component } from "react";
import CompaniesListHeader from "./CompaniesListHeader";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    serviceTypes: state.serviceTypes
  };
};

class CompaniesListHeaderContainer extends Component {
  render() {
    return (
      <CompaniesListHeader
        title={this.props.serviceTypes[this.props.pathname].title}
        description={this.props.serviceTypes[this.props.pathname].description}
      />
    );
  }
}

export default connect(mapStateToProps)(CompaniesListHeaderContainer);
