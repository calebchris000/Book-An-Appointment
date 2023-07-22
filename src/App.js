import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Cars from "./components/Cars";
import AddCar from "./components/Addcars/AddCars";

import DeleteCar from "./components/DeleteCar/DeleteCar";
import ReservationForm from "./components/ReservationForm";
import Reservations from "./components/Reservations/Reservations";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import LoginForm from "./components/Login/Login";
import SignupForm from "./components/Signup";
// import AddCar from "./components/Addcars/Addcars";
import Private from "./components/PrivateRoute";
import ProductDescription from "./components/Description/ProductDescription";
import ReserveProduct from "./components/ReserveProduct/ReserveProduct";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setAuth } from "./redux/authSlice";
import AddCarForm from "./components/AddCarForm";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setAuth());
  }, [dispatch]);

  return (
    <Router>
      <Navbar />
      <Routes>
        {/* <Route exact path="/addcars" element={<AddCar />} /> */}
        <Route path="/deleteCar" element={<Private><DeleteCar /></Private>} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/reservation_form" element={<Private><ReservationForm /></Private>} />
        <Route path="cars/:id" element={<Private><ProductDescription /></Private>} />
        <Route path="cars/:id/reserve" element={<Private><ReserveProduct /></Private>} />
        <Route path="/" element={<Private><Home /></Private> } />
        <Route
          path="/addcars"
          element={
            <Private>
              <AddCar />
            </Private>
          }
        />
        <Route
          path="/reservations"
          element={
            <Private>
              <Reservations />
            </Private>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
