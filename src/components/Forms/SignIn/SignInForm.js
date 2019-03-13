import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import './SignInForm.css';

class SignInForm extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
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
            <Link to={'/sign_up'} className="sign-in__sign-up-link">
              {' '}
              Create one
            </Link>
            .
          </div>
          <Form onSubmit={this.handleSubmit}>
            <Form.Item>
              {getFieldDecorator('userName', {
                rules: [
                  {
                    required: true,
                    message: 'Please input your email or phone!'
                  }
                ]
              })(
                <Input
                  prefix={
                    <Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />
                  }
                  placeholder="Email Address or Phone Number"
                />
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('password', {
                rules: [
                  { required: true, message: 'Please input your Password!' }
                ]
              })(
                <Input
                  prefix={
                    <Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />
                  }
                  type="password"
                  placeholder="Password"
                />
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('remember', {
                valuePropName: 'checked',
                initialValue: true
              })(<Checkbox>Remember me</Checkbox>)}
              <div className="sign-in-form__buttons">
                <a className="login-form-forgot" href="">
                  Forgot password
                </a>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                >
                  Log in
                </Button>
              </div>
            </Form.Item>
          </Form>
        </div>
      </div>
    );
  }
}

const LoginForm = Form.create({ name: 'login' })(SignInForm);

export default LoginForm;
