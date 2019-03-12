import React, { Component } from "react";
import CompanyContainer from "./CompanyContainer";
import "./CompanyInfo.css";

class CompanyInfo extends Component {
  render() {
    const matchPath = this.props.match.params.company;
    return (
      <main className="main">
        <div>
          <CompanyContainer pathname={matchPath} />
        </div>
      </main>
    );
  }
}

export default CompanyInfo;
