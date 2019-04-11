import React, { Component } from "react";
import { connect } from "react-redux";
import { Spin, Alert } from "antd";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
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
import FeedbackFormContainer from "./Forms/Feedback/FeedbackFormContainer";
import PrivateRoute from "./PrivateRoute";
import ClientPrivateRoute from "./ClientPrivateRoute";
import {
  getServicesData,
  getCompaniesData,
  getClientsData
} from "actions/receiveData";
import { signOut } from "actions/userActions";
import { getUserDataFromToken } from "actions/userActions";

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getServicesData());
    dispatch(getCompaniesData());
    dispatch(getClientsData());

    if (localStorage.token) {
      if (jwtDecode(localStorage.token).exp < Date.now() / 1000) {
        dispatch(signOut());
        this.props.history.push("/signin");
      } else {
        const token = localStorage.token;
        dispatch(getUserDataFromToken(token));
      }
    }
  }

  render() {
    const {
      loadingServices,
      loadingCompanies,
      loadingClients,
      error
    } = this.props;
    return (
      <div className="container">
        <HeaderContainer />
        <ScrollToTop>
          <main className="main">
            {loadingServices || loadingCompanies || loadingClients ? (
              <Spin className="app__loader" size="large" tip="Loading..." />
            ) : error ? (
              <Alert className="error__message" message={error} type="error" />
            ) : (
              <Switch>
                <Route exact path="/" component={Main} />
                <ClientPrivateRoute
                  exact
                  path="/make_order"
                  component={OrderFormContainer}
                />
                <ClientPrivateRoute
                  exact
                  path="/feedback"
                  component={FeedbackFormContainer}
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
    );
  }
}

const mapStateToProps = state => {
  return {
    loadingServices: state.data.loadingServices,
    loadingCompanies: state.data.loadingCompanies,
    loadingClients: state.data.loadingClients,
    error: state.data.error,
    auth: state.auth
  };
};

const ConnectedApp = withRouter(connect(mapStateToProps)(App));

export default ConnectedApp;
