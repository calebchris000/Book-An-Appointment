import React, { useEffect } from "react";
import "./Home.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductDetails } from "../../redux/productDetails/productDetailsSlice";
import Loader from "../Loader/Loader";
import { useNavigate } from 'react-router-dom';
const Vehicle = ({ model, description, image }) => {
  return (
    <>
      <div className="vehicle-holder">
        <div className="vehicle-circle">
          <img className="vehicle" src={image} alt="" />
        </div>
        <h3 className="vehicle-model">{model.toUpperCase()}</h3>
        <p className="vehicle-description">{description}</p>
      </div>
    </>
  );
};

const Home = () => {
  const navigate = useNavigate();
  const { isLoading, Products } = useSelector((store) => store.productDetails);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProductDetails());
  }, []);
  const name = localStorage.getItem('name')

  if (isLoading) {
    return (
      <section className="homepage">
        <Loader />
      </section>
    );
  }
  return (
    <section className="homepage">
      <div className="hero">
        <h1 className="hero_header">Welcome Back, {name}</h1>
        <p className="hero_text">Please select a Model</p>
        <div className="vehicle-container" >
          {Products.map((car) => (
            <div onClick={() => navigate(`cars/${car.id}`)}>
            <Vehicle key={car.id} model={car.model} description={car.description} image={car.image} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
