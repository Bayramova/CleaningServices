import React, { Component } from "react";
import CompaniesList from "./CompaniesList";
import queryString from "query-string";
import { connect } from "react-redux";
import { Select, Spin, Alert } from "antd";
import { handleSortValueChange } from "actions/sortCompanies";
import { searchCompanies } from "actions/searchCompanies";

class CompaniesListByQueryContainer extends Component {
  componentDidMount() {
    this.props.searchCompanies(
      queryString.parse(this.props.location.search).q.toLowerCase()
    );
  }

  handleChange = value => {
    this.props.onChange(value);
  };

  render() {
    const { loadingCompanies, error } = this.props;
    return (
      <React.Fragment>
        {loadingCompanies ? (
          <Spin className="app__loader" size="large" tip="Loading..." />
        ) : error ? (
          <Alert className="error__message" message={error} type="error" />
        ) : (
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
              <CompaniesList companies={this.props.companies} />
            </section>
          </div>
        )}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    services: state.servicesData,
    companies: state.companiesDataData,
    loadingCompanies: state.data.loadingCompanies,
    error: state.data.error
  };
};

const mapDispatchToProps = {
  onChange: handleSortValueChange,
  searchCompanies
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CompaniesListByQueryContainer);
