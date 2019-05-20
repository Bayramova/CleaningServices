import React from "react";
import { Form, Input, Button } from "antd";
import "../SignUp/SignUpForm.css";

class ResetPasswordForm extends React.Component {
  state = {
    confirmDirty: false
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        this.props.resetPassword(values);
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

  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <div className="sign-up__content">
        <div className="sign-up-container">
          <div className="sign-up">
            <h1 className="sign-up__title">Reset password</h1>
            <Form onSubmit={this.handleSubmit}>
              <Form.Item
                label="E-mail"
                help={this.props.auth.errors.emailincorrect}
              >
                {getFieldDecorator("email", {
                  initialValue: this.props.auth.isAuthenticated
                    ? this.props.auth.userData.email
                    : "",
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

              <div className="sign-up__buttons">
                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    disabled={this.props.auth.isEmailSent}
                  >
                    Reset password
                  </Button>
                </Form.Item>
                <Form.Item>
                  <Button
                    type="primary"
                    onClick={this.handleResendClick}
                    disabled={!this.props.auth.isEmailSent}
                  >
                    Resend mail
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
  name: "reset",
  onFieldsChange(props, changedFields) {
    props.onChange(changedFields);
  }
})(ResetPasswordForm);
