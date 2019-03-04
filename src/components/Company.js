import React, { Component } from "react";
import { Rate } from "antd";
import { Link } from "react-router-dom";

const Company = props => {
  const { id, logo, name, adress, rating } = props;
  return (
    <div className="company__card">
      <Link to={`/company/${id}`}>
        <img className="company__card__image" src={logo} />
        <div className="company__card__content">
          <div className="company__card-title"><a>{name}</a></div>
          <div className="company__card__rate">
            <Rate disabled defaultValue={parseInt(rating)} />
          </div>
          <div className="company__card-description">{adress}</div>
        </div>
      </Link>
      <div className="company__card__order-link">
        <Link to={'/make_order'}>Make order</Link>
      </div>
    </div>
  );
};


export default Company;
