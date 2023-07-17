import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Cars from "./components/Cars";
import AddCar from "./components/AddCars";
import DeleteCar from "./components/DeleteCar";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Reservation from "./components/Reservation";
import ReservedCars from "./components/ReservedCars";
import ProductDetails from "./components/Home/productDetails";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/cars" element={<ProductDetails />} />
        <Route exact path="/addcars" element={<AddCar />} />
        <Route exact path="/deleteCar" element={<DeleteCar />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/new_reservations" element={<Reservation />} />
        <Route exact path="/reservedCars" element={<ReservedCars />} />
        <Route exact path="cars/:id" element={<ProductDetails />} />
        <Route exact path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
