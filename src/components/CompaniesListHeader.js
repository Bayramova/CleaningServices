import React, { Component } from "react";

class CompaniesListHeader extends Component {
  render() {
    return (
      <div className="companies-list-title">
        <h1 className="companies-list__title">
          {this.props.title}
        </h1>
        <h2 className="companies-list__description">
          {this.props.description}
        </h2>
      </div>
    );
  }
}

export default CompaniesListHeader;
