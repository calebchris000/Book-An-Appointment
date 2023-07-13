import React from 'react';

const AddCar = () => (
  <div>
    <form>
      <h2>Add A New Car</h2>
      <div>
        <input
          type="text"
          name="name"
          placeholder="Enter Car name"
          autoComplete="off"
          required
        />
      </div>
      <div>
        <input
          type="text"
          name="description"
          placeholder="Description"
          required
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Model"
          name="model"
          required
        />
      </div>
      <div>
        <input
          type="number"
          placeholder="Price per day"
          name="price"
          required
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Image URL"
          name="image"
        />
      </div>
      <button type="submit">Add Car</button>
    </form>
  </div>
);
export default AddCar;
