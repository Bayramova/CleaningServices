import React from "react";
import { Route, Redirect } from "react-router-dom";
import { Spin } from "antd";
import { connect } from "react-redux";

const PrivateRoute = ({ component: Component, auth, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      auth.loadingUser ? (
        <Spin className="app__loader" size="large" tip="Loading..." />
      ) : auth.isAuthenticated ? (
        <Component {...props} />
      ) : (
        <Redirect to="/signin" />
      )
    }
  />
);

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(PrivateRoute);
