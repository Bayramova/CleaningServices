import React, { Component } from "react";
import isEmail from "validator/lib/isEmail";
import { Link } from "react-router-dom";
import { Form, Icon, Input, Button, Checkbox, Select } from "antd";

class CostCalculationForm extends Component {
  state = {
    fields: {
      small: "",
      big: "",
      bathroom: ""
    },
    cost: {}
  };

//   onInputChange = event => {
//     const fields = Object.assign({}, this.state.fields);
//     fields[event.target.name] = event.target.value;
//     this.setState({
//       fields
//     });
//   };

//   onFormSubmit = event => {
//     const rooms = this.state.fields;
//     const totalCost = this.calculate(cost);
//     this.setState({ cost });
//     event.preventDefault();

//     if (Object.keys(cost).length) return;

//     console.log(`
//     small: ${this.state.fields.small}
//     big: ${this.state.fields.big}
//     bathroom: ${this.state.fields.bathroom}
//     `);
//     this.setState({
//       fields: {
//         small: "",
//         big: "",
//         bathroom: ""
//       }
//     });
//   };

//   calculate = rooms => {
//     const totalCost = rooms.small*20 + rooms.big*30 + rooms.bathroom*40;
//     return totalCost;
//   };

  render() {
    return (
      <div className="cost-form__container">
        <form className="cost__form">
          <fieldset className="cost-form__fieldset">
            <label className="cost-form__label" htmlFor="type">
              Type of cleaning
            </label>
              <Select
                style={{ width: "100%" }}
                defaultValue="Standart cleaning"
              >
                <Select.Option value="General cleaning">
                  General cleaning
                </Select.Option>
                <Select.Option value="Dry Carpet cleaning">
                  Dry Carpet cleaning
                </Select.Option>
                <Select.Option value="Furniture and Coating cleaning">
                  Furniture and Coating cleaning
                </Select.Option>
                <Select.Option value="Office cleaning">
                  Office cleaning
                </Select.Option>
                <Select.Option value="Repair cleaning">
                  Repair cleaning
                </Select.Option>
                <Select.Option value="Industrial cleaning">
                  Standart cleaning
                </Select.Option>
                <Select.Option value="Pool cleaning">
                  Standart cleaning
                </Select.Option>
              </Select>
          </fieldset>

          <fieldset className="cost-form__fieldset">
            <label className="cost-form__label" htmlFor='rooms'>
              Number of rooms
            </label>
            <Input.Group name='rooms'>
              <Input style={{ width: "33.3%" }} placeholder="small rooms" />
              <Input style={{ width: "33.3%" }} placeholder="big rooms" />
              <Input style={{ width: "33.3%" }} placeholder="bathrooms" />
            </Input.Group>
          </fieldset>

          <button className="cost-form__button" name="button" type="submit">
            Сalculate the cost
          </button>
          <h3 className="field-errors">{}</h3>
        </form>
      </div>
    );
  }
}

export default CostCalculationForm;
