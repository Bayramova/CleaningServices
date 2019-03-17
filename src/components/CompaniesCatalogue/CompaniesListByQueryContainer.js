import React, { Component } from 'react';
import CompaniesList from './CompaniesList';
import { Consumer } from '../../context';
import queryString from 'query-string';

class CompaniesListByQueryContainer extends Component {
  render() {
    const query = queryString.parse(this.props.location.search).q.toLowerCase();
    return (
      <Consumer>
        {store => {
          const filtered = store.companies.filter(
            company =>
              company.name.toLowerCase().includes(query) ||
              company.services.includes(
                Object.keys(store.serviceTypes).find(service =>
                  store.serviceTypes[service].title
                    .toLowerCase()
                    .includes(query)
                )
              )
          );
          return <CompaniesList companies={filtered} />;
        }}
      </Consumer>
    );
  }
}

export default CompaniesListByQueryContainer;
