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
      this.props.changeOrderStatus(this.props.id);
    }
  };

  handleOk = e => {
    this.setState({
      visible: false
    });
  };

  handleCancel = e => {
    this.setState({
      visible: false
    });
  };

  handleOrderCancel = event => {
    this.props.cancelOrder(this.props.id);
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
            onClick={this.handleOrderCancel}
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
          <div className={status}>{status}</div>
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
          address={address}
          service={service}
          bigRooms={bigRooms}
          smallRooms={smallRooms}
          bathrooms={bathrooms}
          daysOfCleaning={daysOfCleaning}
          startTimeOfCleaning={startTimeOfCleaning}
          cleaningFrequency={cleaningFrequency}
          phone={phone}
          cost={cost}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={null}
        />
        <div className="company-button">
          {this.props.auth.userData.role === "company" && status === "new" ? (
            <Button type="primary" onClick={this.handleStatusChange}>
              Confirm order
            </Button>
          ) : this.props.auth.userData.role === "company" &&
            status === "confirmed" ? (
            <Button type="primary" onClick={this.handleStatusChange}>
              Close order
            </Button>
          ) : (
            <React.Fragment />
          )}
        </div>
      </div>
    );
  }
}

export default OrderListItem;
