import React, { Component } from "react";
import { Link } from "react-router-dom";
import SearchContainer from "./Search/SearchContainer";
import "./Header.css";

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
              {/* <Input.Search
                placeholder="Catalogue search, e.g. Office cleaning"
                onSearch={value => console.log(value)}
                enterButton
              /> */}
              <SearchContainer />
            </div>
          </div>

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
