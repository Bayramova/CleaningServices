import React from "react";
import "./UserProfile.css";

const Company = props => {
  const {
    id,
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
    client_id,
    company_id
  } = props;
  return (
    <div className="user-profile">
      <div className="user-profile__header--order">
        <h4 className="user-profile__details">Order</h4>
        <div>{status}</div>
      </div>
      <div className="user-profile__info">
        <p className="user-profile__name">{address}</p>
        <p className="user-profile__name">{service}</p>
        <p className="user-profile__name">
          {/* {this.props.auth.additionalUserData.name} */}
        </p>
        <p className="user-profile__name">
          {/* {this.props.auth.additionalUserData.name} */}
        </p>
      </div>
    </div>
  );
};

export default Company;
