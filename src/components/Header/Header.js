import React, { Component } from "react";
import { Link } from "react-router-dom";
import Search from "./Search/Search";
import "./Header.css";

class Header extends Component {
  onLogout = e => {
    e.preventDefault();
    this.props.logoutUser();
  };
  render() {
    const { isAuthenticated } = this.props.auth;
    const guestLinks = (
      <div className="header__right">
        <Link
          to={{
            pathname: "/make_order",
            state: {
              fromSelectedCompany: false
            }
          }}
          className="link button-links__link--order"
        >
          Make order
        </Link>

        <Link to={"/signin"} className="link button-links__link--sign-in">
          Sign in
        </Link>
      </div>
    );
    const authLinks = (
      <div className="header__right">
        <Link
          to={{
            pathname: "/make_order",
            state: {
              fromSelectedCompany: false
            }
          }}
          className="link button-links__link--order"
        >
          Make order
        </Link>

        <Link
          to={"/"}
          className="link button-links__link--sign-in"
          onClick={this.onLogout}
        >
          Sign out
        </Link>
      </div>
    );
    return (
      <header className="header">
        <div className="header__content">
          <div className="header__left">
            <Link to="/" className="link header__heading">
              CleaningServices
            </Link>
            <div className="search">
              <Search />
            </div>
          </div>
          {isAuthenticated ? authLinks : guestLinks}
        </div>
      </header>
    );
  }
}

export default Header;
