import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Form, Icon, Input, Button } from "antd";
import "./SignInForm.css";

class SignInForm extends Component {
  componentDidMount() {
    console.log(this.props.form.getFieldValue("email"));
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/");
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.signInUser(values);
      }
    });
  };

  handleResendClick = e => {
    this.props.resendEmail({ email: this.props.form.getFieldValue("email") });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="sign-up__content">
        <div className="sign-up-container">
          <div className="sign-up">
            <h1 className="sign-up__title">Sign in to your account</h1>
            <div className="sign-in__sign-up-info">
              Don't have an account?
              <Link to={"/signup"}> Create one</Link>.
            </div>
            <Form onSubmit={this.handleSubmit}>
              <Form.Item help={this.props.auth.errors.emailincorrect}>
                {getFieldDecorator("email", {
                  rules: [
                    {
                      required: true,
                      message: "Please input your email!"
                    },
                    {
                      type: "email",
                      message: "Please enter a valid email!"
                    }
                  ]
                })(
                  <Input
                    prefix={
                      <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                    }
                    placeholder="Enter email"
                  />
                )}
              </Form.Item>
              <Form.Item
                help={this.props.auth.errors.passwordincorrect}
                extra={
                  <div className="sign-in__sign-up-info">
                    Forgotten your password?
                    <Link to={"/resetPassword"}> Click here</Link>.
                  </div>
                }
              >
                {getFieldDecorator("password", {
                  rules: [
                    { required: true, message: "Please input your password!" }
                  ]
                })(
                  <Input
                    prefix={
                      <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                    }
                    type="password"
                    placeholder="Password"
                  />
                )}
              </Form.Item>
              <div className="sign-up__buttons">
                <Form.Item>
                  <Button type="primary" htmlType="submit">
                    Sign in
                  </Button>
                </Form.Item>
                <Form.Item>
                  <Button
                    type="primary"
                    onClick={this.handleResendClick}
                    disabled={!this.props.form.getFieldValue("email")}
                  >
                    Resend confirm mail
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
  name: "signin",
  onFieldsChange(props, changedFields) {
    props.onChange(changedFields);
  }
})(SignInForm);
