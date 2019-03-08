import React, { Component } from "react";
import ServiceCard from "./ServiceCard";
import serviceTypes from "../data/service_types.js";

class ServiceCardsContainer extends Component {
  state = {
    cards: {}
  };

  componentDidMount() {
    this.setState(() => {
      return {
        cards: serviceTypes
      };
    });
  }

  render() {
    return (
      <React.Fragment>
        {Object.values(this.state.cards).map(card => (
          <ServiceCard
            key={card.id}
            id={card.id}
            image={card.image}
            title={card.title}
            description={card.description}
          />
        ))}
      </React.Fragment>
    );
  }
}

export default ServiceCardsContainer;
