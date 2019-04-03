import React, { Component } from "react";
import { connect } from "react-redux";
import { Spin, Alert } from "antd";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import jwtDecode from "jwt-decode";
import ScrollToTop from "./ScrollToTop";
import HeaderContainer from "./Header/HeaderContainer";
import Main from "./Landing/Landing";
import Footer from "./Footer/Footer";
import OrderFormContainer from "./Forms/Order/OrderFormContainer";
import SignInFormContainer from "./Forms/SignIn/SignInFormContainer";
import SignUpFormContainer from "./Forms/SignUp/SignUpFormContainer";
import CompaniesCatalogue from "./CompaniesCatalogue/CompaniesCatalogue";
import CompanyContainer from "./Company/CompanyContainer";
import CompaniesListByQueryContainer from "./CompaniesCatalogue/CompaniesListByQueryContainer";
import UserProfileContainer from "./UserProfile/UserProfileContainer";
import UserProfileEditFormContainer from "./UserProfile/UserProfileEditFormContainer";
import PrivateRoute from "./PrivateRoute";
import OrderFormPrivateRoute from "./OrderFormPrivateRoute";
import { handleInitialData } from "actions/receiveData";
import { signOut } from "actions/userActions";
import { setCurrentUser } from "actions/userActions";

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(handleInitialData());

    // if (localStorage.token) {
    //   const token = localStorage.token;
    //   console.log(Object.values(jwtDecode(token)));
    //   dispatch(setCurrentUser(this.props.auth.user));
    //   if (jwtDecode(token).exp < Date.now() / 1000) {
    //     dispatch(signOut());
    //   }
    // }
  }

  render() {
    const { loadingData, error } = this.props;
    return (
      <Router>
        <div className="container">
          <HeaderContainer />
          <ScrollToTop>
            <main className="main">
              {loadingData ? (
                <Spin className="app__loader" size="large" tip="Loading..." />
              ) : error ? (
                <Alert
                  className="error__message"
                  message={error}
                  type="error"
                />
              ) : (
                <Switch>
                  <Route exact path="/" component={Main} />
                  <OrderFormPrivateRoute
                    exact
                    path="/make_order"
                    component={OrderFormContainer}
                  />
                  <Route exact path="/signin" component={SignInFormContainer} />
                  <Route exact path="/signup" component={SignUpFormContainer} />
                  <Route
                    exact
                    path="/service/:titleId"
                    component={CompaniesCatalogue}
                  />
                  <Route
                    exact
                    path="/company/:company"
                    component={CompanyContainer}
                  />
                  <Route
                    exact
                    path="/search"
                    component={CompaniesListByQueryContainer}
                  />
                  <PrivateRoute
                    exact
                    path="/user/:id"
                    component={UserProfileContainer}
                  />
                  <PrivateRoute
                    exact
                    path="/user/:id/edit"
                    component={UserProfileEditFormContainer}
                  />
                  <Route render={() => <Redirect to="/" />} />
                </Switch>
              )}
            </main>
          </ScrollToTop>

          <Footer />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    loadingData: state.data.loadingData,
    error: state.data.error,
    auth: state.auth
  };
};

const ConnectedApp = connect(mapStateToProps)(App);

export default ConnectedApp;
