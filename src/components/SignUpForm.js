import React from "react";
import {
  Form,
  Input,
  Tooltip,
  Icon,
  Select,
  Row,
  Col,
  Checkbox,
  Button
} from "antd";

const { Option } = Select;

class SignUpForm extends React.Component {

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
      <main className="main">
        <div className="sign-up__content">
          <div className="sign-up-container">
            <div className="sign-up">
              <h1 className="sign-up__title">Create your account</h1>
              <Form onSubmit={this.handleSubmit}>
                <Form.Item label="E-mail">
                  {getFieldDecorator("email", {
                    rules: [
                      {
                        type: "email",
                        message: "The input is not valid E-mail!"
                      },
                      {
                        required: true,
                        message: "Please input your E-mail!"
                      }
                    ]
                  })(<Input />)}
                </Form.Item>
                <Form.Item label="Password">
                  {getFieldDecorator("password", {
                    rules: [
                      {
                        required: true,
                        message: "Please input your password!"
                      },
                      {
                        validator: this.validateToNextPassword
                      }
                    ]
                  })(<Input type="password" />)}
                </Form.Item>
                <Form.Item label="Confirm Password">
                  {getFieldDecorator("confirm", {
                    rules: [
                      {
                        required: true,
                        message: "Please confirm your password!"
                      },
                      {
                        validator: this.compareToFirstPassword
                      }
                    ]
                  })(<Input type="password" onBlur={this.handleConfirmBlur} />)}
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

                <Form.Item
                  label="Captcha"
                  extra="We must make sure that your are a human."
                >
                  <Row gutter={8}>
                    <Col span={12}>
                      {getFieldDecorator("captcha", {
                        rules: [
                          {
                            required: true,
                            message: "Please input the captcha you got!"
                          }
                        ]
                      })(<Input />)}
                    </Col>
                    <Col span={12}>
                      <Button>Get captcha</Button>
                    </Col>
                  </Row>
                </Form.Item>
                <Form.Item >
                  {getFieldDecorator("agreement", {
                    valuePropName: "checked"
                  })(
                    <Checkbox>
                      I have read the <a href="">agreement</a>
                    </Checkbox>
                  )}
                </Form.Item>
                <Form.Item >
                  <Button style={{ width: "50%" }} type="primary" htmlType="submit">
                    Register
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

const RegistrationForm = Form.create({ name: "register" })(SignUpForm);

export default RegistrationForm;
