import React, { Component } from "react";
import { Select, Spin } from "antd";
import CompaniesList from "./CompaniesList";
import CatalogueHeader from "./CatalogueHeader";
import "./Catalogue.css";
import { connect } from "react-redux";
import { handleSortValueChange } from "actions/sortCompanies";
import { getCompaniesData } from "actions/receiveData";
import InfiniteScroll from "react-infinite-scroller";

class CompaniesCatalogue extends Component {
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
              <Select.Option value="ordersNumber">Popularity</Select.Option>
            </Select>
          </div>
        </section>

        <section>
          <InfiniteScroll
            className="loader__container"
            hasMore={this.props.hasMore}
            loader={<Spin className="inf__loader" key={this.props.page} />}
            loadMore={() => this.props.getCompaniesData(this.props.page, 5)}
          >
            <CompaniesList
              companies={this.props.companies.filter(company =>
                company.services.includes(matchPath)
              )}
            />
          </InfiniteScroll>
        </section>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    services: state.servicesData.services,
    companies: state.companiesData.companies,
    page: state.companiesData.page,
    hasMore: state.companiesData.hasMore,
    error: state.companiesData.error
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
