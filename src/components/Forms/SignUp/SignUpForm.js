import React from "react";
import { Form, Input, Select, Button, Upload, Icon, Radio } from "antd";
import "./SignUpForm.css";

const { Option } = Select;

class SignUpForm extends React.Component {
  state = {
    confirmDirty: false,
    formType: ""
  };

  handleRoleChange = e => {
    this.setState({
      formType: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        let signUpValues = values;
        if (values.logo) {
          signUpValues = { ...values, logo: values.logo[0].thumbUrl.slice(23) };
        }
        this.props.signUpUser(signUpValues);
      }
    });
  };

  handleResendClick = e => {
    this.props.resendEmail({ email: this.props.form.getFieldValue("email") });
  };

  handleConfirmBlur = e => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  };

  compareToFirstPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue("password")) {
      callback("Two passwords that you enter is inconsistent!");
    } else {
      callback();
    }
  };

  validateToNextPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && this.state.confirmDirty) {
      form.validateFields(["confirm"], { force: true });
    }
    callback();
  };

  fileToBase64 = file => {
    return new Promise(resolve => {
      var reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = function(event) {
        resolve(event.target.result);
      };
      reader.onerror = function(error) {
        console.log("Error: ", error);
      };
    });
  };

  uploadFile = e => {
    if (e.fileList.length > 1) {
      e.fileList.shift();
    }
    const file = e.file.originFileObj;
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      return {
        name: file.name,
        type: file.type,
        size: Math.round(file.size / 1000) + " kB",
        base64: reader.result,
        file: file
      };
    };
    return e && e.fileList;
  };

  dummyRequest({ file, onSuccess }) {
    setTimeout(() => {
      onSuccess("ok");
    }, 0);
  }

  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <div className="sign-up__content">
        <div className="sign-up-container">
          <div className="sign-up">
            <h1 className="sign-up__title">Create your account</h1>
            <Form onSubmit={this.handleSubmit}>
              <Form.Item label="E-mail" help={this.props.auth.errors.email}>
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

              <Form.Item label="Who you are">
                {getFieldDecorator("role", {
                  rules: [
                    {
                      required: true
                    }
                  ]
                })(
                  <Radio.Group onChange={this.handleRoleChange}>
                    <Radio value="CLIENT">Client</Radio>
                    <Radio value="COMPANY">Company</Radio>
                  </Radio.Group>
                )}
              </Form.Item>

              {(() => {
                switch (this.state.formType) {
                  case "CLIENT":
                    return (
                      <React.Fragment>
                        <Form.Item label="Name">
                          {getFieldDecorator("name", {
                            rules: [
                              {
                                required: true,
                                message: "Please input your name!"
                              }
                            ]
                          })(<Input />)}
                        </Form.Item>
                        <Form.Item label="Address">
                          {getFieldDecorator("address", {
                            rules: [
                              {
                                required: true,
                                message: "Please input your adress!"
                              }
                            ]
                          })(<Input />)}
                        </Form.Item>
                      </React.Fragment>
                    );
                  case "COMPANY":
                    return (
                      <React.Fragment>
                        <Form.Item label="Logo">
                          <div className="dropbox">
                            {getFieldDecorator("logo", {
                              valuePropName: "fileList",
                              getValueFromEvent: this.uploadFile
                            })(
                              <Upload.Dragger
                                name="logo"
                                customRequest={this.dummyRequest}
                                listType="picture"
                              >
                                <p className="ant-upload-drag-icon">
                                  <Icon type="inbox" />
                                </p>
                                <p className="ant-upload-text">
                                  Click or drag logo to this area to upload
                                </p>
                              </Upload.Dragger>
                            )}
                          </div>
                        </Form.Item>
                        <Form.Item label="Company name">
                          {getFieldDecorator("name", {
                            rules: [
                              {
                                required: true,
                                message: "Please input your name!"
                              }
                            ]
                          })(<Input />)}
                        </Form.Item>
                        <Form.Item label="Company address">
                          {getFieldDecorator("address", {
                            rules: [
                              {
                                required: true,
                                message: "Please input your adress!"
                              }
                            ]
                          })(<Input />)}
                        </Form.Item>
                        <Form.Item label="Company services">
                          {getFieldDecorator("services", {
                            rules: [
                              {
                                required: true,
                                message: "Please select types of cleaning!"
                              }
                            ]
                          })(
                            <Select
                              mode="multiple"
                              style={{ width: "100%" }}
                              placeholder="Please select types of cleaning you offer"
                            >
                              <Option value="standardcleaning">
                                Standard cleaning
                              </Option>
                              <Option value="generalcleaning">
                                General cleaning
                              </Option>
                              <Option value="carpetcleaning">
                                Dry Carpet cleaning
                              </Option>
                              <Option value="furniturecleaning">
                                Furniture and Coating cleaning
                              </Option>
                              <Option value="officecleaning">
                                Office cleaning
                              </Option>
                              <Option value="repaircleaning">
                                Repair cleaning
                              </Option>
                              <Option value="industrialcleaning">
                                Industrial cleaning
                              </Option>
                              <Option value="poolcleaning">
                                Pool cleaning
                              </Option>
                            </Select>
                          )}
                        </Form.Item>
                      </React.Fragment>
                    );
                  default:
                    return;
                }
              })()}
              <div className="sign-up__buttons">
                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    disabled={this.props.auth.isEmailSent}
                  >
                    Let's go
                  </Button>
                </Form.Item>
                <Form.Item>
                  <Button
                    type="primary"
                    onClick={this.handleResendClick}
                    disabled={!this.props.auth.isEmailSent}
                  >
                    Resend
                  </Button>
                </Form.Item>
              </div>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

export default Form.create({
  name: "signup",
  onFieldsChange(props, changedFields) {
    props.onChange(changedFields);
  }
})(SignUpForm);
