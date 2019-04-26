import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./UserProfile.css";
import OrdersList from "./OrdersList";
import { Select } from "antd";

class UserProfile extends Component {
  handleChange = value => {
    this.props.onChange(value);
  };

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

          {this.props.orders.length ? (
            <section>
              <div className="orders-list__navigation">
                <Select
                  defaultValue="Sort by"
                  style={{ width: 120 }}
                  onChange={this.handleChange}
                >
                  <Select.Option value="newest">Newest first</Select.Option>
                  <Select.Option value="oldest">Oldest first</Select.Option>
                </Select>
              </div>
            </section>
          ) : (
            <React.Fragment />
          )}
          <OrdersList
            orders={this.props.orders}
            cancelOrder={this.props.cancelOrder}
            changeOrderStatus={this.props.changeOrderStatus}
            auth={this.props.auth}
          />
        </div>
      </div>
    );
  }
}

export default UserProfile;
