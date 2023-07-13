import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Cars from './components/Cars';
import AddCar from './components/AddCars';
import DeleteCar from './components/DeleteCar';
import Header from './components/Header';
import Signup from './components/Signup';
import Login from './components/Login';
import Reservation from './components/Reservation';
import ReservedCars from './components/ReservedCars';
import CarDetails from './components/CarsDetails';
import Home from './components/Home';


function App() {
  return (
    <Router>
  
        <div><Header /></div>

          <Routes>
 
            <Route exact path="/cars" element={<Cars />} />
            <Route exact path="/addcars" element={<AddCar />} />
            <Route exact path="/deleteCar" element={<DeleteCar />} />
            <Route exact path="/signup" element={<Signup />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/new_reservations" element={<Reservation />} />
            <Route exact path="/reservedCars" element={<ReservedCars />} />
            <Route exact path="cars/:id" element={<CarDetails />} />
            <Route exact path="/" element={<Home />} />

            
          </Routes>
  
 
    </Router>
  );
}

export default App;
