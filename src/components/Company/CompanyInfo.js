import React, { Component } from 'react';
import CompanyContainer from './CompanyContainer';
import './CompanyInfo.css';

class CompanyInfo extends Component {
  render() {
    const matchPath = this.props.match.params.company;
    return (
      <div>
        <CompanyContainer pathname={matchPath} />
      </div>
    );
  }
}

export default CompanyInfo;
