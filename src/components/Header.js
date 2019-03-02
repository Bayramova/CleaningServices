import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Input } from "antd";

class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="header-content">
            <a className="header__heading">CleaningServices</a>
            <div className="header-right">
              <div className="search">
                <Input.Search
                  placeholder="Catalogue search, e.g. Office cleaning"
                  onSearch={value => console.log(value)}
                  enterButton
                />
              </div>
              <ul className="button-links">
                <li className="button-links__link">
                  <a className="button-links__link--order">Make order</a>
                </li>
                <li className="button-links__link">
                  <Link to={"/sign_in"} className="button-links__link--sign-in">
                    Sign in
                  </Link>
                </li>
              </ul>
            </div>
        </div>
      </header>
    );
  }
}

export default Header;
