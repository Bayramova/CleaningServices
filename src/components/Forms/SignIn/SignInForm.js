import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Form, Icon, Input, Button } from "antd";
import classnames from "classnames";
import "./SignInForm.css";

class SignInForm extends Component {
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/user/profile");
    }
  }
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
        const userData = {
          email: values.email,
          password: values.password
        };
        this.props.loginUser(userData);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="sign-in-container">
        <div className="sign-in">
          <h1 className="sign-in__title">Sign in to your account</h1>
          <div className="sign-in__sign-up-info">
            Don't have an account?
            <Link to={"/signup"} className="sign-in__sign-up-link">
              {" "}
              Create one
            </Link>
            .
          </div>
          <Form onSubmit={this.handleSubmit}>
            <Form.Item>
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
                  className={classnames("", {
                    invalid:
                      this.props.auth.errors.email ||
                      this.props.auth.errors.emailnotfound
                  })}
                />
              )}
              <span className="red-text">
                {this.props.auth.errors.email}
                {this.props.auth.errors.emailnotfound}
              </span>
            </Form.Item>
            <Form.Item>
              {getFieldDecorator("password", {
                rules: [
                  { required: true, message: "Please input your Password!" }
                ]
              })(
                <Input
                  prefix={
                    <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  type="password"
                  placeholder="Password"
                  className={classnames("", {
                    invalid: this.props.auth.errors.passwordincorrect
                  })}
                />
              )}
              <span className="red-text">
                {this.props.auth.errors.passwordincorrect}
              </span>
            </Form.Item>
            <div className="sign-in-form__buttons">
              <Button type="primary" htmlType="submit">
                Sign in
              </Button>
            </div>
          </Form>
        </div>
      </div>
    );
  }
}

const LoginForm = Form.create({
  name: "login",
  onFieldsChange(props, changedFields) {
    console.log(changedFields);
    props.onChange(changedFields);
  }
})(SignInForm);

export default LoginForm;
