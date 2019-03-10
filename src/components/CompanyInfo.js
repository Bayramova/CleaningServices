import React, { Component } from "react";
import CompanyContainer from "./CompanyContainer";

class CompanyInfo extends Component {
  render() {
    const matchPath = this.props.match.params.company;
    return (
      <main className="main">
        <div className="company-info__content">
        <CompanyContainer pathname={matchPath}></CompanyContainer>
        </div>
      </main>
    );
  }
}

export default CompanyInfo;
