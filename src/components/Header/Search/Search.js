import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Input } from "antd";
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
    this.props.history.push({
      pathname: "/search",
      search: `?q=${this.state.query}`
    });
  };

  render() {
    return (
      <Input.Search
        placeholder="Input search text"
        onChange={this.handleChange}
        onSearch={this.handleClick}
        onPressEnter={this.handleClick}
        enterButton
      />
    );
  }
}

const mapDispatchToProps = {
  clearCompanies
};

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(Search)
);
