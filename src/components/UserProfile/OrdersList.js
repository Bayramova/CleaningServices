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
            prefix={order.prefix}
            phone={order.phone}
            cost={order.cost}
            client_id={order.client_id}
            company_id={order.company_id}
            company_name={
              this.props.companies.find(
                company => company.id === order.company_id
              ).name
            }
            client_name={
              this.props.clients.find(client => client.id === order.client_id)
                .name
            }
            cancelOrder={this.props.cancelOrder}
            changeOrderStatus={this.props.changeOrderStatus}
            history={this.props.history}
            auth={this.props.auth}
          />
        ))}
      </React.Fragment>
    );
  }
}

export default OrdersList;
