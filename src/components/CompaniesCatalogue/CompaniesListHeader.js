import React, { Component } from "react";
import "./Catalogue.css";

class CompaniesListHeader extends Component {
  render() {
    return (
      <div>
        <h1 className="companies-list__title">{this.props.title}</h1>
        <h2 className="companies-list__description">
          {this.props.description}
        </h2>
      </div>
    );
  }
}

export default CompaniesListHeader;
