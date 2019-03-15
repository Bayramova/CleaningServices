import React, { Component } from "react";
import { Form, Input, Select, Button, InputNumber } from "antd";
import { Link } from "react-router-dom";
import "./OrderForm.css";
import { connect } from "react-redux";
import store from "../../../index";
import { handleFormChange } from "../../../actions/handleFormFieldsChange";

const { Option } = Select;

const mapDispatchToProps = {
  onChange: handleFormChange
};

class PlaceOrderForm extends Component {
  state = this.getCurrentStateFromStore();

  getCurrentStateFromStore() {
    return {
      formFields: store.getState().orderFormFields
    };
  }

  updateStateFromStore = () => {
    const currentState = this.getCurrentStateFromStore();

    if (this.state !== currentState) {
      this.setState(currentState);
    }
  };

  componentDidMount() {
    this.unsubscribeStore = store.subscribe(this.updateStateFromStore);
  }

  componentWillUnmount() {
    this.unsubscribeStore();
  }
  handleClick = event => {
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (err) {
        event.preventDefault();
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const buttonText = this.props.location.state.fromSelectedCompany
      ? "Place Order"
      : "Show Options";

    const prefixSelector = getFieldDecorator("prefix", {
      initialValue: "(29)"
    })(
      <Select style={{ width: 70 }}>
        <Option value="(29)">(29)</Option>
        <Option value="(33)">(33)</Option>
        <Option value="(44)">(44)</Option>
        <Option value="(17)">(17)</Option>
      </Select>
    );
    return (
      <div className="sign-up__content">
        <div className="sign-up-container">
          <div className="sign-up">
            <h1 className="sign-up__title">Place an order</h1>
            <Form>
              <Form.Item label="Address">
                {getFieldDecorator("address", {
                  initialValue: this.state.address.value,
                  rules: [
                    {
                      required: true,
                      message: "Please input your adress!"
                    }
                  ]
                })(<Input />)}
              </Form.Item>

              <Form.Item label="Type of cleaning">
                {getFieldDecorator("serviceType", {
                  initialValue: this.state.serviceType.value,
                  rules: [
                    {
                      required: true,
                      message: "Please select type of cleaning!"
                    }
                  ]
                })(
                  <Select style={{ width: "100%" }}>
                    <Option value="standardcleaning">Standard cleaning</Option>
                    <Option value="generalcleaning">General cleaning</Option>
                    <Option value="carpetcleaning">Dry Carpet cleaning</Option>
                    <Option value="furniturecleaning">
                      Furniture and Coating cleaning
                    </Option>
                    <Option value="officecleaning">Office cleaning</Option>
                    <Option value="repaircleaning">Repair cleaning</Option>
                    <Option value="industrialcleaning">
                      Industrial cleaning
                    </Option>
                    <Option value="poolcleaning">Pool cleaning</Option>
                  </Select>
                )}
              </Form.Item>

              <Form.Item label="Number of big rooms (> 30 sq m)">
                {getFieldDecorator("bigRooms", {
                  initialValue: this.state.bigRooms.value,
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
                  initialValue: this.state.smallRooms.value,
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
                  initialValue: this.props.bathrooms.value,
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

              <Form.Item label="Day/Days">
                {getFieldDecorator("daysOfCleaning", {
                  initialValue: this.state.daysOfCleaning.value,
                  rules: [
                    {
                      required: true,
                      message: "Please input day/days of cleaning!"
                    }
                  ]
                })(
                  <Select
                    mode="multiple"
                    style={{ width: "100%" }}
                    placeholder="Please select day/days"
                  >
                    <Option value="Monday">Monday</Option>
                    <Option value="Tuesday">Tuesday</Option>
                    <Option value="Wednesday">Wednesday</Option>
                    <Option value="Thursday">Thursday</Option>
                    <Option value="Friday">Friday</Option>
                    <Option value="Saturday">Saturday</Option>
                    <Option value="Sunday">Sunday</Option>
                  </Select>
                )}
              </Form.Item>

              <Form.Item label="Expected start time of cleaning">
                {getFieldDecorator("startTimeOfCleaning", {
                  initialValue: this.state.startTimeOfCleaning.value,
                  rules: [
                    {
                      required: true,
                      message: "Please select time of cleaning!"
                    }
                  ]
                })(
                  <Select style={{ width: "100%" }}>
                    <Option value="09:00-12:00">09:00-12:00</Option>
                    <Option value="12:00-15:00">12:00-15:00</Option>
                    <Option value="15:00-18:00">15:00-18:00</Option>
                    <Option value="18:00-21:00">18:00-21:00</Option>
                  </Select>
                )}
              </Form.Item>

              <Form.Item label="Cleaning frequency">
                {getFieldDecorator("cleaningFrequency", {
                  initialValue: this.state.cleaningFrequency.value,
                  rules: [
                    {
                      required: true,
                      message: "Please select cleaning frequency!"
                    }
                  ]
                })(
                  <Select style={{ width: "100%" }}>
                    <Option value="only once">Only once</Option>
                    <Option value="every week">Every week</Option>
                    <Option value="every 2 weeks">Every 2 weeks</Option>
                    <Option value="every month">Every month</Option>
                  </Select>
                )}
              </Form.Item>

              <Form.Item label="Phone Number">
                {getFieldDecorator("phone", {
                  initialValue: this.state.phone.value,
                  rules: [
                    {
                      required: true,
                      message: "Please input your phone number!"
                    }
                  ]
                })(
                  <Input
                    addonBefore={prefixSelector}
                    style={{ width: "100%" }}
                  />
                )}
              </Form.Item>

              <Form.Item>
                <Link
                  to={`/service/${this.state.serviceType.value}`}
                  onClick={this.handleClick}
                >
                  <Button style={{ width: "50%" }} type="primary">
                    {buttonText}
                  </Button>
                </Link>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

const OrderForm = Form.create({
  name: "global_state",
  onFieldsChange(props, changedFields) {
    this.props.onChange(changedFields);
  }
})(PlaceOrderForm);

export default connect(mapDispatchToProps)(OrderForm);
