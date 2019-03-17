import React, { Component } from 'react';
import CompaniesList from './CompaniesList';
import queryString from 'query-string';
import { connect } from 'react-redux';

class CompaniesListByQueryContainer extends Component {
  render() {
    const query = queryString.parse(this.props.location.search).q.toLowerCase();
    const filtered = this.props.companies.filter(
      company =>
        company.name.toLowerCase().includes(query) ||
        company.services.includes(
          Object.keys(this.props.serviceTypes).find(service =>
            this.props.serviceTypes[service].title.toLowerCase().includes(query)
          )
        )
    );
    return <CompaniesList companies={filtered} />;
  }
}

const mapStateToProps = state => {
  return {
    serviceTypes: state.data.serviceTypes,
    companies: state.data.companies
  };
};

export default connect(mapStateToProps)(CompaniesListByQueryContainer);
