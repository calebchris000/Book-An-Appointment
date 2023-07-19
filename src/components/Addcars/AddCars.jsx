import React from 'react';
import './AddCars.css';

const AddCar = () => (
  <div className="form-container">
    <form className="add-car-form">
      <h2 className="title">Add A New Car</h2>
      <div className="w-full">
        <input
          type="text"
          name="name"
          placeholder="Enter Car name"
          autoComplete="off"
          required
        />
      </div>
      <div className="w-full">
        <input
          type="text"
          name="description"
          placeholder="Description"
          required
        />
      </div>
      <div className="w-full">
        <input
          type="text"
          placeholder="Model"
          name="model"
          required
        />
      </div>
      <div className="w-full">
        <input
          type="number"
          placeholder="Price per day"
          name="price"
          required
        />
      </div>
      <div className="w-full">
        <input
          type="text"
          placeholder="Image URL"
          name="image"
          id="basic-url"
          aria-describedby="basic-addon3"
        />
      </div>
      <button type="submit">Add Car</button>
    </form>
  </div>
);
export default AddCar;
