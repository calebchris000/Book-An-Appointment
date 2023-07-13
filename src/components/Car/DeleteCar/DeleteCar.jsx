import React from 'react';
import './delete.css';

const DeleteCar = () => {

  return (
        <div >
          <div >
            <h1 >Remove car</h1>
          </div>
          {cars.map((car) => (
            <div key={car.id}>
              <img src={car.carImg} alt="delete"  />
              <div>
                <button type="button">
                  Remove
                </button>
                <div>{car.carModel}</div>
              </div>
            </div>
          ))}
        </div>
  );
};

export default DeleteCar;
