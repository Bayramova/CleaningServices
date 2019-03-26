import React, { Component } from "react";
import { connect } from "react-redux";
import { Spin, Alert } from "antd";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import Header from "./Header/Header";
import Main from "./Landing/Landing";
import Footer from "./Footer/Footer";
import OrderFormContainer from "./Forms/Order/OrderFormContainer";
import SignInFormContainer from "./Forms/SignIn/SignInFormContainer";
import SignUpFormContainer from "./Forms/SignUp/SignUpFormContainer";
import CompaniesCatalogue from "./CompaniesCatalogue/CompaniesCatalogue";
import CompanyContainer from "./Company/CompanyContainer";
import CompaniesListByQueryContainer from "./CompaniesCatalogue/CompaniesListByQueryContainer";
import ClientProfile from "./ClientProfile/ClientProfile";
import PrivateRoute from "./PrivateRoute";
import { handleInitialData } from "../actions/receiveData";

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(handleInitialData());
  }

  render() {
    const { loadingData, error } = this.props;
    return (
      <Router>
        <div className="container">
          <Header />
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
                  <Route
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
                    path="/user/profile"
                    component={ClientProfile}
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
    error: state.data.error
  };
};

export default connect(mapStateToProps)(App);
