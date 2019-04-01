import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Spin, Alert } from 'antd';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import HeaderContainer from './Header/HeaderContainer';
import Main from './Landing/Landing';
import Footer from './Footer/Footer';
import OrderFormContainer from './Forms/Order/OrderFormContainer';
import SignInFormContainer from './Forms/SignIn/SignInFormContainer';
import SignUpFormContainer from './Forms/SignUp/SignUpFormContainer';
import CompaniesCatalogue from './CompaniesCatalogue/CompaniesCatalogue';
import CompanyContainer from './Company/CompanyContainer';
import CompaniesListByQueryContainer from './CompaniesCatalogue/CompaniesListByQueryContainer';
import UserProfileContainer from './UserProfile/UserProfileContainer';
import UserProfileEditFormContainer from './UserProfile/UserProfileEditFormContainer';
import PrivateRoute from './PrivateRoute';
import { handleInitialData } from '../actions/receiveData';
import jwt_decode from 'jwt-decode';
import setAuthToken from '../utils/setAuthToken';
import { setCurrentUser, logoutUser } from '../actions/authActions';

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(handleInitialData());

    if (localStorage.jwtToken) {
      const token = localStorage.jwtToken;
      setAuthToken(token);
      const decoded = jwt_decode(token);
      dispatch(setCurrentUser(decoded));
      const currentTime = Date.now() / 1000;
      if (decoded.exp < currentTime) {
        dispatch(logoutUser());
        // TODO в такой реализации, возможно будет перезагрузка страницы, используй history.push роутера
        window.location.href = './signin';
      }
    }
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
                    component={UserProfileContainer}
                  />
                  <PrivateRoute
                    exact
                    path="/user/profile/edit"
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

export default connect(mapStateToProps)(App);
