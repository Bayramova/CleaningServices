import React, { Component } from "react";
import { connect } from "react-redux";
import { Spin } from "antd";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import Header from "./Header/Header";
import Main from "./Landing/Landing";
import Footer from "./Footer/Footer";
import OrderFormContainer from "./Forms/Order/OrderFormContainer";
import SignInForm from "./Forms/SignIn/SignInForm";
import SignUpForm from "./Forms/SignUp/SignUpForm";
import CompaniesCatalogue from "./CompaniesCatalogue/CompaniesCatalogue";
import CompanyContainer from "./Company/CompanyContainer";
import CompaniesListByQueryContainer from "./CompaniesCatalogue/CompaniesListByQueryContainer";
import ClientProfile from "./ClientProfile/ClientProfile";
import { handleInitialData } from "../actions/receiveData";

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(handleInitialData());

    window.scrollTo(0, 0);
  }

  render() {
    const { loadingData } = this.props;
    return (
      <Router>
        <div className="container">
          <Header />
          <main className="main">
            {loadingData ? (
              <Spin className="app__loader" size="large" tip="Loading..." />
            ) : (
              <Switch>
                <Route exact path="/" component={Main} />
                <Route
                  exact
                  path="/make_order"
                  component={OrderFormContainer}
                />
                <Route exact path="/sign_in" component={SignInForm} />
                <Route exact path="/sign_up" component={SignUpForm} />
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
                <Route exact path="/myprofile" component={ClientProfile} />
                <Route render={() => <Redirect to="/" />} />
              </Switch>
            )}
          </main>
          <Footer />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    loadingData: state.data.loadingData
  };
};

export default connect(mapStateToProps)(App);
