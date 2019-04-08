import React, { Component } from "react";
import { Button } from "antd";
import "./UserProfile.css";
import OrderDetails from "../Forms/Order/OrderDetails";

class OrderListItem extends Component {
  state = {
    visible: false
  };

  showModal = event => {
    this.setState({
      visible: true
    });
  };

  handleStatusChange = event => {
    if (this.props.status === "done") {
      event.preventDefault();
    } else {
      this.props.changeOrderStatus(this.props.id, this.props.history);
    }
  };

  handleCancel = event => {
    this.props.cancelOrder(this.props.id, this.props.history);
  };

  render() {
    const {
      status,
      address,
      service,
      bigRooms,
      smallRooms,
      bathrooms,
      daysOfCleaning,
      startTimeOfCleaning,
      cleaningFrequency,
      prefix,
      phone,
      cost,
      company_name,
      client_name
    } = this.props;
    const orderButtons =
      this.props.status === "new" ? (
        <div className="user-profile__order-buttons">
          <div onClick={this.showModal} className="user-profile__order-button">
            Show details
          </div>
          <div
            onClick={this.handleCancel}
            className="user-profile__order-button--cancel"
          >
            Cancel order
          </div>
        </div>
      ) : (
        <div onClick={this.showModal} className="user-profile__order-button">
          Show details
        </div>
      );
    return (
      <div className="user-profile">
        <div className="user-profile__header--order">
          {this.props.auth.userData.role === "client" ? (
            <div className="user-profile__order-status">{status}</div>
          ) : (
            <Button type="primary" onClick={this.handleStatusChange}>
              {status}
            </Button>
          )}
          {orderButtons}
        </div>
        <div className="user-profile__info">
          {this.props.auth.userData.role === "client" ? (
            <p className="user-profile__name">{`Company: ${company_name}`}</p>
          ) : (
            <p className="user-profile__name">{`Client: ${client_name}`}</p>
          )}
          <p className="user-profile__name">
            {`Service: ${service.slice(0, service.indexOf("cleaning"))}`}
          </p>
        </div>
        <OrderDetails
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          address={address}
          service={service}
          bigRooms={bigRooms}
          smallRooms={smallRooms}
          bathrooms={bathrooms}
          daysOfCleaning={daysOfCleaning}
          startTimeOfCleaning={startTimeOfCleaning}
          cleaningFrequency={cleaningFrequency}
          prefix={prefix}
          phone={phone}
          cost={cost}
          footer={null}
        />
      </div>
    );
  }
}

export default OrderListItem;
