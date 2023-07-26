import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { signupUser } from "../redux/signup/signupSlice";
import { postReservation } from "../redux/Reservations/ReservationSlice";
import { useNavigate } from "react-router";
import { fetchProductDetails } from "../redux/productDetails/productDetailsSlice";

const ReservationForm = ({ selectedProductID, selectedCar }) => {
  const name = localStorage.getItem("name");
  const navigate = useNavigate();
  const { postReservationSuccess, postReservationFailure } = useSelector((store) => store.reservations);
  const dispatch = useDispatch();
  const { Products } = useSelector((store) => store.productDetails) || [];

  const [formData, setFormData] = useState({
    date: "",
    city: "",
    product_id: "",
  });

  useEffect(() => {
    Products.length === 0 ? dispatch(fetchProductDetails()) : 0;
    postReservationSuccess === true ? navigate("/reservations") : 0;
    dispatch({ type: "Reservations/ResetState" });
  }, [postReservationSuccess]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedCar) {
      formData.product_id = selectedProductID;
    }
    const data = {
      endPoints: "api/reservations",
      method: {
        method: "POST",
        headers: {
          Authorization: localStorage.getItem("authToken"),
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ reservation: formData }),
      },
    };
    dispatch(postReservation(data));
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const locations = [
    { id: 1, name: "India" },
    { id: 2, name: "USA" },
    { id: 3, name: "Nigeria" },
    { id: 4, name: "World" },
  ];

  return (
    <div className="reservation-form-container">
      <img src="https://i.ibb.co/pK2TsyG/486-4862054-super-car-png.png" className="reservation-image-overlay"></img>

      <h3 className="reservation-title text-white">Create New Reservation</h3>
      <form className="reservation-form" onSubmit={handleSubmit}>
        <input className="name-input" type="text" value={name} disabled />
        <div className="car-location-container">
          {!selectedCar && (
            <div className="car-selection">
              <select className="car-select" value={formData.product_id} onChange={handleChange} name="product_id">
                <option value="">Select a Car</option>
                {Products.map((car) => (
                  <option key={car.id} value={car.id}>
                    {car.name}
                  </option>
                ))}
              </select>
            </div>
          )}
          <div className="location-selection">
            <select className="location-select" value={formData.city} onChange={handleChange} name="city">
              <option value="">Select a location</option>
              {locations.map((location) => (
                <option key={location.id} value={location.name}>
                  {location.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <input className="date-input" type="date" value={formData.date} onChange={handleChange} name="date" />
        <button className="create-button" type="submit">
          Create Reservation
        </button>
      </form>
    </div>
  );
};

export default ReservationForm;
