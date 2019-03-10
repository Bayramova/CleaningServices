import React, { Component } from "react";
import serviceTypes from "./data/service_types.js";
import companies from "./data/companies";

const Context = React.createContext();

class Provider extends Component {
  state = {
    loadingData: true,
    serviceTypes: {},
    companies: []
  };

  componentDidMount() {
    this.setState(() => {
      return {
        serviceTypes,
        companies,
        loadingData: false
      };
    });
  }

  render() {
    return (
      <Context.Provider value={{
        ...this.state,
      }}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

const Consumer = Context.Consumer;

export { Provider, Consumer };
