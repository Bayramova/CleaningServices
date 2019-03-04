import React, { Component } from "react";
import isEmail from "validator/lib/isEmail";
import {Link} from "react-router-dom";
import { Form, Icon, Input, Button, Checkbox } from "antd";

class SignInForm extends Component {
  state = {
    fields: {
      login: "",
      password: ""
    },
    fieldErrors: {}
  };

  onInputChange = event => {
    const fields = Object.assign({}, this.state.fields);
    fields[event.target.name] = event.target.value;
    this.setState({
      fields
    });
  };

  onFormSubmit = event => {
    const user = this.state.fields;
    const fieldErrors = this.validate(user);
    this.setState({ fieldErrors });
    event.preventDefault();

    if (Object.keys(fieldErrors).length) return;

    console.log(`
    login: ${this.state.fields.login}
    password: ${this.state.fields.password}
    `);
    this.setState({
      fields: {
        login: "",
        password: ""
      }
    });
  };

  validate = user => {
    const errors = {};
    if (!user.login) errors.login = "Email/phone Required";
    if (!user.password) errors.password = "Password Required";
    if (user.login && !isEmail(user.login)) errors.login = "Invalid Email";
    return errors;
  };

  render() {
    return (
      <main className="main">
        <div className="sign-in-container">
          <div className="sign-in">
            <h1 className="sign-in__title">Sign in to your account</h1>
            <div className="sign-in__sign-up-info">
              Don't have an account?
              <Link to={"/sign_up"} className="sign-in__sign-up-link"> Create one</Link>.
            </div>
            <form className="sign-in__form" onSubmit={this.onFormSubmit}>
              <fieldset className="sign-in__fieldset">
                <label className="sign-in__form__label" htmlFor="login">
                  Email Address or Phone Number
                </label>
                <Input
                  name="login"
                  type="Input.Text"
                  value={this.state.fields.login}
                  onChange={this.onInputChange}
                  placeholder="name@example.com"
                  prefix={
                    <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                />
                <span className='field-errors'>{this.state.fieldErrors.login}</span>
              </fieldset>

              <fieldset className="sign-in__fieldset">
                <label className="sign-in__form__label" htmlFor="password">
                  Your Password
                </label>
                <Input.Password
                  name="password"
                  type="Input.Password"
                  value={this.state.fields.password}
                  onChange={this.onInputChange}
                  placeholder="Password"
                />
                <span className='field-errors'>{this.state.fieldErrors.password}</span>
              </fieldset>

              <button className="sign-in__button" name="button" type="submit">
                Sign In
              </button>

              <a className="sign-in__forgot-password-link">
                Forgotten your password?
              </a>
            </form>
          </div>
        </div>
      </main>
    );
  }
}

// class SignIn extends Component {
//   handleSubmit = e => {
//     e.preventDefault();
//     this.props.form.validateFields((err, values) => {
//       if (!err) {
//         console.log("Received values of form: ", values);
//       }
//     });
//   };

//   render() {
//     const { getFieldDecorator } = this.props.form;
//     return (
//       <main className="main">
//         <div className="sign-in-container">
//           <div className="sign-in">
//             <h1 className="sign-in__title">Sign in to your account</h1>

//             <Form onSubmit={this.handleSubmit} className="login-form">
//               <Form.Item>
//                 {getFieldDecorator("userName", {
//                   rules: [
//                     { required: true, message: "Please input your username!" }
//                   ]
//                 })(
//                   <Input
//                   name="login"
//                   type="Input.Text"
//                   placeholder="name@example.com"
//                   prefix={
//                     <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
//                   }
//                   />
//                 )}
//               </Form.Item>
//               <Form.Item>
//                 {getFieldDecorator("password", {
//                   rules: [
//                     { required: true, message: "Please input your Password!" }
//                   ]
//                 })(
//                   <Input
//                     prefix={
//                       <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
//                     }
//                     name="password"
//                     type="Input.Password"
//                     placeholder="Password"
//                   />
//                 )}
//               </Form.Item>
//               <Form.Item>
//                 {getFieldDecorator("remember", {
//                   valuePropName: "checked",
//                   initialValue: true
//                 })(<Checkbox>Remember me</Checkbox>)}
//                 <a className="login-form-forgot" href="">
//                   Forgot password
//                 </a>
//                 <Button
//                   type="primary"
//                   htmlType="submit"
//                   className="login-form-button"
//                 >
//                   Log in
//                 </Button>
//                 Or <a href="">register now!</a>
//               </Form.Item>
//             </Form>
//           </div>
//         </div>
//       </main>
//     );
//   }
// }

// const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(SignIn);

// export default WrappedNormalLoginForm;

export default SignInForm;
