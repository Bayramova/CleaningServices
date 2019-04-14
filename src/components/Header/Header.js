import React, { Component } from "react";
import { Link } from "react-router-dom";
import Search from "./Search/Search";
import { Drawer, Icon } from "antd";
import "./Header.css";

class Header extends Component {
  onsignOut = e => {
    e.preventDefault();
    this.props.signOutUser();
  };

  state = { visible: false };

  showDrawer = () => {
    this.setState({
      visible: true
    });
  };

  onClose = () => {
    this.setState({
      visible: false
    });
  };

  render() {
    const { isAuthenticated } = this.props.auth;
    const guestLinks = (
      <div className="header__right">
        <Link to={"/make_order"} className="link button-links__link--order">
          Make order
        </Link>

        <Link to={"/signin"} className="link button-links__link--sign-in">
          Sign in
        </Link>
      </div>
    );
    const companyLinks = (
      <div className="header__right">
        <Link
          to={`/user/${this.props.auth.userData.id}`}
          className="link button-links__link--order"
        >
          My profile
        </Link>

        <Link
          to={"/"}
          onClick={this.onsignOut}
          className="link button-links__link--sign-in"
        >
          Sign out
        </Link>
      </div>
    );
    const clientLinks = (
      <div className="header__right auth">
        <Icon
          type="menu-fold"
          style={{ color: "#82b541", fontSize: "26px" }}
          onClick={this.showDrawer}
        />
        <Drawer
          placement="right"
          closable={false}
          onClose={this.onClose}
          visible={this.state.visible}
        >
          <p>
            <Link to={"/make_order"} className="link button-links__link">
              Make order
            </Link>
          </p>

          <p>
            <Link
              to={`/user/${this.props.auth.userData.id}`}
              className="link button-links__link"
            >
              My profile
            </Link>
          </p>

          <p>
            <Link
              to={"/"}
              onClick={this.onsignOut}
              className="link button-links__link"
            >
              Sign out
            </Link>
          </p>
        </Drawer>
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
          {isAuthenticated
            ? this.props.auth.userData.role === "CLIENT"
              ? clientLinks
              : companyLinks
            : guestLinks}
        </div>
      </header>
    );
  }
}

export default Header;
