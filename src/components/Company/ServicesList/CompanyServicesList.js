import React, { Component } from "react";
import "./ServicesList.css";

class CompanyServicesList extends Component {
  render() {
    return (
      <ul className="services-list">
        {this.props.services.map(title => {
          return (
            <li key={title} className="services-list__item">
              {title}
            </li>
          );
        })}
      </ul>
    );
  }
}

export default CompanyServicesList;
