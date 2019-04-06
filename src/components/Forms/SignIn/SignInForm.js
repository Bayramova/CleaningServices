import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Form, Icon, Input, Button } from "antd";
import "./SignInForm.css";

class SignInForm extends Component {
  componentDidMount() {
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

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="sign-up__content">
        <div className="sign-up-container">
          <div className="sign-up">
            <h1 className="sign-up__title">Sign in to your account</h1>
            <div className="sign-in__sign-up-info">
              Don't have an account?
              <Link to={"/signup"} className="sign-in__sign-up-link">
                {" "}
                Create one
              </Link>
              .
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
              <Form.Item help={this.props.auth.errors.passwordincorrect}>
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
              <div className="sign-in-form__buttons">
                <Button type="primary" htmlType="submit">
                  Sign in
                </Button>
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
