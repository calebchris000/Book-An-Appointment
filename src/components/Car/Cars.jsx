import React from 'react';
import { Link } from 'react-router-dom';
import './Cars.css';

const Cars = () => {
  return (
    <div>
      <h3>Cars</h3>
      <ul>
        {cars.map((car) => (
          <li key={car.id}>
            <img src={car.photo} alt={car.name} className="car-img" />
            <h4>{car.name}</h4>
            <p>{car.description}</p>
            <Link to={`/cars/${car.id}`} className="car-link">
              details
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cars;
