import React, { Component } from "react";
import { Consumer } from "../../context";
import CompaniesListHeader from "./CompaniesListHeader";

class CompaniesListHeaderContainer extends Component {
  render() {
    return (
      <Consumer>
        {store => {
          return (
            <CompaniesListHeader
              title={store.serviceTypes[this.props.pathname].title}
              description={store.serviceTypes[this.props.pathname].description}
            />
          );
        }}
      </Consumer>
    );
  }
}

export default CompaniesListHeaderContainer;
