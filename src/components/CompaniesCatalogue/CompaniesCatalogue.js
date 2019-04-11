import React, { Component } from "react";
import { Select } from "antd";
import CompaniesList from "./CompaniesList";
import CatalogueHeader from "./CatalogueHeader";
import "./Catalogue.css";
import { connect } from "react-redux";
import { handleSortValueChange } from "actions/sortCompanies";
import { getCompaniesData } from "actions/receiveData";

class CompaniesCatalogue extends Component {
  componentDidMount() {
    // this.props.getCompaniesData();
  }

  handleChange = value => {
    this.props.onChange(value);
  };

  render() {
    const matchPath = this.props.match.params.titleId;
    const service = this.props.services.find(
      service => service.id === matchPath
    );
    return (
      <div className="companies-list__container">
        <section>
          <CatalogueHeader
            title={service.title}
            description={service.description}
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
    services: state.data.services,
    companies: state.data.companies
  };
};

const mapDispatchToProps = {
  onChange: handleSortValueChange,
  getCompaniesData
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CompaniesCatalogue);
