import React, { Component } from "react";
import { connect } from "react-redux";
import { Spin, Alert } from "antd";
import { validateEmail } from "actions/userActions";

class VerifyEmailNotificationContainer extends Component {
  componentDidMount() {
    this.props.validateEmail(
      this.props.match.params.verificationToken,
      this.props.history
    );
  }
  render() {
    return (
      <React.Fragment>
        {this.props.auth.errors.error ? (
          <Alert
            className="error__message"
            message={this.props.auth.errors.error}
            type="error"
          />
        ) : (
          <Spin className="app__loader" size="large" tip="Loading..." />
        )}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

const mapDispatchToProps = {
  validateEmail
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VerifyEmailNotificationContainer);
