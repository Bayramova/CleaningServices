import React, { Component } from "react";
import CompaniesList from "./CompaniesList";
import queryString from "query-string";
import { connect } from "react-redux";
import { Select, Spin } from "antd";
import { handleSortValueChange } from "actions/sortCompanies";
import { searchCompanies } from "actions/searchCompanies";
import InfiniteScroll from "react-infinite-scroller";

class CompaniesListByQueryContainer extends Component {
  handleChange = value => {
    this.props.onChange(value);
  };

  render() {
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
              <Select.Option value="ordersNumber">Popularity</Select.Option>
            </Select>
          </div>
        </section>

        <section>
          <InfiniteScroll
            className="loader__container"
            hasMore={this.props.hasMore}
            loader={<Spin className="inf__loader" key={this.props.page} />}
            loadMore={() =>
              this.props.searchCompanies(
                queryString.parse(this.props.location.search).q.toLowerCase(),
                this.props.page,
                5
              )
            }
          >
            <CompaniesList companies={this.props.companies} />
          </InfiniteScroll>
        </section>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    companies: state.searchCompaniesResult.companies,
    page: state.searchCompaniesResult.page,
    hasMore: state.searchCompaniesResult.hasMore,
    error: state.searchCompaniesResult.error
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
