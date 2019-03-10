import React, { Component } from "react";
import serviceTypes from "./data/service_types.js";
import companies from "./data/companies";

const Context = React.createContext();

class Provider extends Component {
  state = {
    loadingData: true,
    serviceTypes: {},
    companies: [],
    orderFormFields: {
      address: {
        value: ""
      },
      serviceType: {
        value: ""
      },
      bigRooms: {
        value: ""
      },
      smallRooms: {
        value: ""
      },
      bathrooms: {
        value: ""
      },
      daysOfCleaning: {
        value: []
      },
      startTimeOfCleaning: {
        value: ""
      },
      cleaningFrequency: {
        value: ""
      },
      phone: {
        value: ""
      },
      prefix: {
        value: ""
      }
    }
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

  handleOrderFormChange = changedFields => {
    this.setState(({ orderFormFields }) => ({
      orderFormFields: { ...orderFormFields, ...changedFields }
    }));
  };


  render() {
    return (
      <Context.Provider
        value={{
          ...this.state,
          handleOrderFormChange: this.handleOrderFormChange
        }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

const Consumer = Context.Consumer;

export { Provider, Consumer };
