import React, { Component } from "react";
import { Consumer } from "../../../context";

import Search from "./Search";

class SearchContainer extends Component {
  render() {
    return (
      <Consumer>{store => <Search companies={store.companies} />}</Consumer>
    );
  }
}

export default SearchContainer;
