import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./UserProfile.css";

class ClientProfile extends Component {
  render() {
    const isClient = this.props.role === "client" ? true : false;
    const clientProfile = "Client profile";
    const companyProfile = "Company profile";
    return (
      <div className="user-profile__content">
        <div className="user-profile__container">
          <div className="user-profile">
            <div className="user-profile__header">
              <div className="user-profile__info">
                <h4 className="user-profile__details">Your account Details</h4>
                <p className="user-profile__name">Vasya Pupkin</p>
                <p className="user-profile__email">vasya.pupkin@gmail.com</p>
                <p className="user-profile__address">
                  ul. Soltysa 50, korp. 2, kv. 40
                </p>
              </div>
            </div>
            <div className="user-profile__nav">
              <div>
                <Link
                  to="/user/profile/edit"
                  className="link user-profile__nav-link"
                >
                  Edit details
                </Link>
              </div>
              <div>
                <Link
                  to="/user/profile/orders"
                  className="link user-profile__nav-link"
                >
                  Orders
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ClientProfile;
