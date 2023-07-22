import React, { useEffect } from "react";
import "./Reservations.css";
import { useDispatch, useSelector } from "react-redux";
import { getReservations } from "../../redux/Reservations/ReservationSlice";
import Loader from "../Loader/Loader";
import { setAuth } from "../../redux/authSlice";
const Reservations = () => {
  const dispatch = useDispatch();
  const { loading, success, failure, errorMessage, reservations } = useSelector((store) => store.reservations);
  useEffect(() => {
    dispatch(setAuth());
    dispatch(getReservations());
  }, []);

  if (loading) {
    return (
      <div className="reservation-container bg-transparent">
        <Loader />
      </div>
    );
  }
  if (success === true) {
    return (
      <section className="reservation-container">
        <h2 className="reservation-header">MY RESERVATIONS</h2>
        <div className="reservation-list">
          <div className="reservation-items-container">
            {typeof reservations !== "object" ? (
              <h1>Reservation is Empty</h1>
            ) : (
              reservations.data.map((item) => (
                <div key={item.id} className="reservation-card">
                  <div className="reservation-card__id">Reservation #{item.id}</div>
                  <div className="reservation-card__city">Name: {item.product.name}</div>
                  <div className="reservation-card__date">Date: {item.date}</div>
                  <div className="reservation-card__city">City: {item.city}</div>
                </div>
              ))
            )}
          </div>
        </div>
        <img src="https://i.ibb.co/pK2TsyG/486-4862054-super-car-png.png" className="reservation-image-overlay"></img>
      </section>
    );
  }
};

export default Reservations;
