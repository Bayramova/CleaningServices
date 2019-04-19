import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Input, Icon } from "antd";
import { connect } from "react-redux";
import { clearCompanies } from "actions/searchCompanies";

class Search extends Component {
  state = {
    query: ""
  };

  handleChange = e => {
    const query = e.target.value;
    this.setState(() => ({ query }));
  };

  handleClick = e => {
    this.props.clearCompanies();
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

const mapDispatchToProps = {
  clearCompanies
};

export default connect(
  undefined,
  mapDispatchToProps
)(Search);
// export default Search;
