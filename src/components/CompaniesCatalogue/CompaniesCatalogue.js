import React, { Component } from 'react';
import { Select } from 'antd';
import CompaniesList from './CompaniesList';
import CatalogueHeader from './CatalogueHeader';
import './Catalogue.css';
import { connect } from 'react-redux';
import { handleSortValueChange } from '../../actions/sortCompanies';

class CompaniesCatalogue extends Component {
  handleChange = value => {
    this.props.onChange(value);
  };

  render() {
    const matchPath = this.props.match.params.titleId;
    return (
      <div className="companies-list__container">
        <section>
          <CatalogueHeader
            title={this.props.serviceTypes[matchPath].title}
            description={this.props.serviceTypes[matchPath].description}
          />
        </section>

        <section>
          <div className="companies-list__navigation">
            <Select
              defaultValue="Sort by"
              style={{ width: 120 }}
              onChange={this.handleChange}
            >
              <Select.Option value="rating">Rating</Select.Option>
              <Select.Option value="orders">Popularity</Select.Option>
            </Select>
          </div>
        </section>

        <section>
          <CompaniesList
            companies={this.props.companies.filter(company =>
              company.services.includes(matchPath)
            )}
          />
        </section>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    serviceTypes: state.data.serviceTypes,
    companies: state.data.companies
  };
};

const mapDispatchToProps = {
  onChange: handleSortValueChange
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CompaniesCatalogue);
