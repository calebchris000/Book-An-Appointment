import React from 'react';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteCar } from '../store/deleteCarSlice';

const DeleteCar = () => {
  const cars = useSelector((state) => state.deleteCar.cars);
  const dispatch = useDispatch();

  const handleDelete = (carId) => {
    dispatch(deleteCar(carId));
  };

  return (
    <div>
      <h2>List of Cars</h2>
      <ul>
        {cars.map((car) => (
          <li key={car.id}>
            {car.make} - {car.model}
            <button onClick={() => handleDelete(car.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DeleteCar;
