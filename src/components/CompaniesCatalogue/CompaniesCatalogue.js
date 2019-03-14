import React, { Component } from "react";
import { Select } from "antd";
import CompaniesListByTypeContainer from "./CompaniesListByTypeContainer";
import CompaniesListHeaderContainer from "./CompaniesListHeaderContainer";
import "./Catalogue.css";

class CompaniesCatalogue extends Component {
  handleChange = value => {
    this.props.onChange(value);
  };

  render() {
    const matchPath = this.props.match.params.titleId;
    return (
      <div className="companies-list__container">
        <section>
          <CompaniesListHeaderContainer pathname={matchPath} />
        </section>

        <section>
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

        <section>
          <CompaniesListByTypeContainer pathname={matchPath} />
        </section>
      </div>
    );
  }
}

export default CompaniesCatalogue;
