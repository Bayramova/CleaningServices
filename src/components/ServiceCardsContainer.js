import React, { Component } from "react";
import ServiceCard from "./ServiceCard";
import data from "../data/service_types.js";

class ServiceCardsContainer extends Component {
  state = {
    cards: []
  };

  async componentDidMount() {
    this.setState(() => {
      return {
        cards: data
      };
    });
  }

  render() {
    return (
      <React.Fragment>
        {this.state.cards.map(card => (
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
