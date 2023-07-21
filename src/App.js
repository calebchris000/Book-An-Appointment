import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Cars from "./components/Cars";
import AddCar from "./components/Addcars/AddCars";

import DeleteCar from "./components/DeleteCar";
import ReservationForm from "./components/ReservationForm";
import Reservations from "./components/Reservations/Reservations";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginForm from "./components/Login/Login";
import SignupForm from "./components/Signup";
// import AddCar from "./components/Addcars/Addcars";
import Private from "./components/PrivateRoute";
import ProductDescription from "./components/Description/ProductDescription";
import ReserveProduct from './components/ReserveProduct'
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setAuth } from "./redux/authSlice";
import AddCarForm from "./components/AddCarForm";




function App() {
const dispatch = useDispatch()
useEffect(() => {
  dispatch(setAuth());
  }, [dispatch]); 

  return (
    <Router>
      <Navbar />
      <Routes>

        {/* <Route exact path="/addcars" element={<AddCar />} /> */}
        <Route exact path="/deleteCar" element={<DeleteCar />} />
        <Route exact path="/signup" element={<SignupForm />} />
        <Route exact path="/login" element={<LoginForm />} />
        <Route exact path="/reservation_form" element={<ReservationForm />} />
        <Route exact path="/reservedCars" element={(<Private><ReservedCars /> </Private>)} />
        <Route exact path="cars/:id" element={<ProductDescription />} />
        <Route exact path="cars/:id/reserve" element={<ReserveProduct />} />
        <Route exact path="/" element={<Home />} />
        <Route exact path="/addcars" element={<AddCarForm />} />
          <Route path="/reservations" element={<Private><Reservations /></Private> } />

      </Routes>
    </Router>
  );
}

export default App;
