import React, { Component } from "react";
import CompaniesList from "./CompaniesList";
import queryString from "query-string";
import { connect } from "react-redux";
import { Select } from "antd";
import { handleSortValueChange } from "../../actions/sortCompanies";

class CompaniesListByQueryContainer extends Component {
  handleChange = value => {
    this.props.onChange(value);
  };

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
    return (
      <div className="companies-list__container">
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
          <CompaniesList companies={filtered} />
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
)(CompaniesListByQueryContainer);
