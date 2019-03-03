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
import SignIn from "./SignIn";
import CompaniesList from "./CompaniesList";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Header />
          
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/sign_in" component={SignIn} />
            <Route exact path="/:title" component={CompaniesList}/>
            <Route render={() => <Redirect to="/" />} />
          </Switch>

          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
