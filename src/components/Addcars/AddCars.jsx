import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCar } from "../../redux/signup/signupSlice";
import "./AddCars.css";
import { useNavigate } from "react-router";
import { setAuth } from "../../redux/authSlice";
const AddCarForm = () => {
  const dispatch = useDispatch();
  const { isLoading, error, successMessage, isAddCar } = useSelector((store) => store.signup);
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [model, setModel] = useState("");
  const [engine, setEngine] = useState("");
  const [price, setPrice] = useState("");
  const [mileage, setMileage] = useState("");
  const navigate = useNavigate();
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
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      },
    };
    dispatch(addCar(requestOptions));
  };

  useEffect(() => {
    dispatch(setAuth());
    isAddCar === true ? navigate("/") : navigate("/addcars");
  }, [isAddCar]);
  return (
    <div className="add-car-form">
      <h2>Add Car</h2>
      {successMessage && <div className="success-message">{successMessage}</div>}
      {error && <div className="error-message">{error}</div>}
      <form className="add-car-form-component" onSubmit={handleSubmit}>
        <div className="">
          <label className="add-car-label">Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div className="">
          <label className="add-car-label">Image:</label>
          <input className="add-car-input" type="text" value={image} onChange={(e) => setImage(e.target.value)} required />
        </div>
        <div className="">
          <label className="add-car-label">Description:</label>
          <input className="add-car-input" type="text" value={description} onChange={(e) => setDescription(e.target.value)} required />
        </div>
        <div className="">
          <label className="add-car-label">Model:</label>
          <input className="add-car-input" type="text" value={model} onChange={(e) => setModel(e.target.value)} required />
        </div>
        <div className="">
          <label className="add-car-label">Engine:</label>
          <input className="add-car-input" type="text" value={engine} onChange={(e) => setEngine(e.target.value)} required />
        </div>
        <div className="">
          <label className="add-car-label">Price:</label>
          <input className="add-car-input" type="integer" value={price} onChange={(e) => setPrice(e.target.value)} required />
        </div>
        <div className="">
          <label className="add-car-label">Mileage:</label>
          <input className="add-car-input" type="integer" value={mileage} onChange={(e) => setMileage(e.target.value)} required />
        </div>
        <button className="submit-add-car" type="submit" disabled={isLoading}>
          {isLoading ? "Loading..." : "Add Car"}
        </button>
      </form>
    </div>
  );
};
export default AddCarForm;
