import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceCards.css';

const ServiceCard = props => {
  const { id, image, title, description } = props;
  return (
    <div className="catalogue__card">
      <Link to={`/service/${id}`}>
        <img className="catalogue__card__image" alt="service" src={image} />
        <div className="catalogue__card__content">
          <div className="catalogue__card-title">{title}</div>
          <div className="catalogue__card-description">{description}</div>
        </div>
      </Link>
    </div>
  );
};

export default ServiceCard;
