import React, { Component } from 'react';
import CompaniesList from './CompaniesList';
import { Consumer } from '../../context';

class CompaniesListByTypeContainer extends Component {
  render() {
    return (
      <Consumer>
        {store => {
          const companiesList = store.companies.filter(company =>
            company.services.includes(this.props.pathname)
          );
          return <CompaniesList companies={companiesList} />;
        }}
      </Consumer>
    );
  }
}

export default CompaniesListByTypeContainer;
