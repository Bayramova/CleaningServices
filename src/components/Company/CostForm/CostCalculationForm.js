import React, { Component } from "react";
import { Input, Select } from "antd";
import "./CostForm.css";

class CostCalculationForm extends Component {
  render() {
    return (
      <form className="cost-form">
        <fieldset>
          <label className="cost-form__label" htmlFor="type">
            Type of cleaning
          </label>
          <Select style={{ width: "100%" }} defaultValue="Standart cleaning">
            {this.props.services.map(title => {
              return (
                <Select.Option key={title} value={title}>
                  {title}
                </Select.Option>
              );
            })}
          </Select>
        </fieldset>

        <fieldset>
          <label className="cost-form__label" htmlFor="rooms">
            Number of rooms
          </label>
          <Input placeholder="small rooms" />
          <Input placeholder="big rooms" />
          <Input placeholder="bathrooms" />
        </fieldset>

        <button className="cost-form__button" name="button" type="submit">
          Сalculate the cost
        </button>
        <h3 className="field-errors">{}</h3>
      </form>
    );
  }
}

export default CostCalculationForm;
