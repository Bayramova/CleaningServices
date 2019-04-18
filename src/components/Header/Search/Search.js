import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Input, Icon } from "antd";
import { connect } from "react-redux";
import { searchCompanies } from "actions/searchCompanies";

class Search extends Component {
  state = {
    query: ""
  };

  handleChange = e => {
    const query = e.target.value;
    this.setState(() => ({ query }));
  };

  handleClick = e => {
    this.props.searchCompanies(this.state.query.toLowerCase(), 1, 5);
  };

  render() {
    return (
      <Input.Search
        placeholder="Input search text"
        onChange={this.handleChange}
        onSearch={this.handleClick}
        enterButton={
          <Link
            to={{
              pathname: "/search",
              search: `?q=${this.state.query}`
            }}
          >
            <Icon type="search" style={{ fontSize: "16px" }} />
          </Link>
        }
      />
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
  searchCompanies
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
// export default Search;
