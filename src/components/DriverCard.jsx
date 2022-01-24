import React from 'react';
import Rating from './Rating';
import BoxColor from './BoxColor';

const DriverCard = (props) => {
  const { name, rating, img, car } = props;
  return (
    <div className="driver-card">
      <img src={img} alt={`${name} card`} />
      <div>
        <h2>{name}</h2>
        <Rating className="stars">{rating}</Rating>
        <p>
          {car.model} - {car.licensePlate}
        </p>
      </div>
    </div>
  );
};

export default DriverCard;
