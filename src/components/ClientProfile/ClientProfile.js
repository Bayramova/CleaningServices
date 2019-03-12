import React, { Component } from "react";
import "./ClientProfile.css";

class ClientProfile extends Component {
  render() {
    return (
      <main className="main">
        <div className="user-profile__container">
          <div className="user-profile__header">
            <div className="user-profile__info">
              <h3 className="user-profile__name">Vasya Pupkin</h3>
              <p className="user-profile__email">vasya.pupkin@gmail.com</p>
              <p className="user-profile__phone">+375336393823</p>
              <p className="user-profile__address">
                ul. Soltysa 50, korp. 2, kv. 40
              </p>
            </div>
          </div>
          <div className="user-profile__nav">
            <div>
              <a className="active user-profile__nav-button">Activity</a>
            </div>
            <div>
              <a className="user-profile__nav-button user-profile__nav-button--settings">Preferences</a>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default ClientProfile;
