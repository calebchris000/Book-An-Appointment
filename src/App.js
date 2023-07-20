import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DeleteCar from "./components/DeleteCar";
import ReservationForm from "./components/ReservationForm";
import ReservedCars from "./components/ReservedCars";
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
        <Route exact path="/deleteCar" element={<ReserveProduct />} />
        <Route exact path="/signup" element={<SignupForm />} />
        <Route exact path="/login" element={<LoginForm />} />
        <Route exact path="/reservation_form" element={<ReservationForm />} />
        <Route exact path="/reservedCars" element={(<Private><ReservedCars /> </Private>)} />
        <Route exact path="cars/:id" element={<ProductDescription />} />
        <Route exact path="cars/:id/reserve" element={<ReserveProduct />} />
        <Route exact path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
