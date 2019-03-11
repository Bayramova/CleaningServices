import React, { Component } from "react";
import { Select } from "antd";
import CompaniesListContainer from "./CompaniesListContainer";
import CompaniesListHeaderContainer from "./CompaniesListHeaderContainer";

class CompaniesCatalogue extends Component {
  handleChange = (value) => {
    this.props.onChange(value);
  };

  render() {
    const matchPath = this.props.match.params.titleId;
    return (
      <main className="main">
        <div className="companies-list__container">
          <section className="section">
            <CompaniesListHeaderContainer pathname={matchPath} />
          </section>

          <section className="section">
            <div className="companies-list__navigation">
              <Select
                defaultValue="Sort by"
                style={{ width: 120 }}
                onChange={this.handleChange}
              >
                <Select.Option value="rating">Rating</Select.Option>
                <Select.Option value="orders">Popularity</Select.Option>
              </Select>
            </div>
          </section>

          <section className="section">
            <CompaniesListContainer pathname={matchPath} />
          </section>
        </div>
      </main>
    );
  }
}

export default CompaniesCatalogue;
