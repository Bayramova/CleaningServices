import React, { Component } from "react";
import { Select } from "antd";
import CompaniesListContainer from "./CompaniesListContainer";

class CompaniesList extends Component {
  handleChange(value) {
    console.log(`selected ${value}`);
  }

  render() {
    return (
      <main className="main">
      <div className="companies-list__container">
        <section className="section">
            <div className="companies-list-title">
              <h1 className="companies-list__title">Office Cleaning</h1>
              <h2 className="companies-list__description">
                Different types of cleaning services are available for the busy
                company. This type of office cleaning services include desk
                cleaning, window cleaning, carpet and floor cleaning and much
                more.
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
              <CompaniesListContainer />
            </div>
          </div>
        </section>
        </div>
      </main>
    );
  }
}

export default CompaniesList;
