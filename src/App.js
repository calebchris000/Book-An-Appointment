import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Cars from "./components/Cars";
import AddCar from "./components/Addcars/Addcars";
import DeleteCar from "./components/DeleteCar";
import Signup from "./components/Signup";
import Login from "./components/Login/Login";
import Reservation from "./components/Reservation";
import ReservedCars from "./components/ReservedCars";
import ProductDescription from "./components/Description/ProductDescription";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/cars" element={<ProductDescription />} />
        <Route exact path="/addcars" element={<AddCar />} />
        <Route exact path="/deleteCar" element={<DeleteCar />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/new_reservations" element={<Reservation />} />
        <Route exact path="/reservedCars" element={<ReservedCars />} />
        <Route exact path="cars/:id" element={<ProductDescription />} />
        <Route exact path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
