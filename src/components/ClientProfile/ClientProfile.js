import React, { Component } from "react";
import "./ClientProfile.css";

class ClientProfile extends Component {
  render() {
    return (
      <div className="user-profile__container">
        <div className="user-profile__header">
          <div className="user-profile__info">
            <h3 className="user-profile__name">My profile</h3>
            <p className="user-profile__email" />
            <p className="user-profile__phone" />
            <p className="user-profile__address" />
          </div>
        </div>
        <div className="user-profile__nav">
          <div />
          <div />
        </div>
      </div>
    );
  }
}

export default ClientProfile;
