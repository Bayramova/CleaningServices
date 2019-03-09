import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Input } from "antd";

class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="header__content">
          <div className="header__left">
            <Link to="/" className="link header__heading">
              CleaningServices
            </Link>
            <div className="search">
              <Input.Search
                placeholder="Catalogue search, e.g. Office cleaning"
                onSearch={value => console.log(value)}
                enterButton
              />
            </div>
          </div>

          <div className="header__right">
            <Link to={"/make_order"} className="link button-links__link--order">
              Make order
            </Link>

            <Link to={"/sign_in"} className="link button-links__link--sign-in">
              Sign in
            </Link>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
