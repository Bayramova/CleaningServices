import React, { Component } from "react";
import ServiceCard from "./ServiceCard";
import "./ServiceCards.css";

class ServiceCardsList extends Component {
  render() {
    return (
      <div className="catalogue__cards">
        {this.props.services.map(serviceType => (
          <ServiceCard
            key={serviceType.id}
            id={serviceType.id}
            image={serviceType.image}
            title={serviceType.title}
            description={serviceType.description}
          />
        ))}
      </div>
    );
  }
}

export default ServiceCardsList;
