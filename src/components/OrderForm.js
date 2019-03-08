import React from "react";
import {
  Form,
  Input,
  Select,
  Button,
  AutoComplete
} from "antd";

const { Option } = Select;

class MakeOrderForm extends React.Component {
  state = {
    confirmDirty: false,
    autoCompleteResult: []
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  };

  handleConfirmBlur = e => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  };

  compareToFirstPassword = (value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue("password")) {
      callback("Two passwords that you enter is inconsistent!");
    } else {
      callback();
    }
  };

  validateToNextPassword = (value, callback) => {
    const form = this.props.form;
    if (value && this.state.confirmDirty) {
      form.validateFields(["confirm"], { force: true });
    }
    callback();
  };

  handleWebsiteChange = value => {
    let autoCompleteResult;
    if (!value) {
      autoCompleteResult = [];
    } else {
      autoCompleteResult = [".com", ".org", ".net"].map(
        domain => `${value}${domain}`
      );
    }
    this.setState({ autoCompleteResult });
  };

  render() {
    const { getFieldDecorator } = this.props.form;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 }
      }
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0
        },
        sm: {
          span: 16,
          offset: 8
        }
      }
    };
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
      <main className="main">
        <div className="sign-up__content">
          <div className="sign-up-container">
            <div className="sign-up">
              <h1 className="sign-up__title">Place an order</h1>
              <Form {...formItemLayout} onSubmit={this.handleSubmit}>
                <Form.Item label="Adress">
                  {getFieldDecorator("adress", {
                    rules: [
                      {
                        required: true,
                        message: "Please input your adress!"
                      }
                    ]
                  })(<Input />)}
                </Form.Item>

                <Form.Item label="Type of cleaning">
                  {getFieldDecorator("type", {
                    initialValue: "Standart cleaning",
                    rules: [
                      {
                        required: true,
                        message: "Please select type of cleaning!"
                      }
                    ]
                  })(
                    <Select
                      style={{ width: "100%" }}
                    >
                      <Option value="General cleaning">General cleaning</Option>
                      <Option value="Dry Carpet cleaning">
                        Dry Carpet cleaning
                      </Option>
                      <Option value="Furniture and Coating cleaning">
                        Furniture and Coating cleaning
                      </Option>
                      <Option value="Office cleaning">Office cleaning</Option>
                      <Option value="Repair cleaning">Repair cleaning</Option>
                      <Option value="Industrial cleaning">
                        Standart cleaning
                      </Option>
                      <Option value="Pool cleaning">Standart cleaning</Option>
                    </Select>
                  )}
                </Form.Item>

                <Form.Item label="Number of rooms">
                  {getFieldDecorator("rooms", {
                    rules: [
                      {
                        required: true,
                        message:
                          "Please input number of rooms!"
                      }
                    ]
                  })(
                    <Input.Group>
                      <Input style={{ width: "33%" }} placeholder="small rooms"/>
                      <Input style={{ width: "33%" }} placeholder="big rooms"/>
                      <Input style={{ width: "33%" }} placeholder="bathrooms"/>
                    </Input.Group>
                  )}
                </Form.Item>

                <Form.Item label="Day/Days">
                  {getFieldDecorator("days", {
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
                      <Option value="Tuesday">
                        Tuesday
                      </Option>
                      <Option value="Wednesday">
                       Wednesday
                      </Option>
                      <Option value="Thursday">Thursday</Option>
                      <Option value="Friday">Friday</Option>
                      <Option value="Saturday">
                      Saturday
                      </Option>
                      <Option value="Sunday">Sunday</Option>
                    </Select>
                  )}
                </Form.Item>

                <Form.Item label="Expected start time of cleaning">
                  {getFieldDecorator("time", {
                    initialValue: "09:00-12:00",
                    rules: [
                      {
                        required: true,
                        message: "Please select time of cleaning!"
                      }
                    ]
                  })(
                    <Select
                      style={{ width: "100%" }}
                    >
                      <Option value="09:00-12:00">09:00-12:00</Option>
                      <Option value="12:00-15:00">12:00-15:00</Option>
                      <Option value="15:00-18:00">15:00-18:00</Option>
                      <Option value="18:00-21:00">18:00-21:00</Option>
                    </Select>
                  )}
                </Form.Item>

                <Form.Item label="Cleaning frequency">
                  {getFieldDecorator("frequency", {
                    initialValue: "only once",
                    rules: [
                      {
                        required: true,
                        message: "Please select cleaning frequency!"
                      }
                    ]
                  })(
                    <Select
                      style={{ width: "100%" }}
                    >
                      <Option value="only once">Only once</Option>
                      <Option value="every week">Every week</Option>
                      <Option value="every 2 weeks">Every 2 weeks</Option>
                      <Option value="every month">Every month</Option>
                    </Select>
                  )}
                </Form.Item>

                <Form.Item label="Phone Number">
                  {getFieldDecorator("phone", {
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

                <Form.Item {...tailFormItemLayout}>
                  <Button style={{ width: "50%" }} type="primary">Show options</Button>
                </Form.Item>
              </Form>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

const OrderForm = Form.create({ name: "register" })(MakeOrderForm);

export default OrderForm;
