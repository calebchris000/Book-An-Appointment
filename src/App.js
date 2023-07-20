import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Cars from "./components/Cars";
import AddCar from "./components/Addcars/AddCars";
import DeleteCar from "./components/DeleteCar";
import Signup from "./components/Signup";
import Login from "./components/Login/Login";
import Reservation from "./components/Reservation";
import ReservedCars from "./components/ReservedCars";
import ProductDescription from "./components/Description/ProductDescription";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginForm from "./components/Login/Login";
import SignupForm from "./components/Signup";



function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/addcars" element={<AddCar />} />
        <Route path="/deleteCar" element={<DeleteCar />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/new_reservations" element={<Reservation />} />
        <Route path="/reservedCars" element={<ReservedCars />} />
        <Route path="cars/:id" element={<ProductDescription />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
