import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./UserProfile.css";

class UserProfileHeader extends Component {
  render() {
    return (
      <div className="user-profile__header">
        <div className="user-profile__info">
          <h4 className="user-profile__name">My profile</h4>
          <div className="user-profile__nav">
            <div>
              <Link to="/user/profile">Basic Details</Link>
            </div>
            <div>
              <Link to="/user/profile/orders">Orders</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UserProfileHeader;
