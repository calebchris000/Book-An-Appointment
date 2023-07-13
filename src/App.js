import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Cars from './components/Car/Cars';
import AddCar from './components/Car/AddCars';
import DeleteCar from './components/Car/DeleteCar/DeleteCar';
import Header from './components/Header';


function App() {
  return (
    <Router>
      <div>
        <div><Header /></div>
        <div>
          <Routes>
 
            <Route exact path="/cars" element={<Cars />} />
            <Route exact path="/addcars" element={<AddCar />} />
            <Route exact path="/deleteCar" element={<DeleteCar />} />
            
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
