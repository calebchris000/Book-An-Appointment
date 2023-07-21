import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCar } from "../redux/signup/signupSlice";
const AddCarForm = () => {
  const dispatch = useDispatch();
  const {isLoading, error, successMessage }= useSelector((store) => store.signup);
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [model, setModel] = useState("");
  const [engine, setEngine] = useState("");
  const [price, setPrice] = useState("");
  const [mileage, setMileage] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      name,
      image,
      description,
      model,
      engine,
      price,
      mileage,
    };
    const requestOptions = {
      sign_in: true,
      endPoints: "api/products",
      method: {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData)
    }};
    dispatch(addCar(requestOptions));
  };
  return (
    <div className="container-md">
      <h2>Add Car</h2>
      {successMessage && <div className="success-message">{successMessage}</div>}
      {error && <div className="error-message">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label>Image:</label>
          <input type="text" value={image} onChange={(e) => setImage(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label>Description:</label>
          <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label>Model:</label>
          <input type="text" value={model} onChange={(e) => setModel(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label>Engine:</label>
          <input type="text" value={engine} onChange={(e) => setEngine(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label>Price:</label>
          <input type="integer" value={price} onChange={(e) => setPrice(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label>Mileage:</label>
          <input type="integer" value={mileage} onChange={(e) => setMileage(e.target.value)} required />
        </div>
        <button className = "btn btn-primary" type="submit" disabled={isLoading}>
          {isLoading ? "Loading..." : "Add Car"}
        </button>
      </form>
    </div>
  );
};
export default AddCarForm;