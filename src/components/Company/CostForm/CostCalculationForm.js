import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Form, Select, Button, InputNumber } from "antd";
import "../CompanyInfo.css";
const { Option } = Select;

class CostCalculationForm extends Component {
  state = {
    cost: null
  };
  handleClick = event => {
    this.props.selectCompany(this.props.matchPath);
  };
  handleCalculate = event => {
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (err) {
        event.preventDefault();
      }
      function switchResult(result) {
        switch (values.serviceType) {
          case "Standart cleaning":
            return 1;
          case "Dry carpet cleaning":
            return 1;
          case "Dry furniture and coatings cleaning":
            return 1;
          case "General cleaning":
            return 2;
          case "Office cleaning":
            return 3;
          case "Pool cleaning":
            return 4;
          case "Industrial cleaning":
            return 5;
          case "Cleaning after repair and construction":
            return 5;
          default:
            return 1;
        }
      }
      const coefficient = switchResult(values.serviceType);
      const cost =
        coefficient *
        (10 * values.smallRooms + 13 * values.bigRooms + 15 * values.bathrooms);
      this.setState({ cost });
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <div className="cost-form__content">
        <div className="sign-up-container cost-form__container">
          <div className="sign-up">
            <Form>
              <Form.Item label="Type of cleaning">
                {getFieldDecorator("servicetype", {
                  rules: [
                    {
                      required: true,
                      message: "Please select type of cleaning!"
                    }
                  ]
                })(
                  <Select
                    style={{ width: "100%" }}
                    placeholder="Please select type of cleaning"
                  >
                    {this.props.services.map(title => {
                      return (
                        <Option key={title} value={title}>
                          {title}
                        </Option>
                      );
                    })}
                  </Select>
                )}
              </Form.Item>

              <Form.Item label="Number of big rooms (> 30 sq m)">
                {getFieldDecorator("bigRooms", {
                  rules: [
                    {
                      required: true,
                      message: "Please input number of rooms!"
                    },
                    {
                      type: "number",
                      message: "Please enter a number!"
                    }
                  ]
                })(<InputNumber min={0} />)}
              </Form.Item>

              <Form.Item label="Number of small rooms">
                {getFieldDecorator("smallRooms", {
                  rules: [
                    {
                      required: true,
                      message: "Please input number of rooms!"
                    },
                    {
                      type: "number",
                      message: "Please enter a number!"
                    }
                  ]
                })(<InputNumber min={0} />)}
              </Form.Item>

              <Form.Item label="Number of bathrooms">
                {getFieldDecorator("bathrooms", {
                  rules: [
                    {
                      required: true,
                      message: "Please input number of rooms!"
                    },
                    {
                      type: "number",
                      message: "Please enter a number!"
                    }
                  ]
                })(<InputNumber min={0} />)}
              </Form.Item>

              {isNaN(this.state.cost) || this.state.cost === null ? (
                <Form.Item>
                  <Button
                    style={{ width: "50%" }}
                    type="primary"
                    onClick={this.handleCalculate}
                  >
                    Calculate
                  </Button>
                </Form.Item>
              ) : (
                <React.Fragment>
                  <Link to={"/make_order"} onClick={this.handleClick}>
                    <Button type="primary">Make order</Button>
                  </Link>
                  <div className="cost-info__message">
                    Total cost is {this.state.cost} $
                  </div>
                </React.Fragment>
              )}
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

export default Form.create({
  name: "cost-form",
  onFieldsChange(props, changedFields) {
    props.onChange(changedFields);
  }
})(CostCalculationForm);
