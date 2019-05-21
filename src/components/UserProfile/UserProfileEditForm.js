import React from "react";
import { Link } from "react-router-dom";
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
        if (
          this.props.auth.userData.email !== values.email ||
          this.props.auth.additionalUserData.name !== values.name ||
          this.props.auth.additionalUserData.address !== values.address
        ) {
          const userData = {
            id: this.props.auth.userData.id,
            ...values
          };
          this.props.updateUserData(
            this.props.auth.userData.id,
            userData,
            this.props.history
          );
        } else {
          this.props.history.goBack();
        }
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
      callback("Passwords doesn't match!");
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
    return (
      <div className="sign-up__content">
        <div className="sign-up-container">
          <div className="sign-up">
            <h1 className="sign-up__title">Update your account details</h1>
            <Form onSubmit={this.handleSubmit}>
              <Form.Item label="E-mail" help={this.props.auth.errors.email}>
                {getFieldDecorator("email", {
                  initialValue: this.props.auth.userData.email,
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
              {(() => {
                switch (this.props.auth.userData.role) {
                  case "CLIENT":
                    return (
                      <React.Fragment>
                        <Form.Item label="Name">
                          {getFieldDecorator("name", {
                            initialValue: this.props.auth.additionalUserData
                              .name,
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
                            initialValue: this.props.auth.additionalUserData
                              .address,
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
                            initialValue: this.props.auth.additionalUserData
                              .name,
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
                            initialValue: this.props.auth.additionalUserData
                              .address,
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
                            initialValue: this.props.auth.additionalUserData
                              .services,
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

              <div className="edit-form__buttons">
                <Form.Item>
                  <Button type="primary" htmlType="submit">
                    Save
                  </Button>
                </Form.Item>
                <Form.Item>
                  <Link to={"/resetPassword"} className="reset-link">
                    Reset password
                  </Link>
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
  name: "edit",
  onFieldsChange(props, changedFields) {
    props.onChange(changedFields);
  }
})(UserProfileEditForm);
