import React, { Component } from "react";
import CompaniesList from "./CompaniesList";
import queryString from "query-string";
import { connect } from "react-redux";
import { Select, Spin, Alert } from "antd";
import { handleSortValueChange } from "actions/sortCompanies";
import { getCompaniesData } from "actions/receiveData";

class CompaniesListByQueryContainer extends Component {
  componentDidMount() {
    this.props.getCompaniesData();
  }

  handleChange = value => {
    this.props.onChange(value);
  };

  render() {
    const { loadingCompanies, error } = this.props;
    const query = queryString.parse(this.props.location.search).q.toLowerCase();
    const service = this.props.services.find(service =>
      service.title.toLowerCase().includes(query)
    );
    const serviceId = service ? service.id : "";
    const filtered = this.props.companies.filter(
      company =>
        company.name.toLowerCase().includes(query) ||
        company.services.includes(serviceId)
    );
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
              <CompaniesList companies={filtered} />
            </section>
          </div>
        )}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    services: state.data.services,
    companies: state.data.companies,
    loadingCompanies: state.data.loadingCompanies,
    error: state.data.error
  };
};

const mapDispatchToProps = {
  onChange: handleSortValueChange,
  getCompaniesData
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CompaniesListByQueryContainer);
