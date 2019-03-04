import React, { Component } from "react";
import { Rate } from "antd";
import { List, Avatar, Icon } from "antd";

const Company = props => {
  const { id, logo, name, adress, rating } = props;
  return (
    <div className="company__card">
      <a>
        <img className="company__card__image" src={logo} />
        <div className="company__card__content">
          <div className="company__card-title"><a>{name}</a></div>
          <div className="company__card__rate">
            <Rate disabled defaultValue={parseInt(rating)} />
          </div>
          <div className="company__card-description">{adress}</div>
        </div>
      </a>
      <div className="company__card__order-link">
        <a>Make order</a>
      </div>
    </div>
  );
};


export default Company;
