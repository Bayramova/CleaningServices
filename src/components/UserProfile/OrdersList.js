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
            client_id={order.client_id}
            company_id={order.company_id}
          />
        ))}
      </React.Fragment>
    );
  }
}

export default OrdersList;
