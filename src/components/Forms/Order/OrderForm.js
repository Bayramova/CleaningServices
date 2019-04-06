import React, { Component } from "react";
import { Form, Input, Select, Button, InputNumber, Modal } from "antd";
import { Link } from "react-router-dom";
import "./OrderForm.css";

const { Option } = Select;

class PlaceOrderForm extends Component {
  state = {
    visible: false,
    cost: null
  };

  showModal = event => {
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (err) {
        event.preventDefault();
      } else {
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
          (10 * values.smallRooms +
            13 * values.bigRooms +
            15 * values.bathrooms);
        this.setState({
          visible: true,
          cost
        });
      }
    });
  };

  handleOk = e => {
    this.setState({
      visible: false
    });
    const values = {
      address: this.props.address,
      service: this.props.orderFormFields.serviceType.value,
      bigRooms: this.props.orderFormFields.bigRooms.value,
      smallRooms: this.props.orderFormFields.smallRooms.value,
      bathrooms: this.props.orderFormFields.bathrooms.value,
      daysOfCleaning: this.props.orderFormFields.daysOfCleaning.value,
      startTimeOfCleaning: this.props.orderFormFields.startTimeOfCleaning.value,
      cleaningFrequency: this.props.orderFormFields.cleaningFrequency.value,
      phone: this.props.orderFormFields.phone.value,
      companyId: this.props.orderFormFields.companyId.value,
      clientId: this.props.clientId
    };
    this.props.makeOrder(values);
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

  handleClick = event => {
    this.props.form.validateFieldsAndScroll(err => {
      if (err) {
        event.preventDefault();
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;

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
              {this.props.orderFormFields.companyId.value ? (
                <Form.Item label="Company">
                  {getFieldDecorator("company", {
                    initialValue: this.props.companies.find(
                      company =>
                        company.id == this.props.orderFormFields.companyId.value
                    ).name
                  })(<Input disabled />)}
                </Form.Item>
              ) : (
                <React.Fragment />
              )}

              <Form.Item label="Address">
                {getFieldDecorator("address", {
                  initialValue: this.props.address,
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
                  initialValue: this.props.orderFormFields.serviceType.value,
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
                  initialValue: this.props.orderFormFields.bigRooms.value,
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
                  initialValue: this.props.orderFormFields.smallRooms.value,
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
                  initialValue: this.props.orderFormFields.bathrooms.value,
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
                  initialValue: this.props.orderFormFields.daysOfCleaning.value,
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
                  initialValue: this.props.orderFormFields.startTimeOfCleaning
                    .value,
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
                  initialValue: this.props.orderFormFields.cleaningFrequency
                    .value,
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
                  initialValue: this.props.orderFormFields.phone.value,
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

              {this.props.orderFormFields.companyId.value ? (
                <div>
                  <Button type="primary" onClick={this.showModal}>
                    Place order
                  </Button>
                  <Modal
                    title="Order details"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                  >
                    <p>Address: {this.props.address}</p>
                    <p>
                      Type of cleaning:{" "}
                      {this.props.orderFormFields.serviceType.value.slice(
                        0,
                        this.props.orderFormFields.serviceType.value.indexOf(
                          "cleaning"
                        )
                      )}
                    </p>
                    <p>
                      Big rooms: {this.props.orderFormFields.bigRooms.value}
                    </p>
                    <p>
                      Small rooms: {this.props.orderFormFields.smallRooms.value}
                    </p>
                    <p>
                      Bathrooms: {this.props.orderFormFields.bathrooms.value}
                    </p>
                    <p>
                      Day/days:{" "}
                      {this.props.orderFormFields.daysOfCleaning.value.join(
                        ", "
                      )}
                    </p>
                    <p>
                      Expected start time of cleaning:{" "}
                      {this.props.orderFormFields.startTimeOfCleaning.value}
                    </p>
                    <p>
                      Cleaning frequency:{" "}
                      {this.props.orderFormFields.cleaningFrequency.value}
                    </p>
                    <p>
                      Phone number: +375
                      {this.props.orderFormFields.prefix.value}
                      {this.props.orderFormFields.phone.value}
                    </p>
                    {/* <p>Company: {this.props.company.name}</p> */}
                    <h3> Total cost: {this.state.cost} $</h3>
                  </Modal>
                </div>
              ) : (
                <Link
                  to={`/service/${
                    this.props.orderFormFields.serviceType.value
                  }`}
                  onClick={this.handleClick}
                >
                  <Button type="primary">Show options</Button>
                </Link>
              )}
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
    props.onChange(changedFields);
  }
})(PlaceOrderForm);

export default OrderForm;
