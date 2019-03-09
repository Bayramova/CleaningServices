import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import OrderForm from "./OrderForm";
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";
import CompaniesListContainer from "./CompaniesListContainer";
import CompanyInfo from "./CompanyInfo";
import ClientProfile from "./ClientProfile";

class App extends Component {
  render() {

    return (
      <Router>
        <div className="container">
          <Header />
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/make_order" component={OrderForm} />
            <Route exact path="/sign_in" component={SignInForm} />
            <Route exact path="/sign_up" component={SignUpForm} />
            <Route exact path="/service/:titleId" component={CompaniesListContainer}/>
            <Route exact path="/company/:company" component={CompanyInfo}/>
            <Route exact path="/myprofile" component={ClientProfile}></Route>
            <Route render={() => <Redirect to="/" />} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
