import React from "react";
import { Form, Input, Select, Button, Upload, Icon } from "antd";
import "./UserProfile";

const { Option } = Select;

class UserProfileEditForm extends React.Component {
  state = {
    confirmDirty: false,
    formType: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        const userData = {
          id: this.props.auth.user.id,
          ...values
        };
        this.props.updateUserInfo(userData, this.props.history);
      }
    });
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

  render() {
    const { getFieldDecorator } = this.props.form;

    // const prefixSelector = getFieldDecorator("prefix", {
    //   initialValue: "(29)"
    // })(
    //   <Select style={{ width: 70 }}>
    //     <Option value="(29)">(29)</Option>
    //     <Option value="(33)">(33)</Option>
    //     <Option value="(44)">(44)</Option>
    //     <Option value="(17)">(17)</Option>
    //   </Select>
    // );

    return (
      <div className="sign-up__content">
        <div className="sign-up-container">
          <div className="sign-up">
            <h1 className="sign-up__title">Update your account details</h1>
            <Form onSubmit={this.handleSubmit}>
              <Form.Item label="E-mail" help={this.props.errors.email}>
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
              <Form.Item label="New password">
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
              <Form.Item label="Confirm password">
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

              {(() => {
                switch (this.props.auth.user.role) {
                  case "client":
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
                  case "company":
                    return (
                      <React.Fragment>
                        <Form.Item label="Logo">
                          <div className="dropbox">
                            {getFieldDecorator("logo", {
                              valuePropName: "fileList",
                              getValueFromEvent: this.normFile
                            })(
                              <Upload.Dragger name="files" action="/upload.do">
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
              <Form.Item>
                <Button
                  style={{ width: "50%" }}
                  type="primary"
                  htmlType="submit"
                >
                  Save
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

export default Form.create({
  name: "edit",
  onFieldsChange(props, changedFields) {
    props.onChange(changedFields);
  }
})(UserProfileEditForm);
