import React, { Component } from "react";
import "./UserProfile.css";

class ClientProfile extends Component {
  render() {
    const isClient = this.props.role === "client" ? true : false;
    const clientProfile = "Client profile";
    const companyProfile = "Company profile";
    console.log(this.props);
    return (
      <div className="user-profile__container">
        <div className="user-profile__header">
          <div className="user-profile__info">
            <h3 className="user-profile__name">
              {isClient ? clientProfile : companyProfile}
            </h3>
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
