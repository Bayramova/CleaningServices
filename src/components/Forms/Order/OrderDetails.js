import React from "react";
import { Modal } from "antd";

const OrderDetails = props => {
  const {
    visible,
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
    onOk,
    onCancel,
    footer
  } = props;
  return (
    <Modal
      title="Order details"
      visible={visible}
      onOk={onOk}
      onCancel={onCancel}
      footer={footer}
    >
      <p>Address: {address}</p>
      <p>Type of cleaning: {service.slice(0, service.indexOf("cleaning"))}</p>
      <p>Big rooms: {bigRooms}</p>
      <p>Small rooms: {smallRooms}</p>
      <p>Bathrooms: {bathrooms}</p>
      <p>Day/days: {daysOfCleaning.join(", ")}</p>
      <p>Expected start time of cleaning: {startTimeOfCleaning}</p>
      <p>Cleaning frequency: {cleaningFrequency}</p>
      <p>
        Phone number: +375{prefix}
        {phone}
      </p>
      <h3> Total cost: {cost} $</h3>
    </Modal>
  );
};

export default OrderDetails;
