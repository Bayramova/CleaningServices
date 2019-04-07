import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./UserProfile.css";
import OrdersList from "./OrdersList";

class ClientProfile extends Component {
  render() {
    return (
      <div className="user-profile__content">
        <div className="user-profile__container">
          <div className="user-profile">
            <div className="user-profile__header">
              <div className="user-profile__info">
                <h4 className="user-profile__details">Account details</h4>
                <p className="user-profile__name">
                  {this.props.auth.additionalUserData.name}
                </p>
                <p className="user-profile__email">
                  {this.props.auth.userData.email}
                </p>
                <p className="user-profile__address">
                  {this.props.auth.additionalUserData.address}
                </p>
              </div>
            </div>
            <div className="user-profile__nav">
              <div>
                <Link
                  to={`/user/${this.props.auth.userData.id}/edit`}
                  className="link user-profile__nav-link"
                >
                  Edit details
                </Link>
              </div>
            </div>
          </div>
          <OrdersList
            orders={this.props.orders}
            companies={this.props.companies}
            cancelOrder={this.props.cancelOrder}
          />
        </div>
      </div>
    );
  }
}

export default ClientProfile;
