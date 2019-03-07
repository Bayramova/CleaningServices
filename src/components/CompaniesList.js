import React, { Component } from "react";
import { Select } from "antd";
import CompaniesListContainer from "./CompaniesListContainer";
import companies from "../data/companies";
import data from "../data/service_types.js";

class CompaniesList extends Component {
  state = {
    title: "",
    description: ""
  };

  async componentDidMount() {
    const matchPath = Object.values(this.props.match.params)[0];
    data.map((serviceType) => {
      if (serviceType.id === matchPath) {
        this.setState(() => {
          return {
            title: serviceType.title,
            description: serviceType.description
          };
        });
      }
    });
  }
  
  handleChange(value) {
    console.log(`selected ${value}`);
  }

  render() {
    const matchPath = Object.values(this.props.match.params)[0];
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

        <section className='section'>
              <div className="companies-list__navigation">
                <Select
                  defaultValue="Sort by"
                  style={{ width: 120 }}
                  onChange={this.handleChange}
                >
                  <Select.Option value="adress">Adress</Select.Option>
                  <Select.Option value="rating">Rating</Select.Option>
                  <Select.Option value="popularity">Popularity</Select.Option>
                </Select>
              </div>
        </section>

        <section className="section">
          <div className="catalogue catalogue--companies">
            <div className="catalogue__cards catalogue__cards--companies">
              <CompaniesListContainer 
                pathname={matchPath}
              />
            </div>
          </div>
        </section>
        </div>
      </main>
    );
  }
}

export default CompaniesList;
