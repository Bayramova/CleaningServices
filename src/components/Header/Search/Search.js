import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Input, Icon } from "antd";

class Search extends Component {
  state = {
    query: ""
  };

  handleChange = e => {
    const query = e.target.value;
    this.setState(() => ({ query }));
  };

  render() {
    return (
      <Input.Search
        placeholder="Input search text"
        onChange={this.handleChange}
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

export default Search;
