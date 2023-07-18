import React from 'react';

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
          className="form-control w-full"
          required
        />
      </div>
      <div className="w-full">
        <input
          type="text"
          name="description"
          className="w-full form-control"
          placeholder="Description"
          required
        />
      </div>
      <div className="w-full">
        <input
          type="text"
          placeholder="Model"
          name="model"
          className="form-control"
          required
        />
      </div>
      <div className="w-full">
        <input
          type="number"
          placeholder="Price per day"
          name="price"
          className="form-control"
          required
        />
      </div>
      <div className="input-group mb-3">
        <input
          type="text"
          placeholder="Image URL"
          name="image"
          className="form-control"
          id="basic-url"
          aria-describedby="basic-addon3"
        />
      </div>
      <button type="submit" className="btn btn-primary mb-3">Add Car</button>
    </form>
  </div>
);
export default AddCar;
