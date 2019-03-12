import React, { Component } from "react";
import { Input } from "antd";
import companies from "../../../data/companies";

class Search extends Component {
  state = {
    inputValue: ""
  };

  handleChange = event => {
    const inputValue = event.target.value;
    this.setState(() => ({ inputValue }));
  };

  render() {
    const { inputValue } = this.state;
    return (
      <Input.Search
        value={inputValue}
        onChange={this.handleChange}
        placeholder="Type of cleaning e.g. Office cleaning"
        onSearch={value => console.log(value)}
        enterButton
      />
    );
  }
}

export default Search;
