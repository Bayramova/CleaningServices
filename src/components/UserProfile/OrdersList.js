import React, { Component } from "react";
import OrdersListItem from "./OrdersListItem";

class OrdersList extends Component {
  render() {
    return (
      <React.Fragment>
        {this.props.orders.map(order => (
          <OrdersListItem
            key={order.id}
            id={order.id}
            status={order.status}
            address={order.address}
            service={order.service}
            bigRooms={order.bigRooms}
            smallRooms={order.smallRooms}
            bathrooms={order.bathrooms}
            daysOfCleaning={order.daysOfCleaning}
            startTimeOfCleaning={order.startTimeOfCleaning}
            cleaningFrequency={order.cleaningFrequency}
            phone={order.phone}
            cost={order.cost}
            feedbackLeft={order.feedbackLeft}
            client_name={order.name}
            company_name={order.company_name}
            cancelOrder={this.props.cancelOrder}
            changeOrderStatus={this.props.changeOrderStatus}
            auth={this.props.auth}
          />
        ))}
      </React.Fragment>
    );
  }
}

export default OrdersList;
