import React, { Component } from "react";
import { Select } from "antd";
import CompaniesList from "./CompaniesList";
import serviceTypes from "../data/service_types.js";

class CompaniesListContainer extends Component {
  state = {
    title: "",
    description: ""
  };

  componentDidMount() {
    const matchPath = this.props.match.params.titleId;
    this.setState(() => {
      return {
        title: serviceTypes[matchPath].title,
        description: serviceTypes[matchPath].description
      };
    });
  }

  handleChange(value) {
    console.log(`selected ${value}`);
  }

  render() {
    const matchPath = this.props.match.params.titleId;
    return (
      <main className="main">
        <div className="companies-list__container">
          <section className="section">
            <div className="companies-list-title">
              <h1 className="companies-list__title">{this.state.title}</h1>
              <h2 className="companies-list__description">
                {this.state.description}
              </h2>
            </div>
          </section>

          <section className="section">
            <div className="companies-list__navigation">
              <Select
                defaultValue="Sort by"
                style={{ width: 120 }}
                onChange={this.handleChange}
              >
                <Select.Option value="address">Address</Select.Option>
                <Select.Option value="rating">Rating</Select.Option>
                <Select.Option value="popularity">Popularity</Select.Option>
              </Select>
            </div>
          </section>

          <section className="section">
            <div className="catalogue__cards">
              <CompaniesList pathname={matchPath} />
            </div>
          </section>
        </div>
      </main>
    );
  }
}

export default CompaniesListContainer;
