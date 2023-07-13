import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Cars from './components/Car/Cars';
import AddCar from './components/Car/AddCars';
import DeleteCar from './components/Car/DeleteCar/DeleteCar';

function App() {
  return (
    <Router>
      <div>
        <div><Header /></div>
        <div>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/cars" element={<Cars />} />
            <Route exact path="/signup" element={<Signup />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/new_reservations" element={<ReservationNew />} />
            <Route exact path="/reservedCars" element={<ReservedCars />} />
            <Route exact path="/addcars" element={<AddCar />} />
            <Route exact path="/deleteCar" element={<DeleteCar />} />
            <Route exact path="cars/:id" element={<CarDetails />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
