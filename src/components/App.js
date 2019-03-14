import React, { Component } from "react";
import { Consumer } from "../context";
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
import OrderForm from "./Forms/Order/OrderForm";
import SignInForm from "./Forms/SignIn/SignInForm";
import SignUpForm from "./Forms/SignUp/SignUpForm";
import CompaniesCatalogue from "./CompaniesCatalogue/CompaniesCatalogue";
import CompanyInfo from "./Company/CompanyInfo";
import CompaniesListByQueryContainer from "./CompaniesCatalogue/CompaniesListByQueryContainer";
import ClientProfile from "./ClientProfile/ClientProfile";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Header />
          <main className="main">
            <Consumer>
              {store =>
                store.loadingData ? (
                  <Spin className="app__loader" size="large" tip="Loading..." />
                ) : (
                  <Switch>
                    <Route exact path="/" component={Main} />
                    <Route
                      exact
                      path="/make_order"
                      render={props => (
                        <OrderForm
                          {...props}
                          {...store.orderFormFields}
                          onChange={store.handleOrderFormChange}
                        />
                      )}
                    />
                    <Route exact path="/sign_in" component={SignInForm} />
                    <Route exact path="/sign_up" component={SignUpForm} />
                    <Route
                      exact
                      path="/service/:titleId"
                      render={props => (
                        <CompaniesCatalogue
                          {...props}
                          onChange={store.handleSortValueChange}
                        />
                      )}
                    />
                    <Route
                      exact
                      path="/company/:company"
                      component={CompanyInfo}
                    />
                    <Route
                      exact
                      path="/search"
                      component={CompaniesListByQueryContainer}
                    />
                    <Route exact path="/myprofile" component={ClientProfile} />
                    <Route render={() => <Redirect to="/" />} />
                  </Switch>
                )
              }
            </Consumer>
          </main>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
